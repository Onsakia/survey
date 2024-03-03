
import React from 'react'
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Mysurvey from './components/surveyDisplay/surveyone';
import './App.css';
import Topbar from './components/Topbar'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='App'>

          <main className='content' >
            <Topbar/>
            <Mysurvey />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>    
  );
}

export default App;
