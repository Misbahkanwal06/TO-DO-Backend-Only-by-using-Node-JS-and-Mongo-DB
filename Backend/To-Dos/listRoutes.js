
const { createItems, getSingleItem, getItems } = require('./listController');
const listRoutes = (fastify, options, done) => {

    fastify.post('/add', createItems);
    fastify.get('/getItem/:id', getSingleItem);
    fastify.get('/getItems', getItems);
    done();

}

module.exports = listRoutes;