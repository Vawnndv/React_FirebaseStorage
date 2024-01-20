import React, { Component } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { imageDb } from './config';
import { v4 as uuidv4 } from 'uuid';
import { Box, Typography } from '@mui/material';

class DropzoneAreaExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      uploadedImages: [],
    };
  }

  async handleUpload() {
    const { files, uploadedImages } = this.state;
    const uploadPromises = [];
    const uniqueId = uuidv4();

    files.forEach((file) => {
      const storageRef = ref(imageDb, `${uniqueId}_${file.name}`);
      const uploadTask = uploadBytes(storageRef, file);
      uploadPromises.push(uploadTask);
    });

    try {
      await Promise.all(uploadPromises);

      const downloadURLs = await Promise.all(
        files.map(async (file) => {
          return await getDownloadURL(ref(imageDb, `${uniqueId}_${file.name}`));
        })
      );

      const updatedImages = uploadedImages.concat(downloadURLs);

      this.setState({
        files: [],
        uploadedImages: updatedImages,
      });
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  }

  handleChange(files) {
    this.setState({
      files: files,
    });
  }

  render() {
    const { uploadedImages } = this.state;

    return (
      <div>
        <DropzoneArea onChange={this.handleChange.bind(this)} />
        <button onClick={() => this.handleUpload()}>Upload</button>

        <Box>
          <Typography variant="h2" color="initial"> Image after download </Typography>
          {uploadedImages.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Uploaded ${index + 1}`} style={{ maxWidth: '100px', margin: '10px' }} />
          ))}
        </Box>
      </div>
    );
  }
}

export default DropzoneAreaExample;
