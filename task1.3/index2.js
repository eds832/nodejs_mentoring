"use strict";

var fs = require('fs');

var util = require('util');

var stream = require('stream');

var csvFilePath = 'csv/nodejs-hw1-ex1.csv';
var jsonFilePath = 'json/json.txt';

var csv = require('csvtojson');

var pipeline = util.promisify(stream.pipeline);

async function run() {
  await pipeline(fs.createReadStream(csvFilePath, "utf8"), csv(), fs.createWriteStream(jsonFilePath));
  console.log('CSV successfully converted to JSON');
}

run().catch(console.error);