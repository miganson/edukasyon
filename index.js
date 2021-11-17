const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/api");

const app = express();

const port = process.env.PORT || 5000;
const access =
	"mongodb+srv://doadmin:NwW5782fH4T1q0x3@edukasyon-db-0d1995d6.mongo.ondigitalocean.com/admin?authSource=admin&replicaSet=edukasyon-db&tls=true&tlsCAFile=ca-certificate.crt";

// Connect to the database
mongoose
	.connect(access, { useNewUrlParser: true })
	.then(() => console.log(`Database connected successfully`))
	.catch((err) => console.log(err));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.use(bodyParser.json());

app.use("/api", routes);

app.use((err, req, res, next) => {
	console.log(err);
	next();
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
