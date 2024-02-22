"use client";
import { Container } from "react-bootstrap";
import { NextPage } from "next";
import TopNavigation from "./components/common/top-navigation";
import HomeActionBanner from "./components/home/home-action-banner";
import HomeAircraftSection from "./components/home/home-aircraft-section";
import HomeSkyscoutSection from "./components/home/home-skyscout-section";
import { useEffect, useState } from "react";
import Footer from "./components/common/footer";

const Home: NextPage = () => {
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
    <div className="page-container scroll-snap-man">
      <Container className="bg-secondary" fluid>
        <TopNavigation inverted={!isActionBannerInView} />
        <HomeActionBanner />
        <HomeAircraftSection />
        <HomeSkyscoutSection />
        <Footer />
      </Container>
    </div>
  );
};
export default Home;
