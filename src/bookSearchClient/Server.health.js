import { Config } from "./SellerAPIs/Config";

export class ServerHealth extends Config {
    constructor(options = { isUp: false }){
        super()
        this.isUp = options.isUp
    }

    serverStatus(){
        return fetch(this.baseUrl + '/status', {
            mode: 'cors',
            headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
            }
        }).then((resp) => {
            if (resp.ok) {
                this.isUp = resp.ok
                return this.isUp;
              } else {
                return this.isUp;
              }
        }).catch(error => {
            console.error('Error while trying to reach the server:', error);
        })
      }
}