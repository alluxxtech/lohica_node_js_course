"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const logger_1 = __importDefault(require("./logger"));
const config_1 = __importDefault(require("./config"));
(0, http_1.createServer)((req, res) => {
    // debugger;
    res.end('hello world');
    // res.writeHeader(200, { 'Content-Type': 'application/json' });
    // res.end(JSON.stringify({ message: 'Hello world!' }));
}).listen(config_1.default.APP_PORT, logger_1.default.serverLogger);
