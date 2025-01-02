// TODO: checkout https://github.com/mozilla/web-ext
// TODO: add a way to automatically check the JS code of the extension, like at least to check if it runs and there is no syntax error

import * as fs from "fs";
import * as path from "path";

import zipFolder from "zip-folder";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const EXTENSION_SOURCE_FOLDER_RELATIVE_PATH = "src";

const DEFAULT_OUTPUT_ZIP_DIRECTORY_RELATIVE_PATH = "dist";
const DEFAULT_OUTPUT_ZIP_FILE_NAME = "moodle-downloader.zip";

// eslint-disable-next-line no-undef
const argv = yargs(hideBin(process.argv))
    .option("output-path", {
        alias: "o",
        type: "string",
        description: "Output path for the zip file",
        default: DEFAULT_OUTPUT_ZIP_DIRECTORY_RELATIVE_PATH,
        requiresArg: true
    })
    .option("output-filename", {
        alias: "f",
        type: "string",
        description: "Output filename for the zip file",
        default: DEFAULT_OUTPUT_ZIP_FILE_NAME,
        requiresArg: true
    })
    .option("verbose", {
        alias: "v",
        type: "boolean",
        description: "Run with verbose logging",
        default: false
    })
    .help()
    .argv;

const SourceFolder = path.resolve(EXTENSION_SOURCE_FOLDER_RELATIVE_PATH);
const DestFile = path.resolve(argv["output-path"], argv["output-filename"]);

if (argv.verbose) {
    console.log("[builder]: source folder:", SourceFolder);
    console.log("[builder]: destination file:", DestFile);
}

fs.mkdirSync(argv["output-path"], { recursive: true });

zipFolder(SourceFolder, DestFile, (err) => {
    if (err) {
        if (argv.verbose)
            console.log("[builder]: error while zipping", err);
    } else {
        if (argv.verbose)
            console.log("[builder]: successfully zipped the extension.");
    }
});