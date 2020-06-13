const fs = require('fs');
const util = require('util');
const stream = require('stream');
const csvFilePath = 'csv/nodejs-hw1-ex1.csv';
const jsonFilePath = 'json/json.txt';
const csv = require('csvtojson');
const pipeline = util.promisify(stream.pipeline);

async function run() {
  await pipeline(
    fs.createReadStream(csvFilePath, "utf8"),
    csv(),
    fs.createWriteStream(jsonFilePath)
  );
  console.log('CSV successfully converted to JSON');
}

run().catch(console.error);