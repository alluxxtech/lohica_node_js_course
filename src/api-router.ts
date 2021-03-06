import { IncomingMessage, ServerResponse } from "http";
import { logger } from "./logger";
import Movie from "./services/Movie";

const Router = (req: IncomingMessage, res: ServerResponse, body: string) => {
    logger.info(`Request type: ${req.method}, Request url: ${req.url}, Message: request ${req.method} movie has body: '${body}'`);
    const { method, url } = req;

    switch(url) {
        case '/movie': {
            const service = Movie(req, res, body);
            switch(method) {
                case 'GET': {
                    service.get();
                    return;
                }
                case 'POST': {
                    service.post();
                    return;
                }
                case 'DELETE': {
                    service.delete();
                    return;
                }
                default: {
                    logger.error('invalid req')
                    res.end('invalid req method');
                }
            };
        }
        case '/': {
            logger.info(`Request type: ${method}, Request url: ${url}`);
            res.end(`Home page`);
            return;
        }
        default: {
            logger.error(`Invalid api url: ${url}`);
            res.end(`Invalid api url`);
        }
    }
};

export default Router;