import express from "express";
import { google } from "googleapis";
import multer from "multer";
import cors from "cors";
import { memoryStorage } from "multer";
import { Readable  } from "stream";
// import { exec } from 'child_process';
// import pkg1 from 'fs';
// const {readFileSync} = pkg1;
// const {writeFileSync} = pkg1;



// {// //start
// async function extractAllPagesFromPDF(pdfPath, outputPdfPath, password) {
//   const tempFolderPath = './temp'; // Temporary folder to store intermediate files

//   // Create the temporary folder if it doesn't exist
//   if (!existsSync(tempFolderPath)) {
//     mkdirSync(tempFolderPath);
//   }

//   const tempOutputPrefix = `${tempFolderPath}/output`;
//   const command = `pdfunite -upw ${password} ${pdfPath} ${tempOutputPrefix}`;
  
//   // Execute the command to remove password protection
//   exec(command, async (error) => {
//     if (error) {
//       console.log('An error occurred:', error);
//       return;
//     }
    
//     const outputFilePath = `${tempOutputPrefix}.pdf`;
//     const outputBuffer = readFileSync(outputFilePath);
    
//     // Write the extracted pages to the output PDF file
//     writeFileSync(outputPdfPath, outputBuffer);
    
//     // Clean up temporary files
//     unlinkSync(outputFilePath);
//     rmdirSync(tempFolderPath);
    
//     console.log('Extraction complete!');
//   });
// }
// //strt
    
// const pdfPath = '../inputfile/SEM 2 TERM FEES JAY BORICHA_protected.pdf';
// const outputPdfPath = '../outputfile/SEM 2 TERM FEES JAY BORICHA_protected.pdf';

// extractAllPagesFromPDF(pdfPath, outputPdfPath, password);


// //end
// start
    // Read the password-protected PDF file
    // const pdfPath = '../inputfile/SEM 2 TERM FEES JAY BORICHA_protected.pdf';
    // const pdfBuffer = readFileSync(pdfPath);

    // // Load the password-protected PDF ignoring encryption
    // const srcDoc = await PDFDocument.load(pdfBuffer, { ignoreEncryption: true });

    // // Create a new PDF document to store the extracted pages
    // const extractedPdfDoc = await PDFDocument.create();

    // // Copy and add all pages to the extracted PDF document
    // const pagesToExtract = Array.from(Array(srcDoc.getPageCount()).keys());
    // for (const pageNumber of pagesToExtract) {
    //   const [copiedPage] = await extractedPdfDoc.copyPages(srcDoc, [pageNumber]);
    //   extractedPdfDoc.addPage(copiedPage);
    // }

    // // Define the output file path and name
    // const customFileName = file.originalname;
    // const outputPath = `../outputfile/${customFileName}`;

    // // Save the extracted PDF to the specified output file
    // const extractedPdfBytes = await extractedPdfDoc.save();
    // writeFileSync(outputPath, extractedPdfBytes);

    // // end
// import { PDFDocument, StandardFonts, PDFName} from 'pdf-lib';
// import pkg from 'fs';
// const {readFileSync} = pkg;
// const {writeFileSync} = pkg;
// //start
// const pdfPath = '../inputfile/Brijrajsinh Jadeja-2_protected.pdf';
// const pdfBuffer = readFileSync(pdfPath);


// const pdfDoc = await PDFDocument.load(pdfBuffer, { ignoreEncryption: true });

// const pageCount = pdfDoc.getPageCount();

// const extractedPdfDoc = await PDFDocument.create();

// const pagesToExtract = Array.from(Array(pdfDoc.getPageCount()).keys());
//   for (const pageNumber of pagesToExtract) {
//     const [copiedPage] = await extractedPdfDoc.copyPages(pdfDoc, [pageNumber]);

//     const contentStream = copiedPage.getOperators();
//     contentStream.add(PDFName.of('CA'));
//     contentStream.push(1);
//     contentStream.add(PDFName.of('ca'));
//     contentStream.push(1);


//     const font = await extractedPdfDoc.embedFont(StandardFonts.Helvetica);
//     copiedPage.setFont(font);
//     extractedPdfDoc.addPage(copiedPage);
  

//     extractedPdfDoc.addPage(copiedPage);
//   }

// const customFileName = file.originalname;
// const extractedPdfBytes = await extractedPdfDoc.save();
// const outputPath = `../outputfile/${customFileName}`;

// writeFileSync(outputPath, extractedPdfBytes);

// //end
//end}

// {
  //
  // async function extractAllPagesFromPDF(pdfPath, outputPdfPath, password) {
  //   const pdfData = new Uint8Array(readFileSync(pdfPath));
  
  //   const loadingTask = getDocument({
  //     data: pdfData,
  //     password: password,
  //   });
  
  //   try {
  //     const pdf = await loadingTask.promise;
  //     const pageCount = pdf.numPages;
  
  //     const pdfWriter = await getDocument({}).promise;
  
  //     for (let pageNumber = 1; pageNumber <= pageCount; pageNumber++) {
  //       const page = await pdf.getPage(pageNumber);
  
  //       const scale = 1.0;
  //       const viewport = page.getViewport({ scale });
  
  //       const canvasFactory = new DOMCanvasFactory();
  //       const canvasAndContext = canvasFactory.create(
  //         viewport.width,
  //         viewport.height
  //       );
  
  //       const renderContext = {
  //         canvasContext: canvasAndContext.context,
  //         viewport: viewport,
  //         canvasFactory: canvasFactory,
  //       };
  
  //       await page.render(renderContext);
  
  //       const imageData = canvasAndContext.canvas.toDataURL();
  //       const imageDataBytes = atob(imageData.split(',')[1]);
  //       const arrayBuffer = new ArrayBuffer(imageDataBytes.length);
  //       const data = new Uint8Array(arrayBuffer);
  
  //       for (let i = 0; i < imageDataBytes.length; i++) {
  //         data[i] = imageDataBytes.charCodeAt(i);
  //       }
  
  //       const img = await pdfWriter.createImage(data);
  //       const imgDims = { width: viewport.width, height: viewport.height };
  //       const pageObj = await pdfWriter.createPage(img, imgDims);
  //       pdfWriter.addPage(pageObj);
  //     }
  
  //     const newPdfBytes = await pdfWriter.save();
  //     writeFileSync(outputPdfPath, newPdfBytes);
  //     console.log('Extraction complete!');
  //   } catch (error) {
  //     console.log('An error occurred:', error);
  //   }
  // }
  //
  // import pkg from 'pdfjs-dist';
  // const {getDocument} = pkg;
  // const {getPage} = pkg
// function extractTextFromPage(page) {
//   return page.getTextContent()
//     .then(function (textContent) {
//       var extractedText = '';
//       for (var i = 0; i < textContent.items.length; i++) {
//         extractedText += textContent.items[i].str + ' ';
//       }
//       console.log(extractedText);
//       return extractedText;
//     });
// }

// function extractTextFromAllPages(pdf) {
//   var totalPageCount = pdf.numPages;
//   console.log(totalPageCount);
//   var pagesTextPromises = [];

//   for (var pageNum = 1; pageNum <= totalPageCount; pageNum++) {
//     pagesTextPromises.push(

//       pdf.getPage(pageNum)
//         .then(extractTextFromPage)
//     );
//   }

//   return Promise.all(pagesTextPromises);
// }
// // Start
    
// getDocument({ url: '../inputfile/Brijrajsinh Jadeja-2_protected.pdf', password: password }).promise
// .then(extractTextFromAllPages)
// .then(function (extractedTextArray) {
//   console.log('Extracted text:', extractedTextArray);
// })
// .catch(function (error) {
//   console.error('Error occurred while extracting text:', error);
// });
// // End
// }

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
