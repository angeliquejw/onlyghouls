module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "_dev/art/media": "art/media" });
  eleventyConfig.addPassthroughCopy({ "style.css": "style.css"});
  eleventyConfig.addLayoutAlias("default", "layout.njk");
  
  return {
    dir: {
      input: "_dev",
      output: "_site"
    }
  }
};
