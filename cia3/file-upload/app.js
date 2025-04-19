// app.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();

// Ensure the uploads directory exists; if not, create it.
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// Initialize multer with storage options.
const upload = multer({ storage });

// Serve static files from the uploads folder on the "/uploads" path.
app.use('/uploads', express.static(uploadDir));

// Define a POST route for file uploads. 'file' is the name of the form field.
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.send(`File uploaded successfully! <a href="/uploads/${req.file.filename}">View File</a>`);
});

// GET route to display upload form and links for file viewing.
app.get('/', (req, res) => {
  // Read files from the uploads directory
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).send('Error reading uploaded files.');
    }

    // Create a list of file links if files exist
    const fileList = files.map(file => `<li><a href="/uploads/${file}">${file}</a></li>`).join('');
    res.send(`
      <h2>File Uploader</h2>
      <form method="POST" action="/upload" enctype="multipart/form-data">
        <input type="file" name="file" required />
        <button type="submit">Upload</button>
      </form>
      <h3>Uploaded Files</h3>
      <ul>${fileList}</ul>
    `);
  });
});

// Start the server.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});