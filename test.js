var Git   = require('nodegit');
var fs    = require('fs');
var path  = require('path');

// SHA of a binary blob (lena.png)
var IMAGE_SHA = '158e2511523b302fcbd5813f7a2cf027d67ec129';
var REPO_PATH = path.resolve(__dirname, './.git');

var oid = Git.Oid.fromString(IMAGE_SHA);

Git.Repo.open(REPO_PATH, function(error, repo) {
  repo.getBlob(oid, function(error, blob) {
    var content = blob.content();

    if (blob.isBinary()) {
      console.log('Writing a binary blob to disk: BROKEN.png');
    }

    fs.writeFileSync('BROKEN.png',content);
  });
});

