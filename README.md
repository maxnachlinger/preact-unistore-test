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
   e7f0f995bf8f1f363539.app.css   1.08 KiB       0  [emitted]  app
    e7f0f995bf8f1f363539.app.js     15 KiB       0  [emitted]  app
                     index.html  272 bytes          [emitted]
e7f0f995bf8f1f363539.app.css.gz  548 bytes          [emitted]
                  index.html.gz  200 bytes          [emitted]
 e7f0f995bf8f1f363539.app.js.gz   5.66 KiB          [emitted]
```
