# require-dev.info
Opinionated collection of PHP development tools, at your service

## Getting Started

### 1. Install dependencies

```
npm install
```

### 2. Run Eleventy

```
npm run serve
```

Or in debug mode:

```
DEBUG=* npx @11ty/eleventy
```

### Implementation Notes

- `about/index.md` shows how to add a content page.
- `packages/` has the package descriptions but really they can live in any directory. They need only the `package` tag to be added to this collection.
- The `css`, `js`, `fonts` and `img` directories in the input directory will be copied to the output folder (via `addPassthroughCopy()` in the `.eleventy.js` file). The `favicons` directory will be copied to the root of the output folder.
- The packages feed template is in `feed/feed.njk`. This is also a good example of using a global data files in that it uses `_data/metadata.json`.
- This example uses following layouts:
  - `_includes/layouts/base.njk`: the top level HTML structure
- `_includes/postlist.njk` is a Nunjucks include and is a reusable component used to display a list of all the posts. `index.njk` has an example of how to use it.
