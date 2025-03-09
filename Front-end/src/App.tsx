import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Authenticator from './pages/ArowanaAuthenticator.tsx'; // Import Authenticator Component
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './pages/Shop.tsx';
import TermsCondition from './pages/TermsCondition';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQContact from './pages/faq.tsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authenticator" element={<Authenticator />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/terms&conditions" element={<TermsCondition />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/FAQContact" element={<FAQContact />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
