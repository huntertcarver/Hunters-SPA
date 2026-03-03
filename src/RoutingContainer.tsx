import { Paper } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import HeaderMiddle from "./Components/HeaderMiddle";
import SkillArticle from "./DynamicPages/SkillArticle";
import { primaryNavLinks } from "./Data/siteConfig";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

function RoutingContainer() {
  return (
    /* The Paper allows the HeaderMiddle to obtain the light/dark theme */
    <Paper p="md" radius={0}>
      <HeaderMiddle links={primaryNavLinks} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills/:skill" element={<SkillArticle />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Paper>
  );
}

export default RoutingContainer;