export class ErrorHandler extends Error {
    constructor(statusCode = 200, message = 'ok'){
        super(message)
        this.statusCode = statusCode
    }


    httpErrorHandler(resp){
        switch(resp.status){
            case 200:
              return resp.ok
            case 400:
              throw new ErrorHandler(400, 'Bad Request: The request was unacceptable, often due to missing a required parameter.');
            case 401:
              throw new ErrorHandler(401, 'Unauthorized: No valid API key provided.');
            case 402:
              throw new ErrorHandler(402, 'Request Failed: The parameters were valid but the request failed.');
            case 403:
              throw new ErrorHandler(403, 'Forbidden: The API key does not have permissions to perform the request.');
            case 404:
              throw new ErrorHandler(404, 'Not Found: The requested resource does not exist.');
            case 409:
              throw new ErrorHandler(409, 'Conflict: The request conflicts with another request (perhaps due to using the same idempotent key).');
            case 429:
              throw new ErrorHandler(429, 'Too Many Requests: Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.');
            case 500:
            case 502:
            case 503:
            case 504:
              throw new ErrorHandler(resp.status, 'Server Error: Something went wrong on the server side. Please try again later.');
            default:
              throw new ErrorHandler(resp.status, `Unhandled HTTP status code: ${resp.status}`);
        }
    }
}