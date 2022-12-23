// import logo from './logo.svg';
import '../css/App.css';
import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home"
import About from '../components/About';
import Compose from '../components/Compose';
import SinglePost from "../components/SinglePost"


function App() {
  return (

    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} exact></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/compose' element={<Compose />} ></Route>
          <Route path="/posts/:title" element={<SinglePost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
