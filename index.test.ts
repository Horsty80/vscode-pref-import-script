import { beforeEach, describe, it } from "vitest";
import * as assert from "assert";
import * as fs from "fs";
import * as os from "os";
import { promisify } from "util";
import { exec } from "child_process";

const vscodeSettingsPath = `${os.homedir()}/Library/Application Support/Code/User/settings.json`;
const vscodeInsidersSettingsPath = `${os.homedir()}/Library/Application Support/Code - Insiders/User/settings.json`;

describe("VSCode settings importer", () => {
  beforeEach(async () => {
    // Make sure the VSCode Insiders settings file is deleted before each test
    try {
      await promisify(fs.unlink)(vscodeInsidersSettingsPath);
    } catch (err: unknown) {
      if ((err as NodeJS.ErrnoException).code !== "ENOENT") {
        throw err;
      }
    }
  });

  it("should import VSCode settings to VSCode Insiders", async () => {
    // Copy the VSCode settings file to a temporary file
    const tmpFile = `${os.tmpdir()}/vscode-settings.json`;
    await promisify(fs.copyFile)(vscodeSettingsPath, tmpFile);

    // Run the script with the temporary file as input
    const cmd = `node index.js ${tmpFile}`;
    await promisify(exec)(cmd);

    // Check that the VSCode Insiders settings file was created and has the same content as the temporary file
    const data = await promisify(fs.readFile)(vscodeInsidersSettingsPath, "utf8");
    const expectedData = await promisify(fs.readFile)(tmpFile, "utf8");
    assert.strictEqual(data, expectedData);
  });
});