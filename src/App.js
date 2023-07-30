import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Themes from './components/Theme/Themes';
import Profile from './components/Profile/Profile';
import Description from './components/Descrition/Description';
import { ThemeProvider } from 'styled-components';


function App() {

  const [ theme, setTheme ] = useState("light");

  const [ lenguage, setLenguage ] = useState("spanish");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider theme={Themes[theme]}>
      <Header theme={ theme } setTheme= { setTheme }></Header>
      <Profile theme={ theme } setTheme= { setTheme } lenguage={ lenguage } setLenguage={ setLenguage }></Profile>
      <Description theme={ theme } setTheme= { setTheme } lenguage={ lenguage } setLenguage={ setLenguage }></Description>
    </ThemeProvider>
  );
}

export default App;
