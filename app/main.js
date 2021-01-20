#!/usr/bin/env node

const fs = require('fs');
const os = require('os');
const path = require('path');
const mkdirp = require('mkdirp');

/* ---------------------------------------- */
/*  Global Environment Configuration        */
/* ---------------------------------------- */

// Application name
global.vtt = "FoundryVTT";

// Package data
global.ver = JSON.parse(fs.readFileSync(`${__dirname}/package.json`, "utf8")).version;

// Application configuration
global.config = {};

// Game data
global.game = {};

// Track a fatal error if one has occurred
global.fatalError = null;

// Track logging messages which occur during initial setup
global.startupMessages = [];

/* ---------------------------------------- */
/*  Path Configuration                      */
/* ---------------------------------------- */

/**
 * Before proceeding with further setup, we need to identify some critical file system paths
 * The user data path is resolved in the following order of priority
 * 1) --dataPath command-line flag
 * 2) FOUNDRY_VTT_DATA_PATH environment variable
 * 3) Config/options.json file dataPath entry
 * 4) Default environment data path
 * @return {Object} A mapping of configured paths and path names
 */
function getPaths() {

  // The directory location of this file
  const root = __dirname;
  const parent = path.dirname(root);
  const appPath = path.basename(parent) === "resources" ? path.dirname(parent) : root;
  const isDebug = process.argv.includes("--debug") && fs.existsSync(`${root}/server`);

  // Node package import paths
  process.env.NODE_PATH = __dirname;
  require('module').Module._initPaths();

  // Get the default environment data path
  const envDataPath = _getEnvDataPath();
  const envConfigPath = path.join(envDataPath, "Config");
  const envOptionsPath = path.join(envConfigPath, "options.json");

  // Custom user-requested data path
  let cliDataPath = process.argv.find(a => a.startsWith("--dataPath")) || null;
  if ( cliDataPath ) cliDataPath = cliDataPath.split("=")[1];

  // Try loading a custom data path
  let configDataPath = null;
  if ( fs.existsSync(envOptionsPath) ) {
    const envOptions = JSON.parse(fs.readFileSync(envOptionsPath, "utf8"));
    configDataPath = envOptions["dataPath"] || null;
  }

  // Resolve the user data path in order
  let userDataPath = cliDataPath || process.env.FOUNDRY_VTT_DATA_PATH || configDataPath || envDataPath;

  // Validate that the parent directory for the requested user data path exists
  if ( !fs.existsSync(path.dirname(userDataPath)) ) {
    startupMessages.push({level: "error", message: `The requested data path ${userDataPath} does not exist, attempting to use fallback data path ${envDataPath}.`});
    userDataPath = envDataPath;
    if ( !fs.existsSync(path.dirname(userDataPath)) ) {
      throw new Error(`The fallback data path ${userDataPath} does not exist.`)
    }
  }

  // Prevent user data from being inside the application directory
  const relToApp = path.relative(appPath, userDataPath);
  if ( !(relToApp.startsWith("..") || path.isAbsolute(relToApp)) ) {
    startupMessages.push({level: "error", message: `The data path ${userDataPath} must not be inside the application location ${appPath}. Falling back to default data path ${envDataPath}.`});
    userDataPath = envDataPath;
  }

  // Update module paths
  const codePath = path.join(root, isDebug ? "server" : "dist");
  module.paths = [path.join(root, "node_modules"), codePath];

  // Return a mapping of relevant paths
  const paths = {
    root: root,
    app: appPath,
    public: path.join(root, "public"),
    code: codePath,
    envData: envDataPath,
    envConfig: envConfigPath,
    envOptions: envOptionsPath,
    user: userDataPath,
    data: path.join(userDataPath, "Data"),
    config: path.join(userDataPath, "Config"),
    options: path.join(userDataPath, "Config", "options.json"),
    logs: path.join(userDataPath, "Logs")
  };

  // Normalize and format paths
  for ( let [k, v] of Object.entries(paths) ) {
    paths[k] = path.posix.normalize(v.split(path.sep).join(path.posix.sep));
  }
  return paths;
}

/* ---------------------------------------- */

/**
 * Get the recommended user data path for the architecture based on the environment recommendation
 * Windows: https://docs.microsoft.com/en-us/windows/uwp/design/app-settings/store-and-retrieve-app-data
 * MacOS: https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/MacOSXDirectories/MacOSXDirectories.html
 * Linux: https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html
 * @returns {string}    The OS recommended user data path for the application
 * @private
 */
function _getEnvDataPath() {
  const homedir = os.homedir();
  switch (process.platform) {

    // Windows
    case "win32":
      return path.join(process.env.LOCALAPPDATA || path.join(homedir, 'AppData', 'Local'), global.vtt);

    // MacOS
    case "darwin":
      return path.join(homedir, 'Library', 'Application Support', global.vtt);

    // Linux
    default:
      let linuxPath = process.env.XDG_DATA_HOME || path.join(homedir, '.local', 'share');
      if ( !fs.existsSync(linuxPath) ) {
        try {
          mkdirp(linuxPath);
        } catch(err) {
          linuxPath = "/local";
        }
      }
      return path.join(linuxPath, global.vtt);
  }
}

/* ---------------------------------------- */
/*  Package Initialization                  */
/* ---------------------------------------- */

try {
  global.paths = getPaths();
} catch(err) {
  process.stdout.write(err.stack);
  process.exit(1);
}
require("init")(process.argv, global.paths, startupMessages);
