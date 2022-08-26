import './App.css';
import { MdCloudUpload } from 'react-icons/md';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [theFile, setTheFile] = useState(null);

  const setValues = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('thefile', theFile);

    const res = await axios.post(
      `${process.env.REACT_APP_SERVER}/upload`,
      formData,
    );

    if (res.status) {
      toast('Wow so easy !');
      alert("File Uploaded Success")
    } else {
      alert("Opps something went wrong, Please try again")
    }
    console.log(res, 'd');
  };

  return (
    <>
      <div className="zone">
        <form onSubmit={setValues} method="post">
          <div id="dropZ">
            <div className="Upload-button">
              <button type="submit" id='subbtn'>
                <MdCloudUpload size={120} />
              </button>
            </div>
            <div>Drag and drop your file here</div>
            <span>OR</span>
            <div className="selectFile">
              <label htmlFor="file">Select file</label>

              <input
                type="file"
                name="Thefiles"
                id="file"
                onChange={(event) => setTheFile(event.target.files[0])}
              />
            </div>
            <p>File size limit : 50 MB</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
