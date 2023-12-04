import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavbarWithMegaMenu } from "./components/Navbar";
import { FooterWithLogo } from "./components/Footer";

import Home from "./Home";
import About from "./About";
import Legal from './Legal';
import Projects from "./Projects";
import Team from './Team';
import Stuff from './Stuff';
import News from './News';
import NewsPage from './SinglePageNews';
import Rules from './Rules';
import NotFound from './components/404';



export default function App() {
  return (
      <Router>
        <NavbarWithMegaMenu />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/news" exact element={<News/>} />
          <Route path="/news/:customLink" element={<NewsPage/>} />
          <Route path="/le-hub" element={<About/>} />
          <Route path="/le-hub/la-team" element={<Team/>} />
          <Route path="/le-hub/le-materiel" element={<Stuff/>} />
          <Route path="/le-hub/les-projets" element={<Projects/>} />
          <Route path="/mentions-legales" element={<Legal/>} />
          <Route path="/reglement-interieur" element={<Rules/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FooterWithLogo />
      </Router>
  );
}