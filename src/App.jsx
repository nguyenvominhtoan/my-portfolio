import { useEffect, useState } from "react";

import Loader from "./components/Loader";
import Cursor from "./components/layouts/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import IntroStatement from "./components/IntroStatement";
import ProcessSection from "./components/ProcessSection";
import WorkSection from "./components/WorkSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

import "./style/global.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Luôn bắt đầu website từ Hero
    window.history.scrollRestoration = "manual";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    const link = document.createElement("link");

    link.rel = "stylesheet";

    link.href =
      "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@300;400&display=swap";

    document.head.appendChild(link);

    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

  const finishLoading = () => {
    // Loading hoàn tất → đưa về Hero
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    setLoading(false);
  };

  return (
    <>
      {loading && <Loader onFinish={finishLoading} />}

      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.8s ease 0.2s",
          pointerEvents: loading ? "none" : "auto",
        }}
      >
        <Cursor />

        <Nav />

        <Hero />

        {/* <Marquee /> */}

        <IntroStatement />

        <ProcessSection />

        <WorkSection />

        <AboutSection />

        <ContactSection />

        <Footer />
      </div>
    </>
  );
}
