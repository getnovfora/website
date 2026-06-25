import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Layout from './components/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import FeaturesPage from './pages/FeaturesPage.jsx';
import ComparePage from './pages/ComparePage.jsx';
import HostingPage from './pages/HostingPage.jsx';
import MigrationPage from './pages/MigrationPage.jsx';
import RoadmapPage from './pages/RoadmapPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="compare" element={<ComparePage />} />
          <Route path="hosting" element={<HostingPage />} />
          <Route path="migration" element={<MigrationPage />} />
          <Route path="roadmap" element={<RoadmapPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
