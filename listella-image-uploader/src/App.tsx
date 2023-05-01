import './App.css'
import { ImageUploader } from 'react-image-upload-interface';
import NavBar from './NavBar.tsx';

const submitButtonStyle: React.CSSProperties = {
  backgroundColor: 'rgb(56,182,255)',
  padding: '5px 10px 5px 10px',
  borderRadius: '15px',
  fontSize: '20px',
  fontFamily: 'Helvetica',
  textAlign: 'center',
  fontWeight: '400',
  cursor: 'pointer',
}

const handleFileSubmit = (files : { [key: string] : File }) => {
  console.log(files)
}

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <ImageUploader Width='80vh' Height='60vh' submitButtonStyle={submitButtonStyle} handleFileSubmit={handleFileSubmit}/>
      </div>  
    </>
  )
}

export default App
