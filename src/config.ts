var argv = process.argv.slice(2);
interface Config {
    APP_PORT: number,
    ENV: string,
    apikey: string,
    localDB: string
};

const config: Config = {
    APP_PORT: Number(process.env.PORT) || 5000,
    ENV: argv[0],
    apikey: 'fbc69e49',
    localDB: 'movies.json'
};

export default config;