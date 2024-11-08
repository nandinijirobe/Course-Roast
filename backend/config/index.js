import * as dotenv from "dotenv";
dotenv.config();

const { HOST, PORT, USER, PASSWORD, DB } = process.env;

export { HOST, PORT, USER, PASSWORD, DB };