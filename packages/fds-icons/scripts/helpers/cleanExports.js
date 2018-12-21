/**
 * @module cleanExports
 *
 * `sketchtool` exports SVG files based on their slice name.
 * For example, a slice named "Icon/plus" will be exported to
 * `<destination>/Icon/plus`. We have no control over this.
 *
 * This module exports a function that removes all dirs created
 * by sketchtool, and moves all SVG exports into `<destination>`
 * with a PascalCase file name.
 */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const rimraf = require('rimraf');
const pascalCase = require('pascal-case');
const { sketchConfig } = require('../../icons.config');

// sketchtool uses slice names to create dirs
const DIR_SRC = path.join(sketchConfig.output, sketchConfig.slicePrefix);

// destination to move all icons to
const DIR_DEST = sketchConfig.output;

if (!fs.existsSync(DIR_DEST)) {
  fs.mkdirSync(DIR_DEST);
}

/**
 * @param {Array} filePaths absolute paths to all svgs exported from sketch
 * @param {String} destination desired destination for cleaned up exports
 * @param {Function} cbFn callback when move is complete
 */
const moveFiles = (filePaths, destination, cbFn) => {
  const fileNames = filePaths.map(
    (filePath) => `${pascalCase(path.basename(filePath, '.svg'))}.svg`
  );

  filePaths.forEach((filePath, i) => {
    fs.renameSync(filePath, `${destination}/${fileNames[i]}`);
  });

  if (cbFn) cbFn();
};

module.exports = () => {
  glob(`${DIR_SRC}/**/*.svg`, {}, (error, files) => {
    if (error) throw new Error(`glob error: ${error}`);

    // move all exported icons into a single dir
    // with pascal-cased file names
    moveFiles(files, DIR_DEST, () => {
      console.info(`SUCCESS - ${files.length} icons written`);

      // clean up dirs generated by sketch
      rimraf.sync(`${DIR_SRC}`);
    });
  });
};
