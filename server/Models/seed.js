const Users = require('./userModel');
const bcrypt = require("bcryptjs");
const mongoose = require('mongoose');

const salt = bcrypt.genSaltSync(10);

mongoose
	.connect("mongodb://127.0.0.1:27017/pfe", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Database connection is successful!');
		
	})
	.catch((err) => {
		console.log(`Database connection failed!`);
		console.log(`Details : ${err}`);
	});

const seed = async () => {
   

    try {
        await   Users.create({
            name:"ichrak",
            surname :"ichrak",
            email : "ichrak@sfectoria.com",
            password : bcrypt.hashSync("admin", salt),
            avatar : "avatar.png", 
            color:"red",
            role : "admin"
        }) 
        console.log("seeded");
      } catch (error) {
          console.log(error);
      }
}

seed()