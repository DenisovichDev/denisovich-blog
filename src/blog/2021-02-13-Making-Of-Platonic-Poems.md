---
title: Making Of Platonic Poems
author: Denisovich
date: 2021-02-13
tags: ["post", "featured"]
image: /assets/blog/01-platonic-poems/thumbnail.png
imageAlt: "Platonic Poems #0"
description: In this blog post I share the creation process and insights of my generative series "Platonic Poems". Dive with me in to the world of platonic solids and blackout poems.
---

Platonic Poems is probably one of my favourite pieces I've done.

```js
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
```

Here's an example of inline code: `eleventyConfig.addPassthroughCopy("./src/assets")`
