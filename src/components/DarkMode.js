

import React, { useState } from "react"
import Button from 'react-bootstrap/Button';



function DarkMode(){

    var rootElement =  document.getElementById('root')
    var htmlEl = document.getElementsByTagName('html')[0]

    let mode = rootElement.classList.contains('darkmode') ? "Light Mode" : "Dark Mode"

    const [currentMode, setCurrentMode] = useState(mode);

   function changeToDarkMode(){
    try {
        if(  rootElement.classList.contains('darkmode')){
            rootElement.classList.remove('darkmode')
            setCurrentMode("Dark Mode")
            htmlEl.classList.remove('darkmode')
        }else{
            setCurrentMode("Light Mode")
            rootElement.classList.add('darkmode')
            htmlEl.classList.add('darkmode')
        }
    } catch (error) {
        console.log(error)
    }
  
    }


 return <div className="dark">
 <Button onClick={changeToDarkMode} variant="outline-light"> Select {currentMode}</Button>
  </div>
}

export default DarkMode