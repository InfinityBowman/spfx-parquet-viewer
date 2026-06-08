import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { SPHttpClient, type ISPHttpClientOptions } from '@microsoft/sp-http';

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
   * Authenticated, range-capable fetch primitive handed across the mount() seam.
   * hyparquet (inside the bundle) calls it like window.fetch — including with a
   * `Range` header — so only the byte ranges it needs are downloaded. Arrow fn so
   * `this` stays bound when passed across the seam.
   *
   * If SharePoint honors Range it replies 206 with the requested slice; if it
   * ignores Range it replies 200 with the whole file and hyparquet falls back to
   * buffering it — correct either way, just without the bandwidth win.
   */
  private _fetchFile: typeof globalThis.fetch = async (input, init) => {
    const path = typeof input === 'string' ? input : input.toString();
    const url = this._resolveFileUrl(path);

    // Forward hyparquet's headers (notably Range) to SPHttpClient.
    const headers: Record<string, string> = {};
    if (init?.headers) {
      new Headers(init.headers).forEach((value, key) => {
        headers[key] = value;
      });
    }
    const options: ISPHttpClientOptions = { method: init?.method ?? 'GET', headers };
    const res = await this.context.spHttpClient.fetch(url, SPHttpClient.configurations.v1, options);
    // SPHttpClientResponse is a Response at runtime (it implements Response and
    // delegates body/status/headers to a wrapped native Response), but Microsoft's
    // public typings omit `body`/`redirected`/`bytes`, so it doesn't structurally
    // satisfy the DOM `Response` the fetch seam expects. The cast is type-only.
    return res as unknown as Response;
  };

  /**
   * Resolves a server-relative path (or passthrough https URL) to the absolute
   * file URL. Uses the direct file URL rather than
   * _api/web/getFileByServerRelativeUrl(...)/$value because (a) it isn't scoped to
   * the current web, so a web part on one site can read a file in another, and
   * (b) the direct file handler honors HTTP Range more reliably than $value.
   * This is the single place to switch endpoints if testing shows otherwise.
   */
  private _resolveFileUrl(path: string): string {
    if (/^https?:\/\//i.test(path)) {
      return path;
    }
    const origin = new URL(this.context.pageContext.web.absoluteUrl).origin;
    return encodeURI(origin + (path.startsWith('/') ? path : '/' + path));
  }

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
