import config from "../config";
import * as fs from 'fs';

const isExist = (db: Array<object>, id: string) => db.some((movie: any) => movie.name === id);

const Storage = {
    get: async (id?: string) => {
        return new Promise((resolve, reject) => {
            fs.readFile(config.localDB, 'utf8', function readFileCallback(err, data: string){
                if (err){
                    console.log(err);
                    reject(err);
                } else {
                    let db = JSON.parse(data);
                    if(!id) {
                        resolve(db);
                    } else {
                        resolve(db.find((movie: any) => movie.name === id));
                    }
            }});
        });
    },
    write: (movie: any) => {
        fs.readFile(config.localDB, 'utf8', function readFileCallback(err, data: string){
            if (err){
                console.log(err);
            } else {
                let db = JSON.parse(data);
                if(!isExist(db, movie.name)) {
                    db = [...db, movie];
                    fs.writeFile(config.localDB, JSON.stringify(db), function(err) {
                        if (err) throw err;
                        console.log('the movie has been added to the database');
                    });
                }
        }});
    },
    update: (id: string, customInfo: any) => {
        return new Promise((resolve, reject) => {
            let updatedMovie: any;
            fs.readFile(config.localDB, 'utf8', function readFileCallback(err, data: string){
                if (err){
                    console.log(err);
                } else {
                    let db = JSON.parse(data);
                    if(isExist(db, id)) {
                        const updatedDb = db.map((movie: any) => {
                            if(movie.name === id) {
                                const newMovie = {
                                    ...movie,
                                    ...customInfo
                                }
                                updatedMovie = newMovie;
                                return newMovie;
                            }
                            return movie;
                        });
                        fs.writeFile(config.localDB, JSON.stringify(updatedDb), function(err) {
                            if (err) throw err;
                            console.log('the update of the movie in the database is complete');
                            reject(err);
                        });
                    } else {
                        updatedMovie = `movie id '${id}' not found`;
                    }
            }});
            resolve(updatedMovie);
        });
    },
    delete: (id: string) => {
        return new Promise((resolve, reject) => {
            let deletedMovie: any;
            fs.readFile(config.localDB, 'utf8', function readFileCallback(err, data: string){
                if (err){
                    console.log(err);
                } else {
                    let db = JSON.parse(data);
                    if(isExist(db, id)) {
                        deletedMovie = db.find((movie: any) => movie.name === id);
                        const updatedDb = db.filter((movie: any) => {
                            if(movie.name !== id) return true;
                            return false;
                        });
                        fs.writeFile(config.localDB, JSON.stringify(updatedDb), function(err) {
                            if (err) throw err;
                            console.log('the movie was removed from DB successfull');
                            reject(err);
                        });
                    } else {
                        deletedMovie = `movie id '${id}' not found`;
                    }
            }});
            resolve(deletedMovie);
        });
    }
}

export default Storage;