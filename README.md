# install dependencies
`npm install`

# create entry points
create JS files and import webcomponents in them

# add entry points to build
edit `vite.config.js` and add files to the `entries` array

# build the project
always clean the `dist` folder to remove old chunks
`rm -rf dist/`

then build
`npm run build`

and check the entry points and chunks in `dist`

# analyze the dependencies
`madge dist/ --image=graph.svg`

Setup: follow the installation instructions here:
https://github.com/pahen/madge

# analyze what is included in each chunk
`npx vite-bundle-visualizer -o ./stat.html`

Docs:
https://www.npmjs.com/package/vite-bundle-visualizer