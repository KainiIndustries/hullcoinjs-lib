# HullcoinJS (hullcoinjs-lib)

The pure JavaScript Hullcoin library for node.js and browsers.

### Browserify

    $ npm install -g browserify
    $ browserify src/index.js -s hullcoin | uglifyjs > hullcoinjs.min.js

You will then be able to load `hullcoinjs.min.js` into your browser, with each of the dependencies above accessible from the global `hullcoin` object.