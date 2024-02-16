"use client";
import { Container } from "react-bootstrap";
import { NextPage } from "next";
import TopNavigation from "./components/common/top-navigation";
import HomeActionBanner from "./components/home/home-action-banner";
import HomeAircraftSection from "./components/home/home-aircraft-section";
import HomeInfraSection from "./components/home/home-infra-section";
import HomeSkyscoutSection from "./components/home/home-skyscout-section";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/common/footer";

const Home: NextPage = () => {
  const actionBannerRef = useRef<HTMLDivElement>(null);
  const [isActionBannerInView, setIsActionBannerInView] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsActionBannerInView(window.scrollY > window.innerHeight / 2);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActionBannerInView]);
  return (
    <Container className="bg-secondary" fluid>
      <TopNavigation inverted={!isActionBannerInView} />
      <HomeActionBanner innerRef={actionBannerRef} />
      <HomeAircraftSection />
      <HomeInfraSection />
      <HomeSkyscoutSection />
      <Footer />
    </Container>
  );
};
export default Home;
