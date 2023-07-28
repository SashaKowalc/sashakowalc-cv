import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Themes from './components/Theme/Themes';
import Profile from './components/Profile/Profile';
import { ThemeProvider } from 'styled-components';


function App() {

  const [ theme, setTheme ] = useState("light");

  const [ lenguage, setLenguage ] = useState("spanish");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider theme={Themes[theme]}>
      {/* <body className='flex justify-center items-center w-screen font-link' lenguage={lenguage["spanish"]}> */}
        <Header theme={ theme } setTheme= { setTheme }></Header>
        {/* <main className=' w-1/2 font-link'> */}
        <Profile theme={ theme } setTheme= { setTheme } lenguage={ lenguage } setLenguage={ setLenguage }></Profile>
        {/* </main>
      </body> */}
    </ThemeProvider>
  );
}

export default App;
