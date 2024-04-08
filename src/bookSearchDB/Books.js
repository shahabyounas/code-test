const Database = require("./db")

class Books extends Database {
    constructor() {
        super()
        this.books = this.queryData()
    }

    getBookByAuthor(id, name){
        return this.books
    }

    getXMLData(){
        return `<data>
        <book>
          <bookId>dbda441b-d458-4381-9874-c3601c5e4ce8</bookId>
          <authorId>f9cff9a9-b162-4c8e-8bab-5240a8a4f78c</authorId>
          <author>Gabriella_Weber45</author>
          <email>Sophie76@yahoo.com</email>
          <avatar>https://avatars.githubusercontent.com/u/48407297</avatar>
          <birthdate/>
          <registeredAt/>
          <about>traveler, founder, coach 🎛️</about>
        </book>
        <book>
          <bookId>251e9ec9-a29c-45d6-8b18-7279980a064e</bookId>
          <authorId>6cb03dae-1277-4d33-a871-9a62ef89e2e0</authorId>
          <author>Louie.Veum</author>
          <email>Clifton_Orn43@yahoo.com</email>
          <avatar>https://avatars.githubusercontent.com/u/29009183</avatar>
          <birthdate/>
          <registeredAt/>
          <about>friend, geek</about>
        </book>
        <book>
          <bookId>8c36074a-514c-4cad-9126-98125b4156eb</bookId>
          <authorId>c3fab808-8bf9-4b2b-8e1d-0cb8905887bb</authorId>
          <author>Zelda.OConner</author>
          <email>Aidan85@gmail.com</email>
          <avatar>https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1183.jpg</avatar>
          <birthdate/>
          <registeredAt/>
          <about>entrepreneur, photographer, educator</about>
        </book>
        <book>
          <bookId>99375544-27cd-4446-9c99-b2113ec2f2ee</bookId>
          <authorId>a195ce16-460e-4fde-86fe-eef4fbdaf12b</authorId>
          <author>Rodolfo_Hayes38</author>
          <email>Elena.Effertz@yahoo.com</email>
          <avatar>https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/227.jpg</avatar>
          <birthdate/>
          <registeredAt/>
          <about>filmmaker</about>
        </book>
        <book>
          <bookId>c296a8c1-9acf-45b4-8cbb-9b38ca9acce0</bookId>
          <authorId>dd7ca3f1-6879-43e0-8467-0c703044dbec</authorId>
          <author>Elise_Marvin46</author>
          <email>Cory_Gleichner@hotmail.com</email>
          <avatar>https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1095.jpg</avatar>
          <birthdate/>
          <registeredAt/>
          <about>musician, grad, artist 🎰</about>
        </book>
        <book>
          <bookId>9dd6df9a-8ca7-4443-86ae-66a6a8395379</bookId>
          <authorId>36573501-f960-44c1-ae06-547797fc0f08</authorId>
          <author>Charlie79</author>
          <email>Carroll.Stiedemann@yahoo.com</email>
          <avatar>https://avatars.githubusercontent.com/u/26888377</avatar>
          <birthdate/>
          <registeredAt/>
          <about>filmmaker, inventor, public speaker 😗</about>
        </book>
        <book>
          <bookId>6c1deac2-d8f2-47f2-b263-6535d99b1828</bookId>
          <authorId>5621b3b6-bc99-4ef5-9b2d-83b3ad5b46e2</authorId>
          <author>Dandre_Gibson</author>
          <email>Colten_Koelpin79@gmail.com</email>
          <avatar>https://avatars.githubusercontent.com/u/93526540</avatar>
          <birthdate/>
          <registeredAt/>
          <about>teacher, scientist, educator 🇸🇨</about>
        </book>
        <book>
          <bookId>5313da4d-5d48-4881-8e13-2570d5834fca</bookId>
          <authorId>3d6e9288-d041-4b3c-b6b9-d17316598a25</authorId>
          <author>Jalen93</author>
          <email>Milford92@yahoo.com</email>
          <avatar>https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg</avatar>
          <birthdate/>
          <registeredAt/>
          <about>employer lover, inventor ↔️</about>
        </book>
        <book>
          <bookId>eae34ba0-b667-43db-b668-9660fd5e07bf</bookId>
          <authorId>12a019fa-a000-4384-bb6e-806d7ecf9d06</authorId>
          <author>Alysha_Adams</author>
          <email>Geoffrey.Bechtelar70@yahoo.com</email>
          <avatar>https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1106.jpg</avatar>
          <birthdate/>
          <registeredAt/>
          <about>patriot, engineer, film lover</about>
        </book>
        <book>
          <bookId>99dc4002-75f2-47d9-a7ab-c0f9d97e44c0</bookId>
          <authorId>72c23bca-aa30-4604-8281-8cefd1c024ca</authorId>
          <author>Lera19</author>
          <email>Quentin_Shanahan@hotmail.com</email>
          <avatar>https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1080.jpg</avatar>
          <birthdate/>
          <registeredAt/>
          <about>signup enthusiast</about>
        </book>
        </data>`
    }

}


module.exports = {
    Books
}