import { EleventyHtmlBasePlugin, IdAttributePlugin } from "@11ty/eleventy";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import metadata from "./code/_data/metadata.js";

export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory("code");
  eleventyConfig.setOutputDirectory("docs");
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(IdAttributePlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy({
    "code/public/": "/",
  });
}

export const config = {
  pathPrefix: metadata.pathPrefix,
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
};
