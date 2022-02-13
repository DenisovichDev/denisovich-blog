const { DateTime } = require("luxon")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

module.exports = function (eleventyConfig) {
    // Passing through style.css and assets folder to public
    eleventyConfig.addPassthroughCopy("./src/style.css")
    eleventyConfig.addPassthroughCopy("./src/assets")

    // Filter for human redeable dates
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    })

    // Current year short code
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`)

    // Syntax highlighting with prism.js
    eleventyConfig.addPlugin(syntaxHighlight)

    return {
        dir: {
            input: "src",
            output: "public",
        },
    }
}
