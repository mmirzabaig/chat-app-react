import React, { Component } from 'react';
import axios from 'axios';

class FileUpload extends Component {
  constructor(){
    super();
    this.state = {
      selectedFile: null
    }
  }

  handleFileSelector = (e) => {
    e.preventDefault();
    this.setState({
      selectedFile: e.target.files[0],
    })
  }

  handleFileUpload = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('http://localhost:9000/upload', fd)
    .then(res => {
        console.log(res.statusText)
      })

  }

  render(){
    return(
      <div>
        <h2>File Uploader</h2>
        <input type='file' onChange={this.handleFileSelector}/>
        <button onClick={this.handleFileUpload}>Upload</button>
      </div>
    );
  }
}
export default FileUpload;
