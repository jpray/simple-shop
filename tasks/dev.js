const Bundler = require("parcel-bundler");
const Path = require("path");
var browserSync = require("browser-sync").create();
const fs = require("fs-extra");
const copyStatic = require("./copy-static");

fs.removeSync('dist');
copyStatic();

const entryFiles = Path.join(__dirname, "../src/*.html");

const options = {
  outDir: "./dist",
  publicUrl: '.',
  watch: true,
  cache: true,
  cacheDir: ".cache",
  minify: false,
  target: "browser",
  https: false,
  logLevel: 3,
  hmr: false,
  sourceMaps: true,
  detailedReport: false,
  autoinstall: false
};

const bundler = new Bundler(entryFiles, options);

bundler.on("bundled", async () => {
  browserSync.init({
    server: "./dist",
    port: 8080
  }, () => {});
});

bundler.on("buildEnd", () => {
  browserSync.reload();
});

bundler.bundle();