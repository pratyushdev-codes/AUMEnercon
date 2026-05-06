import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WhatWeDoPage from './pages/WhatWeDoPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import OrganizationPage from './pages/OrganizationPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/what-we-do" element={<WhatWeDoPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/organization" element={<OrganizationPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
