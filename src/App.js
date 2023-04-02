
import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';



function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [darkMode, setDarkMode] = useState(false)
  

  let pageComponent;

  if (currentPage === "Home") {
    pageComponent = <Home handlePageChange={handlePageChange}
                           darkMode={darkMode}/>;
  } else if (currentPage === "About") {
    pageComponent = <About  darkMode={darkMode} />;
  } else if (currentPage === "Contact") {
    pageComponent = <Contact  darkMode={darkMode} />;
  } else if (currentPage === "Portfolio") {
    pageComponent = <Portfolio  darkMode={darkMode} />;
  }

  function handlePageChange(newPage){
    setCurrentPage(newPage)
  }

  function handleDarkMode(mode){
    setDarkMode(!mode)
    document.body.classList.toggle('dark');
  }

  return (
    <div className="App">
      <Navbar handlePageChange={handlePageChange}
              darkMode={darkMode}
              handleDarkMode={handleDarkMode} />
      
      {pageComponent}
      
      <Footer />
      
    </div>
  );
}

export default App;
