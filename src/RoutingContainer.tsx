import { useEffect, useLayoutEffect } from "react";
import { Paper } from "@mantine/core";
import { Route, Routes, useLocation } from "react-router-dom";
import HeaderMiddle from "./Components/HeaderMiddle";
import SkillArticle from "./DynamicPages/SkillArticle";
import { primaryNavLinks } from "./Data/siteConfig";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) {
      return undefined;
    }

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    const resetWindowScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetWindowScroll();
    const frame = window.requestAnimationFrame(resetWindowScroll);
    const timeout = window.setTimeout(resetWindowScroll, 0);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [location.pathname]);

  return null;
}

function RoutingContainer() {
  return (
    <Paper p="md" radius={0}>
      <ScrollToTopOnRouteChange />
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