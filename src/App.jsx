import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Services from './pages/Services';
import WhoWeAre from './pages/WhoWeAre';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import WebDevelopmentServices from './pages/services/WebDevelopmentServices';
import WeddingEventServices from './pages/services/WeddingEventServices';
import TutoringServices from './pages/services/TutoringServices';
import BuffetServices from './pages/services/BuffetServices';
import BeverageServices from './pages/services/BeverageServices';
import BeautyServices from './pages/services/BeautyServices';
import ServicesPromo from './data/ServicesPromo';

function App() {
  return (
    <Router>
      {/* Rendering the Navbar and banner */}
      <NavigationBar />
      <ServicesPromo />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/contact" element={<Contact />} />

        {/* Route for the services available */}
        <Route path="/services/web-development" element={<WebDevelopmentServices />} />
        <Route path="/services/wedding-events" element={<WeddingEventServices />} />
        <Route path="/services/tutoring" element={<TutoringServices />} />
        <Route path="/services/buffet" element={<BuffetServices />} />
        <Route path="/services/beverages" element={<BeverageServices />} />
        <Route path="/services/beauty" element={<BeautyServices />} />
      </Routes>

      {/* Render the Services cards */}
      <Services />

      {/* Render the footer */}
      <Footer />
    </Router>
  );
}

export default App;
