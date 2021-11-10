var argv = process.argv.slice(2);
process.env.PORT = '5000';

interface Config {
    APP_PORT: number,
    ENV: string,
};

const config: Config = {
    APP_PORT: Number(process.env.PORT),
    ENV: argv[0]
};

export default config;