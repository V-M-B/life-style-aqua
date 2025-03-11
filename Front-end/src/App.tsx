import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Authenticator from './pages/ArowanaAuthenticator.tsx'; // Import Authenticator Component
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './pages/Shop.tsx';
import TermsCondition from './pages/TermsCondition';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQContact from './pages/faq.tsx';
import Arowana from './pages/ArowanaPage.tsx';
import SilverDollar from './pages/Silver-dollar.tsx'; // Corrected component name
import Discus from './pages/Discus.tsx';
import FishFood from './pages/fish-food.tsx';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authenticator" element={<Authenticator />} />
        <Route path="/shop" element={<Shop />}/>
          <Route path="/shop/arowana" element={<Arowana />} />
          <Route path="/shop/silver-dollar" element={<SilverDollar />} /> 
          <Route path="/shop/discus" element={<Discus />} />
          <Route path="/shop/fish-food" element={<FishFood />} />
        <Route path="/terms&conditions" element={<TermsCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Corrected path */}
        <Route path="/faq-contact" element={<FAQContact />} /> {/* Corrected path */}
      </Routes>
      <Footer />
    </Router>
  );
}
