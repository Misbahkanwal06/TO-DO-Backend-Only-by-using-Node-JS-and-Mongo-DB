
const { createHash, handleResponse, comparePwd } = require("../utils");
const { createToken } = require('../security/jwtToken');
const userModel = require('./userModel');

const userRegister = async (req, reply, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPwd = await createHash(password);
        if (!hashedPwd) throw (`can't create password hash`);
        const ucreate = new userModel({
            name: name,
            email: email,
            password: hashedPwd,
        })
        const dbRes = await ucreate.save();
        // return dbRes;
        res.send(handleResponse(201, "Customer registered successfully", dbRes));

    } catch (error) {
        console.log("error in user register", error);
    }
}

const userLogin = async (req, reply, res) => {
    try {
        const { email, password } = req.body;
        // return req.body;
        const dbData = await userModel.findOne({ email: email })
        if (!dbData) res.send(handleResponse(201, "User not exist"));
        const bcryptedPwd = await comparePwd(password, dbData.password)
        if (!bcryptedPwd) res.send(handleResponse(201, "Invalid Password"));
        const token = await createToken(dbData);
        if (token) {
            dbData.token = token;
            const dbRes = await dbData.save();
            // return dbRes;
            res.send(handleResponse(201, "user login successfully", dbRes));
        }

    } catch (error) {
        console.log("error in user login", error);
        res.send(handleResponse(400, "Internal server error", error));
    }
}

module.exports = { userRegister, userLogin };