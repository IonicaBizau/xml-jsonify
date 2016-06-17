"use strict";

const xmlJsonify = require("../lib");

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
});
