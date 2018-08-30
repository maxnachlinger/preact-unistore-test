## preact-unistore-test

### Getting Started

Install dependencies:

```
npm i
```

Build and run for development (with inline source maps, hot reloading etc):

```
npm start
```
Build and run for production (serves gzipped files, you know, like production)
```
npm run start-prod
```

### Why?
`preact` and `unistore` are simpler alternatives to `react` and `redux`, the bundles are much lighter as well, for example:
```
                         Asset       Size  Chunks             Chunk Names
  db42d873a6a94c780049.app.css  147 bytes       0  [emitted]  app
   db42d873a6a94c780049.app.js     15 KiB       0  [emitted]  app
                    index.html  272 bytes          [emitted]
                 index.html.gz  199 bytes          [emitted]
db42d873a6a94c780049.app.js.gz   5.65 KiB          [emitted]
```
