import { ErrorHandler } from "./SellerAPIs/ErrorHandler.js"
import { SellerAPI } from "./SellerAPIs/SellerAPI.js"
import { DATA_LIMIT, BASE_URL } from "./SellerAPIs/constants.js"


class BookSearch extends SellerAPI {
    constructor(){
        super('json', BASE_URL )
    }

    /**
     * 
     * @param {String} author
     * @param {Number} limit
     * @returns 
     */

     getBooksByAuthor(params = {}){

        try {

            if(!params['author']){
                return new ErrorHandler('author name required')
            }
    
            const url = new URL(this.baseUrl + '/books')
            url.searchParams.set('author', params.author)
            url.searchParams.set('limit', params.limit || DATA_LIMIT)
            url.searchParams.set('format', this.format)
            const resp =  this.request(url)

            return resp
        } catch (error) {
            console.error(error)
            throw error
        }

    }

}



// BookSearchApiClient.prototype.getBooksByAuthor = function (authorName, limit) {
//   var result = [];
//   var xhr = new XMLHttpRequest();
//   const params = {
//     authorName: 'name',
//     limit: 10,
//     format: 'json'
//   }
//   xhr.open(
//     "GET",
//     "http://api.book-seller-example.com/by-author?q=" +
//       authorName +
//       "&limit=" +
//       limit +
//       "&format=" +
//       this.format
//   );

//   xhr.onload = function () {
//     if (xhr.status == 200) {
//       if (this.format == "json") {
//         var json = JSON.parse(xhr.responseText);

//         result = json.map(function (item) {
//           return {
//             title: item.book.title,
//             author: item.book.author,
//             isbn: item.book.isbn,
//             quantity: item.stock.quantity,
//             price: item.stock.price,
//           };
//         });
//       } else if (this.format == "xml") {
//         var xml = xhr.responseXML;

//         result = xml.documentElement.childNodes.map(function (item) {
//           return {
//             title: item.childNodes[0].childNodes[0].nodeValue,
//             author: item.childNodes[0].childNodes[1].nodeValue,
//             isbn: item.childNodes[0].childNodes[2].nodeValue,
//             quantity: item.childNodes[1].childNodes[0].nodeValue,
//             price: item.childNodes[1].childNodes[1].nodeValue,
//           };
//         });
//       }

//       return result;
//     } else {
//       alert("Request failed.  Returned status of " + xhr.status);
//     }
//   };
//   xhr.send();
// };


export { BookSearch }
