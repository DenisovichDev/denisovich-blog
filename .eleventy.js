const { DateTime } = require("luxon")
// const pluginSEO = require("eleventy-plugin-seo")

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css")
    eleventyConfig.addPassthroughCopy("./src/assets")

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    })

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`)

    // eleventyConfig.addPlugin(pluginSEO, require("./src/_data/seo.json"))

    return {
        dir: {
            input: "src",
            output: "public",
        },
    }
}
