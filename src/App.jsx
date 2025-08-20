// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Services from './pages/Services';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import Navbar from './components/Navbar';
// import Services from './pages/Services';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Services />
//       <Footer />
//     </>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import About from './pages/About';
import Services from './pages/Services';
import WhoWeAre from './pages/WhoWeAre';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import WebDevelopment from './pages/services/WebDevelopment';
import WeddingEvents from './pages/services/WeddingEvents';
import Tutoring from './pages/services/Tutoring';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Services />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/wedding-events" element={<WeddingEvents />} />
        <Route path="/services/tutoring" element={<Tutoring />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
