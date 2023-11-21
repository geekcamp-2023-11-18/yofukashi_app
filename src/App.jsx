import Recording from './components/recording.jsx'
import Header from './components/header.jsx'
import Rogin from "./components/login.jsx"
import Library from './components/library.jsx'
import Test from "./components/test.jsx"
import { useState } from 'react'

function App() {
  const [login, isLogin] = useState(false)
  const [camera, isCamera] = useState(true)
  
  const successLogin = () => {
    isLogin(true)
  }

  const chengeScreen = (screen) => {
    if(screen == "camera"){
      isCamera(true)
    }
    else if(screen == "library"){
      isCamera(false)
    }
  }

  return (
    <>
      {!login && <Rogin onChildEvent = {successLogin}/>}
      {login && <Header onChildEvent = {chengeScreen}/>}
      {(login && camera) && <Recording/>}
      {(login && !camera ) && <Library />}
    </>
  )
}

export default App