
import { responseFactory } from "./ResponseHandler.js"
import { ErrorHandler } from "./ErrorHandler.js"
import { Config } from "./Config.js"


export class SellerAPI extends Config {
    constructor(options = {}){
        super()
        this.format = options.format || 'json'
        this.timeout = options.timeout || 5000
    }

      request(url, method = 'GET'){
        const signal = this.controller.signal

        const timeoutId = setTimeout(() => {
            this.controller.abort()
        }, this.timeout)

        if(method == 'GET'){
            return fetch(url , {
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json, application/xml"
                },
                signal: signal
            })
            .then(async(resp) => {

                clearTimeout(timeoutId)
                
                if(!resp.ok) {
                    return new ErrorHandler().httpErrorHandler(resp)
                }
                
                const _resp = await responseFactory(this.format, resp)
                return _resp
            })
            .catch((error) => {
                if(signal.aborted){
                    // 504 Gateway timeout
                    throw new ErrorHandler().httpErrorHandler({ status: 504})
                }
                console.error(error)
                throw error
            })
        }
    }
}
