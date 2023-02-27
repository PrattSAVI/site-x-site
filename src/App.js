import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import PartOne from "./pages/part1";
import SectionOne from "./pages/part2";
import SectionTwo from "./pages/part2/section2";
import SectionThree from "./pages/part2/section3";
import SectionFour from "./pages/part2/section4";
// import SectionFive from "./pages/part2/section5";
import Methodology from "./pages/methods";
import Glossary from "./pages/methods/glossary";
import About from "./pages/methods/about";
import Footer from "./components/Footer";
import MapIntro from "./pages/part1/mapIntro";

function App() {
  // const location = useLocation();
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="part1">
          <Route index element={<PartOne />} />
          <Route path="/part1/mapIntro" element={<MapIntro />} />
        </Route>
        <Route path="part2">
          <Route index element={<SectionOne />} />
          <Route path="/part2/section2" element={<SectionTwo />} />
          <Route path="/part2/section3" element={<SectionThree />} />
          <Route path="/part2/section4" element={<SectionFour />} />
        </Route>
        <Route path="methods">
          <Route index element={<Methodology />} />
          <Route path="/methods/glossary" element={<Glossary />} />
          <Route path="/methods/about" element={<About />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
