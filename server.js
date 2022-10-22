const express = require('express')
const formData = require("express-form-data");
const app = express()
const PORT = 3000

app.use(formData.parse())
app.use(formData.format());
app.use(formData.stream());
app.use(formData.union());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/dist' + "/index.html")
})

app.post("/login", function(req,res){

	if (req.body.email === "evgeniy@mail.com" && req.body.password === "123456^&*"){
		res.json({
			regDate: "10.09.2020",
			role: "admin",
			reputation: 1023,
			avatar:"/evgeniy.jpg",
			messages:[{
				from: "Arthur Kane",
				msg: "Hello Evgeniy, how are you doing?"
			},{
				from: "Marry Ostin",
				msg: "Congratulations Evgeniy! I wish you good luck with your new job!"
			},{
				from: "Mom",
				msg: "You forgot to turn off the fan again..."
			}]
		})
	} else {
		res.status(401).send("Authorization error")
	}
})

app.listen(PORT)

console.log(`Server is running on ${PORT} port`)