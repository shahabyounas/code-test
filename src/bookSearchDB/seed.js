/**
 * The following code create a seed fake data and persist this into 
 * your underlying storage
 */

const { faker } = require('@faker-js/faker');

 function createRandomUser() {
    return {
      bookId: faker.string.uuid(),
      authorId: faker.string.uuid(),
      author: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
      about: faker.person.bio()
    };
  }

  function multiple(fn, count = 1){
     return faker.helpers.multiple(fn, { count });
  }

  
  module.exports = 
  {
    users: multiple(createRandomUser, 10),
    createRandomUser
  }
  
  