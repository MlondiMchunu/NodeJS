const express = require('express');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle file uploads
app.post('/upload', (req, res) => {
  const form = new formidable.IncomingForm({
    uploadDir: uploadDir, // Set the directory for uploads
    keepExtensions: true // Keep file extensions
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error parsing the files:', err);
      res.status(500).send('Error parsing the files');
      return;
    }

    const file = files.uploadedFile;

    // Move the file to the desired directory
    const oldPath = file.path;
    const newPath = path.join(uploadDir, file.name);

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.error('Error moving the file:', err);
        res.status(500).send('Error moving the file');
        return;
      }

      res.send('File uploaded successfully!');
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
