import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import TechTeam from "./TechTeam";
import Projects from "./Projects";
import ScrollToTop from "./ScrollToTop";
import Community from "./Community";
import Events from "./Events";
import EventReport from "./pages/EventReport";
import Footer from "./Footer";
import Logo from "./Logo";

function App() {
  const location = useLocation();

  // Hide the global logo on the Projects page
  const hideLogo = location.pathname === "/projects";

  return (
    <>
      <ScrollToTop />

      {!hideLogo && <Logo />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tech-team" element={<TechTeam />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/community" element={<Community />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:slug" element={<EventReport />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;