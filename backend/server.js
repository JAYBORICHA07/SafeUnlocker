import express from "express";
import { google } from "googleapis";
import multer from "multer";
import cors from "cors";
import { memoryStorage } from "multer";
import { Readable  } from "stream";
import { decrypt } from "node-qpdf2";

const app = express();
app.use(cors());

// Multer storage configuration
const storage = memoryStorage();
const upload = multer({ storage });

// Configuration for Google Drive API
const auth = new google.auth.GoogleAuth({
  keyFile: "./service-account.json",
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});

const drive = google.drive({ version: "v3", auth });

app.get("/", (req,res)=>{
  res.send("hello");
})

app.post("/upload-to-google-drive", upload.single("file"), async (req, res) => {
  try {

    let file = req.file;
    const password = req.body.password;
    const customFileName = file.originalname;
    const outputPath = `../outputfile/${customFileName}`;
    const options = {
      input: "../inputfile/SEM 2 TERM FEES JAY BORICHA_protected.pdf",
      output: `../outputfile/${customFileName}`,
      password: password,
    }


    await decrypt(options);

    const folderId = "1XVTBP1njQ8d3OarbVTCqJDjly0YNChRo"; 
    const media = {
      mimeType: file.mimetype,
      body: Readable.from(file.buffer),
    };
    const response = await drive.files.create({
      requestBody: {
        name: file.originalname,
        mimeType: file.mimetype,
        parents: [folderId],
      },
      media: media,
    });

    const fileId = response.data.id;
    const publicUrl = `https://drive.google.com/uc?id=${fileId}`;

    res.json({ publicUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to upload file to Google Drive" });
  }
});


// Start the server
const PORT = 5001; // Change to the desired port number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
