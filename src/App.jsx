import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import './i18n';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Programs from './pages/Programs';
import Blog from './pages/Blog';
import Application from './pages/Application';
import DashboardLayout from './components/dashboard/DashboardLayout';
import Overview from './pages/dashboard/Overview';
import DashboardPrograms from './pages/dashboard/Programs';
import Blogs from './pages/dashboard/Blogs';
import Messages from './pages/dashboard/Messages';
import Applications from './pages/dashboard/Applications';
import Settings from './pages/dashboard/Settings';

// Lazy load pages
const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/Services'));
const ProgramsPage = lazy(() => import('./pages/Programs'));
const BlogPage = lazy(() => import('./pages/Blog'));
const ContactPage = lazy(() => import('./pages/Contact'));
const ApplicationPage = lazy(() => import('./pages/Application'));

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar changeLanguage={changeLanguage} />
        <main className="flex-grow pt-16">
          <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/application" element={<ApplicationPage />} />
              
              {/* Dashboard Routes */}
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<Overview />} />
                <Route path="programs" element={<DashboardPrograms />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="messages" element={<Messages />} />
                <Route path="applications" element={<Applications />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
