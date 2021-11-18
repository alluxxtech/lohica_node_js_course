import { IncomingMessage, ServerResponse } from "http";
import axios from 'axios';
import config from "../config";
import { logger } from "../logger";
import Storage from "./Storage";

const Movie = (req: IncomingMessage, res: ServerResponse, body: string) => {
    const message = `Method ${req.method}, url ${req.url} worked successfully`;
    const id = req.url!.split('/')[2];

    let parsedBody: any;
    if(body) {
        parsedBody = JSON.parse(body);
    }

    return {
        get: async () => {
            const movies = await Storage.get(id);
            res.end(JSON.stringify(movies));
            logger.info(message);
        },
        post: async () => {
            let url = `https://www.omdbapi.com/?apikey=${config.apikey}`;
            url = `${url}&t=${parsedBody.name}`; 
            const response = await axios.get(url);
            const data = {...response.data, ...parsedBody};

            Storage.write(data);
            
            res.end(JSON.stringify(data));
            logger.info(message);
        },
        patch: () => {
            const updatedMovie = Storage.update(id, parsedBody);
            res.end(updatedMovie);
            logger.info(message);
        },
        delete: () => {
            const deletedMovie = Storage.delete(id);
            res.end(deletedMovie);
            logger.info(message);
        }
    }
}

export default Movie;