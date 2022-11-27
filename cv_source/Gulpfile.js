#!/usr/bin/env node

'use strict';

const {parallel, watch, src, dest} = require("gulp");
const Vinyl = require("vinyl");

const MD_SOURCES = '*.md';

function html(cb) {
    const { Transform } = require('node:stream');

    const htmlTransform = new Transform({
        objectMode: true,
        transform: (mdVinyl, encoding, cb) => {
            const mdContent = mdVinyl.contents.toString();
            const {parse} = require("marked");
            mdVinyl.contents = Buffer.from(parse(mdContent), 'utf-8');
            mdVinyl.path = mdVinyl.path.replace('\.md', '\.html');
            cb(null, mdVinyl);
        }
    });

    return src(MD_SOURCES)
        .pipe(htmlTransform)
        .pipe(dest('../'));
}

function pdf(cb) {
    cb();
}

function dev(cb) {
    watch([MD_SOURCES], parallel(html, pdf));
}

module.exports = {html, pdf, dev, default: parallel(html, pdf)};
