import { Manifest } from "./Manifest";

import YAML from "js-yaml";
import fs from "fs";

export class Web3API {
  public static load(manifestPath: string): Manifest {
    const manifest = YAML.safeLoad(
      fs.readFileSync(manifestPath, "utf-8")
    ) as Manifest | undefined;

    if (!manifest) {
      throw Error(`Unable to parse manifest: ${manifestPath}`);
    }

    // TODO: add validation
    // - validate manifest structure
    // - ensure everything exists

    return manifest;
  }

  public static dump(manifest: Manifest, manifestPath: string) {
    const str = YAML.safeDump(manifest);

    if (!str) {
      throw Error(`Unable to dump manifest: ${manifest}`);
    }

    fs.writeFileSync(manifestPath, str, "utf-8");
  }
}
