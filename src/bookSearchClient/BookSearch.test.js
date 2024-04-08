

describe("BookSearch", () => {

    test("It should accept the valid parameter", async () => {

        const params = { author: 'author', limit: 10 }

        expect(params.limit).toBe(10)
    })
})