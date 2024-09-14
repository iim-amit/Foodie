import React,{useState,useEffect} from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Work from './Components/Work';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import { BrowserRouter as Router,useLocation, Route, Routes ,Navigate} from "react-router-dom";
import privateComp from './Components/privateComp';




function App() {

  // const isAuthenticated = false;

  const [isAuthenticated, setIsAuthenticated] = useState(false); // Replace with actual auth logic
  const location = useLocation();

  useEffect(() => {
    // Handle redirection based on authentication status
    if (isAuthenticated || location.pathname === '/') {
      // Redirect to home section
      window.location.href = '/home';
    }
  }, [isAuthenticated, location.pathname]);

  

    return (
      
      <div className="App">
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/signup" element={
          <section id="signup">
            <Signup />
          </section>
        } />

        <Route path="*" element={
          <privateComp>
            <section id="home">
              <Home />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="work">
              <Work />
            </section>
            <section id="testimonials">
              <Testimonial />
            </section>
            <section id="contact">
              <Contact />
            </section>
            <Footer />
          </privateComp>
        } />
      </Routes>

      </div>
    );
  }
  
  export default App;
