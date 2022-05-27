const fs = require('fs'); 
const { parse } = require('csv-parse');
const Location = require('../models/tourism')
const User = require('../models/user');
const { builtinModules } = require('module');

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

module.exports.find = async (req, res, next) => {
    // let json = require('D:/Projects/Forging_Memoire/controllers'+'/yatra.json');
    // res.send(json);
    Location.find((err, data) => {
        if (!err) {
            res.send(data)
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    });
}
module.exports.show=async(req,res,next)=>{
    const location = await Location.findById(req.params.id);
    // console.log(location)
    res.send(location)
}
module.exports.coordinates= (req,res,next)=> {
    let json = require('D:/Projects/Forging_Memoire/controllers'+'/coordinates.json');
    // if(json.state==req.state){
    
    // }
    console.log(json);
    res.send(json);
    
    // console.log(location)
    // res.send(location)
}




