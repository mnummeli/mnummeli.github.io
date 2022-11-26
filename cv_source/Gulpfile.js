#!/usr/bin/env node

'use strict';

const {series, watch} = require("gulp");

function clean(cb) {
    const {unlink} = require("node:fs");
    unlink("README.html", cb);
}

function build(cb) {
    const {readFile, writeFile} = require("node:fs");
    const fileStr = readFile("README.md",
                             {encoding: "utf-8"},
                             (err, data) => {
                                 const {parse} = require("marked");
                                 const markdownString = parse(data);
                                 writeFile("README.html", markdownString, cb);
    });
}

function dev(cb) {
    watch(["README.md"], build);
}

module.exports = {clean, build, dev, default: series(clean, build)};
