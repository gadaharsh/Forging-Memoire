const fs = require('fs'); 
const { parse } = require('csv-parse');
const Locations = require('../models/tourism')
// module.exports.blogInfo = async (req, res, next) => {

//     var parser = parse({columns: true}, function (err, records) {
    
//             console.log(records)
//             res.send(records)
//          console.log()
//          const data =JSON.stringify(records)
//          fs.writeFile('yatra.json', data, (err) => {
//             if (err) {
//                 throw err;
//             }
//             console.log("JSON data is saved.");
//         });
           
         
           
//         });
//         fs.createReadStream('D:/Projects/Forging_Memoire/controllers'+'/yatra.csv').pipe(parser);
// }

module.exports.show = async (req, res, next) => {
    
}


