/**
 * File-like handle for ranged (partial) reads. Structurally compatible with
 * hyparquet's own AsyncBuffer, so it can be passed straight to parquetReadObjects.
 */
export interface AsyncBuffer {
  /** Total size of the file in bytes. */
  byteLength: number
  /** Reads the half-open byte range [start, end); `end` defaults to byteLength. */
  slice(start: number, end?: number): ArrayBuffer | Promise<ArrayBuffer>
}

export interface ParquetAppProps {
  /** Server-relative path to the .parquet file, e.g. "/sites/dev/Shared Documents/data.parquet" */
  filePath: string
  /**
   * Opens a file for ranged (partial) reading. The returned AsyncBuffer's
   * slice() issues HTTP Range requests, so hyparquet downloads only the footer
   * plus the column chunks it needs — not the whole file. The SPFx shell
   * implements this with SPHttpClient; the Vite dev harness with fetch().
   */
  openFile: (path: string) => Promise<AsyncBuffer>
}
