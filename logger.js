
const config = require('./config');

const createRequestLogger = () => {
    console.log(`Server is listening on port ${config.APP_PORT}. Env is ${config.ENV}`);
}

module.exports = {
    serverLogger: createRequestLogger(),
}