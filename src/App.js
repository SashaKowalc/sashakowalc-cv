import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Themes from './components/Theme/Themes';
import Profile from './components/Profile/Profile';
import Description from './components/Descrition/Description';
import Details from './components/Details/Details';
import videoBg from './assets/videos/video.mp4';
import { ThemeProvider } from 'styled-components';


function App() {

  const [ theme, setTheme ] = useState("light");

  const [ lenguage, setLenguage ] = useState("spanish");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <video autoPlay loop muted>
          <source src={videoBg} type='video/mp4' />
        </video>
      </div>
      <div className='content'>
        <ThemeProvider theme={Themes[theme]}>
          <Header theme={ theme } setTheme= { setTheme }/>
          <Profile theme={ theme } setTheme= { setTheme } lenguage={ lenguage } setLenguage={ setLenguage }/>
          <Description theme={ theme } setTheme= { setTheme } lenguage={ lenguage } setLenguage={ setLenguage }/>
          <Details theme={ theme } setTheme= { setTheme } lenguage={ lenguage } setLenguage={ setLenguage }/>
        </ThemeProvider>
      </div>  
    </>
  );
}

export default App;
