import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { SPHttpClient } from '@microsoft/sp-http';

import * as strings from 'ParquetViewerWebPartStrings';
import { mount, unmount } from './vendor/explorer/explorer';

export interface IParquetViewerWebPartProps {
  filePath: string;
}

/**
 * Thin SPFx shell: all rendering is delegated to the Vite-built UI bundle in
 * ./vendor/explorer. The shell only provides SharePoint plumbing — authenticated
 * file access and web part property persistence.
 */
export default class ParquetViewerWebPart extends BaseClientSideWebPart<IParquetViewerWebPartProps> {

  public render(): void {
    mount(this.domElement, {
      filePath: this.properties.filePath,
      fetchFile: this._fetchFile
    });
  }

  /**
   * Fetches a file's raw bytes from SharePoint with the authenticated client.
   * Accepts a full https URL or a server-relative path (e.g.
   * "/sites/Documents/Shared Documents/data.parquet"). Fetching by direct file
   * URL (rather than _api/GetFileByServerRelativePath, which is scoped to the
   * current web) lets a web part on one site read a file in another site
   * collection. Arrow fn so `this` stays bound when passed across the mount() seam.
   */
  private _fetchFile = async (path: string): Promise<ArrayBuffer> => {
    const origin = new URL(this.context.pageContext.web.absoluteUrl).origin;
    const url = /^https?:\/\//i.test(path)
      ? path
      : encodeURI(origin + (path.startsWith('/') ? path : '/' + path));
    const res = await this.context.spHttpClient.get(url, SPHttpClient.configurations.v1);
    if (!res.ok) {
      throw new Error(`Could not load ${path} (HTTP ${res.status} ${res.statusText})`);
    }
    return res.arrayBuffer();
  };

  protected onDispose(): void {
    unmount(this.domElement);
  }

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
                  description: "Server-relative path, e.g. /sites/dev/Shared Documents/data.parquet"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
