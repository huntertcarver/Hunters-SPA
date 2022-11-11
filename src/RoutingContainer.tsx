import { Paper } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import HeaderMiddle from "./Components/HeaderMiddle";
import About from "./Pages/About";
import Home from "./Pages/Home";


function RoutingContainer () {
    const LINKS = [{link: '/', label: 'Home'}, {link: '/about', label: 'About'}, {link: '/cv', label: 'CV'}];
  return (
    /* The Paper allows the HeaderMiddle to obtain the light/dark theme */
    <Paper p='md' radius={0}>
        <HeaderMiddle links={LINKS} />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </Paper>
  );
}

export default RoutingContainer;