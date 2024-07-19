const tags = new Map([
    ['testing', 'la-bug'],
    ['fixtures', 'la-clone'],
    ['test doubles', 'la-binoculars'],
    ['code cleanup', 'la-broom'],
    ['code style', 'la-code'],
    ['refactoring', 'la-recycle'],
]);
const Eleventy = require('@11ty/eleventy');

module.exports = {
    configFunction: function(eleventyConfig, pluginOptions = {}) {
        function filterTagList(tags) {
            return (tags || []).filter(tag => ["all", "nav", "packages", "package"].indexOf(tag) === -1);
        }

        eleventyConfig.addFilter("filterTagList", filterTagList)

        // Create an array of all tags
        eleventyConfig.addCollection("tags", function(collection) {
            let tagSet = new Set();
            collection.getAll().forEach(item => {
            (item.data.tags || []).forEach(tag => tagSet.add(tag));
            });

            return filterTagList([...tagSet]);
        });
        eleventyConfig.addFilter("tagIconClass", function(tagName) {
            if (!tags.has(tagName)) {
            throw new Error("Unmapped tag: '" + tagName + "'. Add mapping to tags.js");
            }

            return tags.get(tagName);
        });

        eleventyConfig.addShortcode('tag', function(tagName) {
            if (!tags.has(tagName)) {
                throw new Error("Unmapped tag: '" + tagName + "'. Add mapping to tags.js");
            }

            const tagUrl = eleventyConfig.nunjucksFilters.url('/tags/' + eleventyConfig.nunjucksFilters.slugify(tagName));
            return `<a class="tag" href="${tagUrl}">
                <i class="las ${tags.get(tagName)}"></i>
            <span class="tooltip">${tagName}</span>
            </a>`;
        });
    }
};