module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("manifest.json");
  eleventyConfig.addPassthroughCopy("img/**/*.*");

  eleventyConfig.addTemplateFormats("css");

  eleventyConfig.addTemplateFormats("js");

  return {
    dir: {
      output: "docs"
    }
  }
};
