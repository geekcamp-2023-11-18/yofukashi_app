import "./header.css";
import logo from "../imgs/header_logo.png";
import library from "../imgs/library_logo.png"
import camera from "../imgs/camera_logo.png"

const  header = ({ onChildEvent }) => {

  const chengeCamera = () => {
    onChildEvent("camera");
  }

  const chengeLibrary = () => {
    onChildEvent("library");
  }
  
  return (
    <div className="header-nav">
        <div className="header-start">
          <img src={logo} alt="logo"/>
        </div>
        <div className="header-end">
          <img src={camera} alt="camera" onClick={chengeCamera}/>
          <img src={library} alt="library" onClick={chengeLibrary}/>
        </div>
    </div>
  );
}

export default header;