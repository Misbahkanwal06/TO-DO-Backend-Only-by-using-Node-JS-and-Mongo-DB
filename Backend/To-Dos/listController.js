const { handleResponse } = require('../utils');
const listModel = require('./listModel');

const createItems = async (req, reply, res) => {
    try {
        const { item } = req.body;
        const listCreate = new listModel({
            items: item,
        })
        const dbRes = await listCreate.save();
        return dbRes;

    } catch (error) {
        console.log(error);
        res.send(handleResponse("400", "Error in creating items", error))
    }
}
const getSingleItem = async (req, reply, res) => {
    try {
        const { id } = req.params;
        //   return req.params;
        const dbRes = await listModel.findOne({ _id: id })
        // return dbRes;
        res.send(handleResponse("200", "Single item of the list", dbRes));
    } catch (error) {
        console.log(error);
        res.send(handleResponse("400", "Error in creating items", error))
    }
}

const getItems = async (req, reply, res) => {
    try {
        const dbRes = await listModel.find();
        // return dbRes;
        res.send(handleResponse("200", "All items of the list"))
    } catch (error) {
        console.log(error);
        res.send(handleResponse("400", "Error in getting list items", error))
    }
}

module.exports = { createItems, getSingleItem, getItems }