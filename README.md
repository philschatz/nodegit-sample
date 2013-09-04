# Description

This repo contains a binary image (`lena.png`) and the test file will write it to disk as `BROKEN.png`.

The file size is the same but only the first few bytes match.

The contents of `BROKEN.png` also changes when `node test.js` is run a second time.

# Install and Run

    npm install
    node test.js

**Note:** This was tested on an OSX build of libgit2.
