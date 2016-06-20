
# xml-jsonify

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/xml-jsonify.svg)](https://www.npmjs.com/package/xml-jsonify) [![Downloads](https://img.shields.io/npm/dt/xml-jsonify.svg)](https://www.npmjs.com/package/xml-jsonify) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A liberal XML to JSON converter.

## Why?

[`xml2js`](https://www.npmjs.com/package/xml2js) is cool and works perfectly to convert XML into JS. However, often I need a simplified version of the converted result. So, this module will not take care of the XML attributes and will not keep one-element arrays in its result (see the example).


## :cloud: Installation

```sh
$ npm i --save xml-jsonify
```


## :clipboard: Example



```js
const xmlJsonify = require("xml-jsonify");

// Let's parse a sitemap
xmlJsonify(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>http://www.example.com/</loc>
  </url>
  <url>
    <loc>http://www.example.com/about/</loc>
  </url>
  <url>
    <loc>http://www.example.com/latest-news/</loc>
  </url>
</urlset>`, (err, data) => {
    console.log(err || data);
    // { '$': { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' },
    //   url:
    //    [ { loc: 'http://www.example.com/' },
    //      { loc: 'http://www.example.com/about/' },
    //      { loc: 'http://www.example.com/latest-news/' } ] }
});
```

## :memo: Documentation


### `xmlJsonify(content, options, cb)`
Converts the XML input into an object.

#### Params
- **String** `content`: The XML content.
- **Object** `options`: The options passed to `xml2js`.
- **Function** `cb`: The callback function.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
