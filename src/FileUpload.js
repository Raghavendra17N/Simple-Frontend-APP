import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) {
      setMessage('Please select a file first.');
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/generate-signed-url`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileName: file.name }),
      });

      const data = await response.json();
      const signedUrl = data.url;

      const uploadResponse = await fetch(signedUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/octet-stream',
        },
        body: file,
      });

      if (uploadResponse.ok) {
        setMessage('File uploaded successfully!');
      } else {
        setMessage('File upload failed.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('Error uploading file.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>File Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload} style={{ marginLeft: '10px' }}>Upload File</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FileUpload;
