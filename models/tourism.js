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
const Locations = mongoose.model('Locations', locationSchema);
module.exports = Locations;
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
