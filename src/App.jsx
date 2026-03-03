import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutCompany from './pages/about/AboutCompany';
import VisionMission from './pages/about/VisionMission';
import QualityPolicy from './pages/about/QualityPolicy';
import Management from './pages/about/Management';
import Gallery from './pages/about/Gallery';
import ProductsPage from './pages/ProductsPage';
import ProductCategoryPage from './pages/products/ProductCategoryPage';
import ProductDetailPage from './pages/products/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import Partner from './pages/Partner';
import ResumeUpload from './pages/careers/ResumeUpload';
import Vacancies from './pages/careers/Vacancies';
import TermsPage from './pages/legal/TermsPage';
import PrivacyPolicyPage from './pages/legal/PrivacyPolicyPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about/company" element={<AboutCompany />} />
        <Route path="/about/vision" element={<VisionMission />} />
        <Route path="/about/quality" element={<QualityPolicy />} />
        <Route path="/about/management" element={<Management />} />
        <Route path="/about/gallery" element={<Gallery />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/detail/:slug" element={<ProductDetailPage />} />
        <Route path="/products/:category" element={<ProductCategoryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/careers/resume" element={<ResumeUpload />} />
        <Route path="/careers/vacancies" element={<Vacancies />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="bg-grid-pattern"></div>
        <Navbar />
        <main className="main-content">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
