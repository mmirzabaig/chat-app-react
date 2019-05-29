// https://github.com/tarique93102/image-upload-app/blob/master/client/src/App.js
import React, { Component } from 'react';
import DefaultImg from './images/default-img.png';
import { socket } from '../index';



export default class UserProfile extends Component {
  constructor(){
    super();
    this.state = {
      multerImage: DefaultImg,
      firebaseImage: DefaultImg,
      baseImage: DefaultImg,
      SelectedFile: '',
      FReader: ''
    }
  }
  setDefaultImage(uploadType) {
    if (uploadType === "multer") {
      this.setState({
        multerImage: DefaultImg
      });
    } else if (uploadType === "firebase") {
      this.setState({
        firebaseImage: DefaultImg
      });
    } else {
      this.setState({
        baseImage: DefaultImg
      });
    }
  }


  // function to upload image once it has been captured
  // includes multer and firebase methods
  renderLocalImage = async (e) => {

    let array = [];

    array = array.concat(e.target.files);

    await this.setState({
      multerImage: URL.createObjectURL(e.target.files[0]),
      SelectedFile: array,
    })
    // console.log(array)
    // let a = this.state.SelectedFile;
    await console.log(this.state.SelectedFile[0][0].name)
     let a = this.state.SelectedFile[0][0].slice(0, 100000);
    await console.log(a, 'blob')
    await console.log(this.state.SelectedFile, 'blobloblob')
  }

  uploadImage = (e) => {
    e.preventDefault();

    console.log(e.target.result, 'RESULT')

    // let imageObj = {};
    //
    //   let imageFormObj = new FormData();
    //
    //   imageFormObj.append("imageName", "multer-image-" + Date.now());
    //   imageFormObj.append("imageData", e.target.files[0]);

      this.state.FReader = new FileReader();
      let name = this.state.SelectedFile[0][0].name;
      let size = this.state.SelectedFile[0][0].size;

      // var Content = "<span id='NameArea'>Uploading " + SelectedFile.name + " as " + Name + "</span>";
      // Content += '<div id="ProgressContainer"><div id="ProgressBar"></div></div><span id="percent">0%</span>';
      // Content += "<span id='Uploaded'> - <span id='MB'>0</span>/" + Math.round(SelectedFile.size / 1048576) + "MB</span>";
      // document.getElementById('UploadArea').innerHTML = Content;
      this.state.FReader.onload = function(evnt){
        console.log('HELLO1')

          socket.emit('Upload', { 'Name' : name, Data : evnt.target.result });
      }
      console.log('HELLO2')

      socket.emit('Start', { 'Name' : name, 'Size' : size });

      // stores a readable instance of
      // the image being uploaded using multer


      // axios.post(`${API_URL}/image/uploadmulter`, imageFormObj)
      //   .then((data) => {
      //     if (data.data.success) {
      //       alert("Image has been successfully uploaded using multer");
      //       this.setDefaultImage("multer");
      //     }
      //   })
      //   .catch((err) => {
      //     alert("Error while uploading image using multer");
      //     this.setDefaultImage("multer");
      //   });


    // else if (method === "firebase") {
    //   let currentImageName = "firebase-image-" + Date.now();
    //
    //   let uploadImage = storage.ref(`images/${currentImageName}`).put(e.target.files[0]);
    //
    //   uploadImage.on('state_changed',
    //     (snapshot) => { },
    //     (error) => {
    //       alert(error);
    //     },
    //     () => {
    //       storage.ref('images').child(currentImageName).getDownloadURL().then(url => {
    //
    //         this.setState({
    //           firebaseImage: url
    //         });
    //
    //         // store image object in the database
    //         imageObj = {
    //           imageName: currentImageName,
    //           imageData: url
    //         };
    //
    //         axios.post(`${API_URL}/image/uploadbase`, imageObj)
    //           .then((data) => {
    //             if (data.data.success) {
    //               alert("Image has been successfully uploaded using firebase storage");
    //               this.setDefaultImage("firebase");
    //             }
    //           })
    //           .catch((err) => {
    //             alert("Error while uploading image using firebase storage")
    //             this.setDefaultImage("firebase");
    //           });
    //       })
    //     })
    // }
  }

// FireBase
//   getBaseFile(files) {
//   // create a local readable base64 instance of an image
//   this.setState({
//     baseImage: files.base64
//   });
//
//   let imageObj = {
//     imageName: "base-image-" + Date.now(),
//     imageData: files.base64.toString()
//   };
//
//   axios.post(`${API_URL}/image/uploadbase`, imageObj)
//     .then((data) => {
//       if (data.data.success) {
//         alert("Image has been successfully uploaded using base64 format");
//         this.setDefaultImage("base");
//       }
//     })
//     .catch((err) => {
//       alert("Error while uploading image using base64 format")
//       this.setDefaultImage("base");
//     });
// }

  componentDidMount() {
      socket.on('uploadComplete', (data) => {
        console.log('UPLOADCOMPLETE SALAY')
        this.setState({
          fileUploaded: true
        })
      })

      socket.on('MoreData', async (data) => {
        console.log('HELLO MORE DATA')
        // UpdateBar(data['Percent']);
        var Place = data['Place'] * 524288; //The Next Blocks Starting Position
        var NewFile; //The Variable that will hold the new Block of Data
            console.log(this.state.SelectedFile, '1244124')
            console.log(this.state.SelectedFile[0], '1244124')
            console.log(this.state.SelectedFile[0][0], '1244124')
            console.log(this.state.SelectedFile[0][0].size, '1244124')
            let currnetFile = this.state.SelectedFile[0][0];

            NewFile = currnetFile.slice(Place, Place + Math.min(524288, (this.state.SelectedFile[0][0].size-Place)));
            await this.state.FReader.readAsBinaryString(NewFile);
    });

    // function UpdateBar(percent){
    //     document.getElementById('ProgressBar').style.width = percent + '%';
    //     document.getElementById('percent').innerHTML = (Math.round(percent*100)/100) + '%';
    //     var MBDone = Math.round(((percent/100.0) * SelectedFile.size) / 1048576);
    //     document.getElementById('MB').innerHTML = MBDone;
    // }

  }

  render(){
    return(
      <div>
        <h2>SIGNUP PAGE</h2>
        <div className='upload-form'>
          <div className="process">
            <h4 className="process__heading">Process: Using Multer</h4>
            <p className="process__details">Upload image to a node server, connected to a MongoDB database, with the help of multer</p>
            <form onSubmit={this.uploadImage}>
              <input type="file" className="process__upload-btn" onChange={this.renderLocalImage} />
              <button type='submit'>Submit</button>
            </form>
            <img src={this.state.multerImage} name={this.state.name} size={this.state.size} className="process__image" style={{width: '250px'}} />
            { this.state.fileUploaded ? <h2>Upload Complete</h2> : null }
          </div>

        </div>

      </div>
    )
  }
}
