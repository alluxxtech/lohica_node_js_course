var argv = process.argv.slice(2);
interface Config {
    APP_PORT: number,
    ENV: string,
};

const config: Config = {
    APP_PORT: Number(process.env.PORT) || 5000,
    ENV: argv[0]
};

export default config;