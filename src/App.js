import React from 'react';
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ComparisonPage from './pages/ComparisonPage';
import PreBookPage from './pages/PreBookPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import RentalsPage from './pages/RentalsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/products/:productId" Component={ProductPage} />
        <Route path="/compare" Component={ComparisonPage} />
        <Route path="/pre-book" Component={PreBookPage} />
        <Route path="/about-us" Component={AboutUsPage} />
        <Route path="/contact-us" Component={ContactUsPage} />
        <Route path="/rentals" Component={RentalsPage} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
