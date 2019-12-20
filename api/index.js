const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(router);
if (!process.env.NOW_REGION) {
    server.listen(3004, () => {
        console.log('JSON Server is running')
    })
}
module.exports = server;