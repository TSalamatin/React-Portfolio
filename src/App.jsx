import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import theme from './style/theme';



 // useEffect(() => {
  //   async function fetchProjects() {
  //     try {
  //       const response = await fetch('https://api.github.com/users/TSalamatin/repos');
  //       if (response.ok) {
  //         const data = await response.json();
  //         setProjectData(data);
  //       } else {
  //         console.error('Failed to fetch data');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }

  //   fetchProjects();
  // }, []);

  //TODO: Add Experience and Education Routes Later
  // Also make fetch usable


export default function App() {
 
  return (
    <div>

      <ThemeProvider theme={createTheme(theme)}>
        <CssBaseline>
         
            <BrowserRouter>
              <Header />
              <Routes >
                <Route path="/" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path='/contactme' element={<ContactMe />} />
                <Route path='/resume' element={<Resume />} />
              </Routes>
              <Footer />
            </BrowserRouter>
         

        </CssBaseline>
      </ThemeProvider>

    </div>
  );
}

