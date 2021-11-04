var argv = process.argv.slice(2);
process.env.PORT = 3000;

const config = {
    APP_PORT: process.env.PORT,
    ENV: argv[0]
}

module.exports = config;