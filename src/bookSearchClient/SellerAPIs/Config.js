import { BASE_URL } from "./constants.js";


export class Config {
    constructor(options = { }){
        this.baseUrl = options.baseUrl || BASE_URL
        this.timeout = options.timeout || 5000 // Milliseconds
        this.controller = new AbortController()
    }
}