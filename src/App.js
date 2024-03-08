import React from 'react';
import './App.css';
import Home from '../src/Components/Home.jsx';
import About from '../src/Components/About.jsx';
import Event from '../src/Components/Event.jsx';
import Rules from '../src/Components/Rules.jsx';
import Contact from '../src/Components/Contact.jsx';
import VideoBackground from './Components/VideoBackground.js';
const App = () => {
  return (
    <>
    <VideoBackground/>
      {/* <Home /> */}
      <About />
      <br/>
      <Event />
      <br/>
      <Rules />
      <br/>
      <Contact />
    </>
  )
}
export default App;
