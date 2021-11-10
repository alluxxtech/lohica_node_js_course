"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var argv = process.argv.slice(2);
process.env.PORT = '5000';
;
const config = {
    APP_PORT: Number(process.env.PORT),
    ENV: argv[0]
};
exports.default = config;
