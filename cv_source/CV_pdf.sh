#!/bin/bash

madoko --pdf CV*.md && cp out/*.pdf ../ && rm -rf out/
