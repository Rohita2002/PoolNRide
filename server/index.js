const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./routes/route.js");
const bodyParser = require ("body-parser");

let corsOptions = {
  origin: "http://localhost:4000/",
};

let app = express();
app.disable("x-powered-by");
mongoose.connect(
  "mongodb+srv://poolNRide:poolNRide@cluster0.ausuu1r.mongodb.net/?retryWrites=true&w=majority", {useUnifiedTopology: true, useNewUrlParser: true}
).then(() => console.log('Database Connected.....'))
.catch((err) => console.log('error' , err))

//app.use(express.json());
app.use(bodyParser.json({extended: true}));
//app.use(express.urlencoded()); 
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors(corsOptions));
app.use("/api", route);

app.listen(4000, console.log("running at port 4000....."));