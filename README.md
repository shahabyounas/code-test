# Javascript Code Test

`BookSearchApiClient` is a simple class that makes a call to a http API to retrieve a list of books and return them.

You need to refactor the `BookSearchApiClient` class, and demonstate in `example-client.js` how it would be used. Refactor to what you consider to be production ready code. You can change it in anyway you would like and can use javascript or typescript.

Things you will be asked about:

1. How could you easily add other bookseller APIs in the future
2. How would you manage differences in response payloads between different APIs without needing to make future changes to whatever code you have in example-client.js
3. How would you implement different query types for example: by publisher, by year published etc
4. How your code would be tested



# Root file
Index.html includes the basic UI for rendering the UI


# src/bookSearchClient

This folder contains the client code and Seller API integration

Run on using live server

# src/bookSearchServer

This folder contains the server which returns a dummy response based on the input

 node server


# src/bookSearchDB
This folder contains the Database class, currently fetches data using faker but will have actual integration of DB.





