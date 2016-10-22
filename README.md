Random Bee Movie
================
This is a site that pulls three random lines from the Bee Movie script and pairs them with a random image.

Requirements
------------
This expects the Bee Movie script, or whatever file you want to read from, to be named text and be stored in the top directory. The images need to be served from public/himg and public/vimg. These are for horizontal (desktop) and vertial (mobile), respectively.

To start, run `node ./bin/www`

API
---
An API is offered at /api. It expects a query string, with `number` specificying the number of lines to get. If no query string is specified, it defaults to three.
