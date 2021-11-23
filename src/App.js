import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import MyProvider from './context/MyProvider';

// Pages:
import Home from './pages/Home';
import About from './pages/About'
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <MyProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/about" element={ <About /> } />
          <Route path="/projects" element={ <Projects />} />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;
