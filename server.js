const express = require('express')
const formData = require("express-form-data");
const app = express()
const PORT = process.env.PORT || 3000

app.use(formData.parse())
app.use(formData.format());
app.use(formData.stream());
app.use(formData.union());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + "/dist/"))

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/' + "index.html")
})

app.post("/login", function(req,res){

	if (req.body.email === "evgeniy@mail.com" && req.body.password === "123456^&*"){
		res.json({
			name: "Evgeniy Chernyy",
			regDate: "10.09.2020",
			role: "admin",
			reputation: 1023,
			avatar:"evgeniy.jpg",
			messages:[{
				id: 1231,
				from: "Arthur Kane",
				msg: "Hello Evgeniy, how are you doing?"
			},{
				id: 12545431,
				from: "Marry Ostin",
				msg: "Congratulations Evgeniy! I wish you good luck with your new job!"
			},{
				id: 324,
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