const express = require("express");
const bodyParser = require("body-parser");
// import cors from "cors";
const cors = require("cors");
const path = require("path");
const crypto = require("crypto");
const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");
const { resolve } = require("path");
const app = express();
//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
//Mongo URI
mongoose.connect("mongodb://localhost/manduPodcast", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const conn = mongoose.connection;
conn.on("error", console.error.bind(console, "connection error:"));
//Initializing the scheme
const podcastSchema = new mongoose.Schema({
  Name: { type: String },
  Cover: { type: String },
  Artist: { type: String },
  Audio: { type: String },
  Id: { type: String },
  Active: { type: String },
});
const podcastdetail = mongoose.model("podcast", podcastSchema);
//Initialize the gfs
let gfs;
conn.once("open", function () {
  //Initializing the stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("mandu");
  console.log("We are connected bhaio or behno lol");
});
//Creating the storage engine
const storage = new GridFsStorage({
  url: "mongodb://localhost/manduPodcast",
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "mandu",
        };
        resolve(fileInfo);
      });
    });
  },
});
const mandu = multer({ storage });
app.post(
  "/post",
  mandu.fields([
    { name: "firstfile", maxCount: 2 },
    // { name: "secondfile", maxCount: 1 },
  ]),
  async (req, res) => {
    const { Name, Cover, Artist, Audio, Id, Active } = req.body;

    try {
      const b = new podcastdetail({
        Name,
        Cover,
        Artist,
        Audio,
        Id,
        Active,
      });
      await b.save();
      res.send("The item has been saved to the database");
    } catch (error) {
      return res.status(422).send(error.message);
    }
    //   res.json({ file: req.file });
    // res.redirect("/");
  }
);
//just checking
// app.get("/done", function (req, res) {
//   gfs.files.find({}, function (err, result) {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(JSON.stringify(result));
//     }
//   });
// });
app.get("/donee", (req, res) => {
  gfs.files.find().toArray((err, files) => {
    return res.json(files);
  });
});
//for single file which takes no array
app.get("/done/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, files) => {
    const readStream = gfs.createReadStream(files);
    // return res.json(files);
    return readStream.pipe(res);
  });
});
app.get("/", (req, res) => {
  res.render("index.ejs");
});
const port = 5000;
app.listen(port, () => console.log(`Server started on ${port}`));
