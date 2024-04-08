
import { responseFactory } from "./ResponseHandler.js"
import { ErrorHandler } from "./ErrorHandler.js"


export class SellerAPI {
    constructor(format = 'json', baseUrl = ''){
        this.baseUrl = baseUrl
        this.format = format
    }

      request(url, method = 'GET'){

        if(method == 'GET'){
            return fetch(url , {
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            })
            .then(async(resp) => {

                if(!resp.ok) {
                    return new ErrorHandler().httpErrorHandler(resp)
                }
                

                const _resp = await responseFactory(this.format, resp)
                return _resp
            })
            .catch((error) => {
                console.error(error)
                throw error
            })
        }
    }
}
