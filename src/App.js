import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Themes from './components/Theme/Themes';
import { ThemeProvider } from 'styled-components';


function App() {

  const [ theme, setTheme ] = useState("light");

  const [ lenguage, setLenguage ] = useState("spanish");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <body className='flex justify-center items-center w-screen font-link'>
    <ThemeProvider theme={Themes[theme]}>
      <Header theme={ theme } setTheme= { setTheme }></Header>

    </ThemeProvider>
    </body>
  );
}

export default App;
