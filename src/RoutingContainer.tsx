import { Paper } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import HeaderMiddle from "./Components/HeaderMiddle";
import Ripple from "./Components/Ripple";
import SkillArticle from "./DynamicPages/SkillArticle";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Test from "./Pages/Test";


function RoutingContainer () {
    const LINKS = [{link: '/', label: 'Home'}, {link: '/about', label: 'About'}, {link: '/test', label: 'Test'}];
  return (
    /* The Paper allows the HeaderMiddle to obtain the light/dark theme */
    <Paper p='md' radius={0}>
        <HeaderMiddle links={LINKS} />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/test" element={<Test />} />
            <Route path="/skills/:skill" element={<SkillArticle />} />
        </Routes>
    </Paper>
  );
}

export default RoutingContainer;