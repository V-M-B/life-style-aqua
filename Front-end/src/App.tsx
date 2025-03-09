import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Products from './pages/Shop.tsx';
import Authenticator from './pages/ArowanaAuthenticator.tsx'; // Import Authenticator Component
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './pages/Shop.tsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/authenticator" element={<Authenticator />} /> 
        <Route path="/Shop" element={<Shop />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
