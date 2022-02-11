const express = require("express");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const app = express();
app.get('/', (req, res) => {
    res.send("YO");
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});