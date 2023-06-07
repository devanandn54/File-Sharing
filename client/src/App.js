import './App.css';
import {useRef, useState, useEffect} from 'react'
import { uploadFile } from './services/api';

function App() {
  const [file, setFile] = useState();
  const [result, setResult] = useState();

  const logo = "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000"
  const fileInputRef = useRef();
  useEffect(()=> {

    const getImage = async() => {
      if (file){
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file)

        let resp = await uploadFile(data);
        setResult(resp.path)

      }
    }
    getImage();

  }, [file])
  const onUploadClick = () => {
    fileInputRef.current.click();

  }
  console.log(file)

  return (
    <div className="container">
      <img src={logo} alt="banner" />
      <div className="wrapper">
        <h1> Simple file Sharing </h1>
        <p>Seamlessly upload and share the files</p>
        

        <button onClick={() => onUploadClick()}>upload</button>
        <input type="file" ref={fileInputRef} style={{display: "none"}}
        onChange={(e) => setFile(e.target.files[0]) }
        
        />
        <a href={result} target="_blank">{result}</a>

      </div>

     
    </div>
  );
}

export default App;
