
# xml-jsonify

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/xml-jsonify.svg)](https://www.npmjs.com/package/xml-jsonify) [![Downloads](https://img.shields.io/npm/dt/xml-jsonify.svg)](https://www.npmjs.com/package/xml-jsonify)

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

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :memo: Documentation


### `xmlJsonify(content, options, cb)`
Converts the XML input into an object.

#### Params
- **String** `content`: The XML content.
- **Object** `options`: The options passed to `xml2js`.
- **Function** `cb`: The callback function.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`bnr`](https://github.com/Bloggify/node-bnr#readme) (by Bloggify)—Access resources (e.g. exchange rates) provided by the National Bank of Romania.
 - [`rakuten-api`](https://github.com/itsimpleapp/rakuten-api-nodejs) (by André Ferreira)—API integration with Rakuten

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
