import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout/Layout';
import LandingPage from './pages/LandingPage';
import RedPillPage from './pages/RedPillPage';
import BluePillPage from './pages/BluePillPage';
import LeaderboardPage from './pages/LeaderboardPage';
import {
  Philosophy, Science, Manifesto, Community,
  Legal, PrivacyPolicy, TermsOfService, CookiePolicy, ContactUs

} from './pages/StaticPages';
import TimerPage from './pages/TimerPage';
import UserProfilePage from './pages/UserProfilePage';
import WallpaperGalleryPage from './pages/WallpaperGalleryPage';
import './App.css';

// Placeholder pages
const ApplyPage = () => <div className="page-content"><h2>Apply to Program</h2></div>;
const Dashboard = () => <div className="page-content"><h2>Dashboard</h2></div>;

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/red-pill" element={<RedPillPage />} />
            <Route path="/blue-pill" element={<BluePillPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/timer" element={<TimerPage />} />
            <Route path="/timer" element={<TimerPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/wallpapers" element={<WallpaperGalleryPage />} />

            {/* Static Pages */}
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/science" element={<Science />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/community" element={<Community />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
