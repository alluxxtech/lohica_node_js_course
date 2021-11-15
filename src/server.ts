import { createServer, IncomingMessage, ServerResponse} from 'http';
import { logger } from './logger';
import config from './config';
import Router from './api-router';

const { APP_PORT, ENV } = config;

createServer((req: IncomingMessage, res: ServerResponse) => {
    const chunks: Buffer[] = [];
    // let body: any;
    req.on('data', data => {
        chunks.push(data);
    })
    .on('end', () => {
        const rawBody = Buffer.concat(chunks).toString();
        const body = JSON.parse(rawBody);
        Router(req, res, rawBody);
    });
    
}).listen(APP_PORT, () => {
    logger.info(`Server is running on port ${APP_PORT}. Env is ${ENV}.`);
});

process.on('uncaughtException', err => {
    logger.error(err.message);
});

process.on('unhandledRejection', err => {
    logger.error(err);
});