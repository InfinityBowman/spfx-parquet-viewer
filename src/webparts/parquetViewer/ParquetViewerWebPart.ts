import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { SPHttpClient } from '@microsoft/sp-http';

import * as strings from 'ParquetViewerWebPartStrings';
import { mount, type ParquetAppHandle, type ParquetAppProps } from './app/index';

export interface IParquetViewerWebPartProps {
  filePath: string;
}

/**
 * Thin SPFx shell: all rendering is delegated to the Vite-built UI bundle
 * in ./app (source in ui/). The shell only provides SharePoint plumbing —
 * authenticated file access and web part property persistence.
 */
export default class ParquetViewerWebPart extends BaseClientSideWebPart<IParquetViewerWebPartProps> {

  private _app: ParquetAppHandle | undefined;

  public render(): void {
    const props: ParquetAppProps = {
      filePath: this.properties.filePath,
      fetchFile: this._fetchFile
    };

    if (this._app) {
      this._app.update(props);
    } else {
      this._app = mount(this.domElement, props);
    }
  }

  protected onDispose(): void {
    if (this._app) {
      this._app.unmount();
      this._app = undefined;
    }
    super.onDispose();
  }

  private _fetchFile = async (path: string): Promise<ArrayBuffer> => {
    const url: string = `${this.context.pageContext.web.absoluteUrl}/_api/web/GetFileByServerRelativePath(decodedurl='${encodeURIComponent(path)}')/$value`;
    const response = await this.context.spHttpClient.get(url, SPHttpClient.configurations.v1);
    if (!response.ok) {
      throw new Error(`Failed to fetch '${path}': HTTP ${response.status}`);
    }
    return response.arrayBuffer();
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
