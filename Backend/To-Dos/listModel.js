
const { Schema, model } = require("mongoose");

const listSchema = new Schema({

    items: String,
    date: { type: Date, default: Date.now },

})

const listModel = model('list', listSchema);
module.exports = listModel;