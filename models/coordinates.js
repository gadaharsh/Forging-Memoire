let data = []
const fs = require('fs'); 
const reader = require('xlsx')
const file = reader.readFile('D:/Projects/Forging_Memoire/controllers'+'/lemadhur.xlsx')
const sheets = file.SheetNames
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const coordinatesSchema = new Schema({
    placename:String,
    state: String,
    latitude:Number,
    longitude:Number,
    
});
const Coordinates=mongoose.model('Coordinates', coordinatesSchema);
module.exports = Coordinates;

// for (let i = 0; i < sheets.length; i++) {
//     const temp =  reader.utils.sheet_to_json(
//         file.Sheets[file.SheetNames[i]])
//         temp.forEach((res) => {
//         data.push(res)
       
// })
// }
// const temp=async (req, res, next) => {
//     let json = require('D:/Projects/Forging_Memoire/models'+'/coordinates.json');
//         console.log(json, 'the json obj');
//         for (let x in json) {
//             // console.log(json[x])
//             let coordinate_data = new Coordinates();
//             Coordinates.insertMany(json[x]);
//             coordinateres = await coordinate_data.save();
//             console.log(coordinateres)
//     }
//     }
// temp();
// console.log(data)
// const Schema = mongoose.Schema;
// const Locations = require('./tourism');
// const placeSchema=new Schema({
//     placename:reqString,
//     longitude:reqString,
//     latitude:reqString
// })

// const coordinatesSchema = new Schema({
//     places:[placeSchema],
//     state: {
//         type: String
//     },
// });
// module.exports = mongoose.model('Coordinates', coordinatesSchema);