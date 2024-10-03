import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Codese from './Components/Codingdetails'
import Edu from './Components/Education'
import Exp from './Components/Experience'
import Skil from './Components/Skills'
import Footer from './Components/Footer';
import Project from './Components/Project'
import Main from './Components/Main'
import About from './Components/About'
// Set the radial gradient background
document.body.style.background = 'radial-gradient(farthest-corner at 50% 50%, #1a0246, #000000)';


function App() {
  return (
    <Router>
      <NavBar/>
      <main id="main">
        <Main id="main" />
        <section id="codingdetails">
          <Codese/>
        </section>
        <section id="About">
          <About/>
        </section>
        <section id="skills">
          <Skil/>
        </section>
        <section id="education">
          <Edu/>
        </section>
        <section id="experience">
          <Exp/>
        </section>
        <section id="projects">
          <Project/>
          <Link to="#main"></Link>
        </section>
       
      </main>
      <Footer/>
    </Router>
  );
}

export default App;