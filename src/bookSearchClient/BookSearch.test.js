
import { BookSearch } from "./BookSearch"


describe("My BookSearch" , () => {

    let bookSearch;

    beforeEach(() => {
      bookSearch = new BookSearch();
    });


    test("Should return 401 on empty params", async () => {

        const resp = await bookSearch.getBooksByAuthor({})

        expect(resp.statusCode).toBe(401)
    })

    test("It should accept the valid parameter", async () => {
        
        const client = new BookSearch()

        const resp = await client.getBooksByAuthor({ author: 'test' })

        // Need match actual data
        expect(resp).toEqual(expect.any(Object))
    })
})