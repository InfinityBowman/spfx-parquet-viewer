import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { SPHttpClient, type SPHttpClientResponse } from '@microsoft/sp-http';

import * as strings from 'ParquetViewerWebPartStrings';
import { mount, unmount, type AsyncBuffer } from './app/index';

export interface IParquetViewerWebPartProps {
  filePath: string;
}

/**
 * Thin SPFx shell: all rendering is delegated to the Vite-built UI bundle
 * in ./app (source in ui/). The shell only provides SharePoint plumbing —
 * authenticated file access and web part property persistence.
 */
export default class ParquetViewerWebPart extends BaseClientSideWebPart<IParquetViewerWebPartProps> {

  public render(): void {
    mount(this.domElement, {
      filePath: this.properties.filePath,
      openFile: this._openFile
    });
  }

  protected onDispose(): void {
    unmount(this.domElement);
  }

  // Opens a SharePoint file for ranged reads. The parquet $value endpoint
  // honors HTTP Range, so hyparquet pulls only the footer + needed column
  // chunks via slice() instead of downloading the whole file.
  private _openFile = async (path: string): Promise<AsyncBuffer> => {
    const url: string = `${this.context.pageContext.web.absoluteUrl}/_api/web/GetFileByServerRelativePath(decodedurl='${encodeURIComponent(path)}')/$value`;
    const getRange = (range: string): Promise<SPHttpClientResponse> =>
      this.context.spHttpClient.get(url, SPHttpClient.configurations.v1, { headers: { Range: range } });

    // One tiny ranged request to learn the total size (and confirm Range support).
    // Use 0-1 rather than 0-0 — some static servers (e.g. Vite's sirv) treat an
    // end of 0 as falsy and return the whole file for `bytes=0-0`.
    const probe = await getRange('bytes=0-1');
    if (!probe.ok && probe.status !== 206) {
      throw new Error(`Failed to open '${path}': HTTP ${probe.status}`);
    }
    const contentRange: string | null = probe.headers.get('Content-Range'); // "bytes 0-0/123456"
    const byteLength: number = contentRange
      ? Number(contentRange.split('/')[1])
      : Number(probe.headers.get('Content-Length'));
    if (!Number.isFinite(byteLength) || byteLength <= 0) {
      throw new Error(`Could not determine size of '${path}'`);
    }

    return {
      byteLength,
      slice: async (start: number, end: number = byteLength): Promise<ArrayBuffer> => {
        const from: number = start < 0 ? byteLength + start : start;
        const to: number = (end < 0 ? byteLength + end : end) - 1; // HTTP Range end is inclusive
        const response: SPHttpClientResponse = await getRange(`bytes=${from}-${to}`);
        if (!response.ok && response.status !== 206) {
          throw new Error(`Failed to read bytes ${from}-${to} of '${path}': HTTP ${response.status}`);
        }
        return response.arrayBuffer();
      }
    };
  };

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('filePath', {
                  label: strings.FilePathFieldLabel,
                  description: 'Server-relative path, e.g. /sites/dev/Shared Documents/data.parquet'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
