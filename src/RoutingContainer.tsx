import { Paper } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import HeaderMiddle from "./Components/HeaderMiddle";
import SkillArticle from "./DynamicPages/SkillArticle";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";


function RoutingContainer () {
    const LINKS = [{link: '/', label: 'Home'}, {link: '/about', label: 'About'}, {link: '/projects', label: 'Projects'}];
  return (
    /* The Paper allows the HeaderMiddle to obtain the light/dark theme */
    <Paper p='md' radius={0}>
        <HeaderMiddle links={LINKS} />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills/:skill" element={<SkillArticle />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills/:skill" element={<SkillArticle />} />
        </Routes>
    </Paper>
  );
}

export default RoutingContainer;