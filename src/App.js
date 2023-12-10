import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Themes from './components/Theme/Themes';
import Profile from './components/Profile/Profile';
import Description from './components/Descrition/Description';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Work from './components/Work/Work'
import Porfolio from './components/Porfolio/Porfolio';
import Footer from './components/Footer/Footer';
import videoBg from './assets/videos/video.mp4';
import { ThemeProvider } from 'styled-components';


function App() {

  const [ theme, setTheme ] = useState("light");

  const [ lenguage, setLenguage ] = useState("spanish");

  return (
    <>
      <div className='video'>
        <video autoPlay loop muted >
          <source src={videoBg} type='video/mp4' />
        </video>
      </div>
      <div className='content'>
        <ThemeProvider theme={Themes[theme]}>
          <Header theme={ theme } setTheme= { setTheme } lenguage={ lenguage } setLenguage={ setLenguage }/>
          <Profile theme={ theme } setTheme= { setTheme } lenguage={ lenguage } setLenguage={ setLenguage }/>
          <Description theme={ theme } setTheme= { setTheme } lenguage={ lenguage } setLenguage={ setLenguage }/>
          <Skills theme={ theme } setTheme= { setTheme } lenguage={ lenguage } setLenguage={ setLenguage }/>
          <Education theme={ theme } setTheme= { setTheme } lenguage={ lenguage } setLenguage={ setLenguage }/>
          <Work theme={ theme } setTheme= { setTheme } lenguage={ lenguage } setLenguage={ setLenguage }/>
          <Porfolio theme={ theme } setTheme= { setTheme } lenguage={ lenguage } setLenguage={ setLenguage }/>
          <Footer theme={ theme } setTheme= { setTheme } lenguage={ lenguage } setLenguage={ setLenguage }/>
        </ThemeProvider>
      </div>  
    </>
  );
}

export default App;
