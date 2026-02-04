import express from "express";
import multer from "multer";

const app = express();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.get("/", (req, res) => {
  res.send(`
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="myFile" />
      <button>Upload</button>
    </form>
  `);
});

app.post("/upload", upload.single("myFile"), (req, res) => {
  res.json({
    message: "File uploaded successfully ✅",
    file: req.file,
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
