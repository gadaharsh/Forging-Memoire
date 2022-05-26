// let data = []
// const reader = require('xlsx')
// const file = reader.readFile('public/assets/xlsx/Book1.xlsx')
// const sheets = file.SheetNames
// const mongoose = require('mongoose');

// const locationSchema = new mongoose.Schema({
//     STUID: String,
//     srno: Number,
//     RN: Number,
//     Name: String,
//     P1A1: Number,
//     P2A1: Number,
//     P1A2: Number,
//     P2A2: Number,
//     P3A1: Number,
//     P3A2: Number,
//     TA1: Number,
//     TA2: Number,
//     OUTOF: Number,
//     FinalTOT: Number,
// });
// module.exports = mongoose.model('Locations', locationSchema);
// for (let i = 0; i < sheets.length; i++) {
//     const temp = reader.utils.sheet_to_json(
//         file.Sheets[file.SheetNames[i]])
//     temp.forEach((res) => {
//         data.push(res)
//         // const marks_data = new Marks(res)
//         Marks.insertMany(res);
//         marks_data.save();

//     })
// }
// console.log(data)


let data = []

// const sheets = file.SheetNames
const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    ataglimse:{
        type:String
    },
    statetourism:{
        type:String
    },
    besttime:{
        type:String
    },
    touristatt:{
        type:String
    },
    howtoreach:{
        type:String
    },
    gettingaround:{
        type:String
    },
    curr:{
        type:String
    },
    popu:{
        type:String
    },
    timezone:{
        type:String
    },
    ar:{
        type:String
    },
    cap:{
        type:String
    },
    officiallan:{
        type:String
    },
    callcode:{
        type:String
    },
    reg:{
        type:String
    },
    citynames:{
        type:[String]
    },
    statenames:{
        type:[String]
    },
});
// const Location = mongoose.model('Locations', locationSchema);
module.exports = mongoose.model('Locations', locationSchema);
// const temp=async (req, res, next) => {
//     let json = require('D:/Projects/Forging_Memoire/controllers'+'/yatra.json');
//     console.log(json, 'the json obj');
//     for (let x in json) {
//         // console.log(json[x])
//         let location_data = new Locations();
//         Locations.insertMany(json[x]);
//         locationres = await location_data.save();
//         console.log(locationres)
// }
// }
// temp();
