import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';
import { ThemeProvider } from '@emotion/react';
import {theme} from './style/theme'
import Footer from './components/Footer';


const style = {
  header: {
    width: '100%',
    padding: '0',
    margin: '0',
    position: 'fixed',
    top: '0',
    left: '0', 
  },
};




export default function App() {
  const [projectData, setProjectData] = useState([]);

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

  return (
    <div>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <Header style={style.header}/>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path='/contactme' element={<ContactMe/>}/>
          <Route path='/resume' element={<Resume/>}/>
        </Routes>
        <Footer/>
        </ThemeProvider>
      </BrowserRouter>
     
    </div>
  );
}


