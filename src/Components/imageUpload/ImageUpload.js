import React, { useState } from "react";
import axios from "axios";

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", selectedFile);

    // Update the Axios request URL to include the complete backend URL
    axios.post("http://localhost:3003/upload", formData).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default ImageUpload;
