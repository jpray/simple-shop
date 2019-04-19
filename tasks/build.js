process.env.NODE_ENV = 'production';

const Bundler = require("parcel-bundler");
const Path = require("path");
const fs = require("fs-extra");
const copyStatic = require("./copy-static");

fs.removeSync('dist');
copyStatic();

const entryFiles = Path.join(__dirname, "../src/*.html");

const options = {
  outDir: "./dist",
  publicUrl: '.',
  watch: false,
  cache: false,
  cacheDir: ".cache",
  minify: true,
  target: "browser",
  https: false,
  logLevel: 3,
  hmr: false,
  sourceMaps: true,
  detailedReport: false,
  autoinstall: false
};

const bundler = new Bundler(entryFiles, options);

bundler.bundle().then(() => {
  console.log("done building");
});