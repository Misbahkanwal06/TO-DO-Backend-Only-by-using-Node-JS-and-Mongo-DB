


const bcrypt = require('bcrypt');
const saltRounds = 10;

const createHash = async (myPlaintextPassword) => {

    const hashPwd = await bcrypt.hashSync(myPlaintextPassword, saltRounds);
    console.log("hashpass", hashPwd);
    return hashPwd;
}

const comparePwd = async (password, hashedPwd) => {
    const compared = await bcrypt.compareSync(password, hashedPwd);
    return compared;
}

const handleResponse = (
    statusCode = 500,
    send = "Internal Server Error",
    obj
) => {
    return {
        statusCode: statusCode,
        message: send,
        obj: obj
    }
}

module.exports = { createHash, handleResponse, comparePwd }