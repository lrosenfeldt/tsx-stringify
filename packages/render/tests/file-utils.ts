import { readFileSync, rmSync, writeFileSync } from "node:fs";

import { tmpdir } from "os";
import { join } from "path";

export class TmpFile {
  readonly name: string;
  readonly path: string;
  constructor(fileName: string) {
    this.name = `${TmpFile.counter}_${fileName}`;
    // a counter is used to hash the files between tests
    TmpFile.counter++;
    this.path = join(tmpdir(), this.name);
  }
  static counter = 0;
  create(content = "") {
    writeFileSync(this.path, content, { encoding: "utf8", flag: "w+" });
  }
  content() {
    return readFileSync(this.path, { encoding: "utf8", flag: "r" });
  }
  delete() {
    rmSync(this.path, { force: true });
  }
}
