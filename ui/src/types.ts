export interface ParquetAppProps {
  /** Server-relative path to the .parquet file, e.g. "/sites/dev/Shared Documents/data.parquet" */
  filePath: string
  /**
   * Fetches the raw bytes of a file. The SPFx shell implements this with
   * SPHttpClient (authenticated); the Vite dev harness implements it with fetch().
   */
  fetchFile: (path: string) => Promise<ArrayBuffer>
}

export interface ParquetAppHandle {
  update: (props: ParquetAppProps) => void
  unmount: () => void
}
