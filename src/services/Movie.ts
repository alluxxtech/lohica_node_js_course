import { IncomingMessage, ServerResponse } from "http";
import { logger } from "../logger";

const Movie = (req: IncomingMessage, res: ServerResponse, body: string) => {
    const message = `Method ${req.method}, url ${req.url} worked successfully`;
    return {
        get: () => {
            //get movie from DB
            const movieFromDb = '{"name": "Movie from BD"}'
            res.end(movieFromDb);
            logger.info(message);

        },
        post: () => {
            //set movie to DB
            res.end(body);
            logger.info(message);
        },
        delete: () => {
            //delete movie from DB
            res.end(body);
            logger.info(message);
        }
    }
}

export default Movie;