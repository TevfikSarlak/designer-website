import './App.css';
import React, { useState, Suspense } from 'react';
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';
import LoadingPage from './components/LoadingPage';
import RootLayout from './layouts/RootLayout';
import NotFound from './components/NotFound';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkMode(mode) {
    setDarkMode(!mode);
    document.body.classList.toggle('dark');
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/"
           element={<RootLayout handleDarkMode={handleDarkMode} darkMode={darkMode} />}
           errorElement={<NotFound />} >
      <Route index element={<Home darkMode={darkMode} />} />
      <Route path="/about" element={<About darkMode={darkMode} />} />
      <Route path="/contact" element={<Contact darkMode={darkMode} />} />
      <Route path="/portfolio" element={<Portfolio darkMode={darkMode} />} />
    </Route>
  ));

  return (
    <div className="App">
      <RouterProvider router={router} >
        
          <Suspense fallback={<LoadingPage />}> </Suspense>
       
      </RouterProvider>
      
    </div>
  );
}

export default App;
