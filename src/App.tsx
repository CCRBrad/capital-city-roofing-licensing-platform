import { lazy, Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './contexts/AuthContext';
import { UniversityProgressProvider } from './contexts/UniversityProgressContext';
import { Layout } from './components/layout/Layout';
import { PortalLayout } from './components/layout/PortalLayout';
import { ScrollHandler } from './components/layout/ScrollHandler';

// Public Pages
const Home = lazy(() => import('./pages/public/Home'));
const About = lazy(() => import('./pages/public/About'));
const TheModel = lazy(() => import('./pages/public/TheModel'));
const TechStack = lazy(() => import('./pages/public/TechStack'));
const Investment = lazy(() => import('./pages/public/Investment'));
const Apply = lazy(() => import('./pages/public/Apply'));
const Markets = lazy(() => import('./pages/public/Markets'));
const StateLicensing = lazy(() => import('./pages/public/StateLicensing').then(m => ({ default: m.StateLicensing })));
const PartnerLogin = lazy(() => import('./pages/public/PartnerLogin'));

// Generic Pages
const HowItWorks = lazy(() => import('./pages/public/HowItWorks'));
const TrainingSupport = lazy(() => import('./pages/public/TrainingSupport'));
const WhyLicensing = lazy(() => import('./pages/public/WhyLicensing'));
const SuccessStories = lazy(() => import('./pages/public/SuccessStories'));
const IdealCandidate = lazy(() => import('./pages/public/IdealCandidate'));
const FAQ = lazy(() => import('./pages/public/FAQ'));
const Contact = lazy(() => import('./pages/public/Contact'));
const RoofingFranchiseAlternative = lazy(() => import('./pages/public/RoofingFranchiseAlternative'));
const UniversityPreview = lazy(() => import('./pages/public/UniversityPreview'));
const UniversityCurriculum = lazy(() => import('./pages/public/UniversityCurriculum'));
const FeedingTheFuture = lazy(() => import('./pages/public/FeedingTheFuture'));
const Resources = lazy(() => import('./pages/public/Resources'));
const PrivacyPolicy = lazy(() => import('./pages/public/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/public/TermsOfService'));
const Playbook = lazy(() => import('./pages/public/Playbook'));
const BlogPost = lazy(() => import('./pages/public/BlogPost').then(m => ({ default: m.BlogPost })));
const Accessibility = lazy(() => import('./pages/public/Accessibility'));

// Portal Pages
const Dashboard = lazy(() => import('./pages/portal/Dashboard'));
const University = lazy(() => import('./pages/portal/University'));
const UniversityModule = lazy(() => import('./pages/portal/UniversityModule'));
const Financials = lazy(() => import('./pages/portal/Financials'));
const Assets = lazy(() => import('./pages/portal/Assets'));
const SOPs = lazy(() => import('./pages/portal/SOPs'));
const Production = lazy(() => import('./pages/portal/Production'));
const Team = lazy(() => import('./pages/portal/Team'));
const Profile = lazy(() => import('./pages/portal/Profile'));
const Admin = lazy(() => import('./pages/portal/Admin'));
const Leaderboard = lazy(() => import('./pages/portal/Leaderboard'));
const Certificates = lazy(() => import('./pages/portal/Certificates'));
const Syllabus = lazy(() => import('./pages/portal/Syllabus'));
const Support = lazy(() => import('./pages/portal/Support'));
const ManagerWarRoom = lazy(() => import('./pages/portal/ManagerWarRoom'));
const DailyActivity = lazy(() => import('./pages/portal/DailyActivity'));
const NotFound = lazy(() => import('./pages/NotFound'));

const Fallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-navy-950 text-white font-display text-2xl animate-pulse uppercase tracking-widest">
    Capital City Roofing
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<Fallback />}>
            <ScrollHandler />
            <Routes>
              {/* Public Marketing Site */}
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="the-model" element={<TheModel />} />
                <Route path="tech-stack" element={<TechStack />} />
                <Route path="investment" element={<Investment />} />
                <Route path="apply" element={<Apply />} />
                <Route path="markets" element={<Markets />} />
                <Route path="licensing-:stateSlug" element={<StateLicensing />} />
                <Route path="how-it-works" element={<HowItWorks />} />
                <Route path="training-support" element={<TrainingSupport />} />
                <Route path="why-licensing" element={<WhyLicensing />} />
                <Route path="success-stories" element={<SuccessStories />} />
                <Route path="ideal-candidate" element={<IdealCandidate />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="contact" element={<Contact />} />
                <Route path="roofing-franchise-alternative" element={<RoofingFranchiseAlternative />} />
                <Route path="university-preview" element={<UniversityPreview />} />
                <Route path="university-curriculum" element={<UniversityCurriculum />} />
                <Route path="feeding-the-future" element={<FeedingTheFuture />} />
                <Route path="resources" element={<Resources />} />
                <Route path="resources/:slug" element={<BlogPost />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="terms-of-service" element={<TermsOfService />} />
                <Route path="accessibility" element={<Accessibility />} />
                <Route path="playbook" element={<Playbook />} />
                <Route path="/partner-login" element={<PartnerLogin />} />
              </Route>

              {/* Authenticated Partner Portal */}
              <Route path="/portal" element={<UniversityProgressProvider><PortalLayout /></UniversityProgressProvider>}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="university" element={<University />} />
                <Route path="university/:moduleId" element={<UniversityModule />} />
                <Route path="leaderboard" element={<Leaderboard />} />
                <Route path="certificates" element={<Certificates />} />
                <Route path="syllabus" element={<Syllabus />} />
                <Route path="financials" element={<Financials />} />
                <Route path="assets" element={<Assets />} />
                <Route path="sops" element={<SOPs />} />
                <Route path="production" element={<Production />} />
                <Route path="team" element={<Team />} />
                <Route path="support" element={<Support />} />
                <Route path="profile" element={<Profile />} />
                <Route path="admin" element={<Admin />} />
                <Route path="war-room" element={<ManagerWarRoom />} />
                <Route path="daily-activity" element={<DailyActivity />} />
              </Route>

              {/* 404 Catch-All */}
              <Route element={<Layout />}>
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
      <Analytics />
    </HelmetProvider>
  );
}

export default App;
