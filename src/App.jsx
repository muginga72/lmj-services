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

import Navbar from './components/Navbar';
import Services from './pages/Services';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Services />
      <Footer />
    </>
  );
}

export default App;
