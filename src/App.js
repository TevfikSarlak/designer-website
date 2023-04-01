
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

  let pageComponent;

  if (currentPage === "Home") {
    pageComponent = <Home handlePageChange={handlePageChange}/>;
  } else if (currentPage === "About") {
    pageComponent = <About />;
  } else if (currentPage === "Contact") {
    pageComponent = <Contact />;
  } else if (currentPage === "Portfolio") {
    pageComponent = <Portfolio />;
  }

  function handlePageChange(newPage){
    setCurrentPage(newPage)
  }

  



  return (
    <div className="App">
      <Navbar handlePageChange={handlePageChange}/>
      
      {pageComponent}
      
      <Footer />
      
    </div>
  );
}

export default App;
