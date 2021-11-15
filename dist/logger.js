"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const createRequestLogger = () => {
    console.log(`Server is listening on port ${config_1.default.APP_PORT}. Env is ${config_1.default.ENV}`);
};
exports.default = {
    serverLogger: createRequestLogger()
};
