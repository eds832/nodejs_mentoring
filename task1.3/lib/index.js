'use strict';

process.stdin.on('data', function (data) {
  console.log(Buffer.from(data.reverse()).toString('utf8'));
});