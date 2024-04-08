const { users, createRandomUser } = require('./seed')

// Some Database connection
// Data config and queries

class Database {
    constructor(){
        this.connection = 'some connection config'
        console.log('this.connection')
    }

    queryData(table, params) {
        return users
    }

    
}


module.exports = Database