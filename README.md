## preact-unistore-test

http://preact-unistore-test.herokuapp.com/

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
   27ce2ed91540111fd567.app.css   1.11 KiB       0  [emitted]  app
    27ce2ed91540111fd567.app.js   15.1 KiB       0  [emitted]  app
                     index.html  272 bytes          [emitted]
27ce2ed91540111fd567.app.css.gz  561 bytes          [emitted]
                  index.html.gz  200 bytes          [emitted]
 27ce2ed91540111fd567.app.js.gz   5.72 KiB          [emitted]
```
