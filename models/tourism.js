let data = []
const reader = require('xlsx')
const file = reader.readFile('public/assets/xlsx/Book1.xlsx')
const sheets = file.SheetNames
const mongoose = require('mongoose');

const marks = new mongoose.Schema({
    STUID: String,
    srno: Number,
    RN: Number,
    Name: String,
    P1A1: Number,
    P2A1: Number,
    P1A2: Number,
    P2A2: Number,
    P3A1: Number,
    P3A2: Number,
    TA1: Number,
    TA2: Number,
    OUTOF: Number,
    FinalTOT: Number,
});
const Marks = mongoose.model('Marks', marks);
module.exports = Marks;
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