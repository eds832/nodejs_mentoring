const csv = require('csvtojson');
const fs = require('fs');
const csvFilePath = 'csv/nodejs-hw1-ex1.csv';
const jsonFilePath = 'json/json.txt';
fs.writeFile(jsonFilePath, '', function(err){
    if(err) return console.error(err);
});
csv()
.fromFile(csvFilePath,{encoding: 'utf-8'})
.subscribe(
  json => {
				let data = JSON.stringify(json);
				const jsonStr= data.toString('utf8');
				fs.appendFile(jsonFilePath, jsonStr + '\n',  function(err) {
					if (err) {
						return console.error(err);
					}
				});
			}, 
  err => console.error(err), 
  () => console.log('CSV successfully converted to JSON')
);