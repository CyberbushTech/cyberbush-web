"use client";
import { Container } from "react-bootstrap";
import { NextPage } from "next";
import TopNavigation from "./components/common/top-navigation";
import HomeActionBanner from "./components/home/home-action-banner";
import HomeAircraftSection from "./components/home/home-aircraft-section";
import HomeInfraSection from "./components/home/home-infra-section";
import HomeSkyscoutSection from "./components/home/home-skyscout-section";
import { delay, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Footer from "./components/common/footer";

const Home: NextPage = () => {
  const actionBannerRef = useRef<HTMLDivElement>(null);
  const isActionBannerInView = useInView(actionBannerRef, {
    amount: "all",
  });
  useEffect(() => {
    if (isActionBannerInView) {
      delay((overshoot) => {
        console.log(isActionBannerInView);
        actionBannerRef.current?.scrollBy({ top: 100 });
      }, 300);
    }
  }, [isActionBannerInView]);

  return (
    <Container className="bg-secondary" fluid>
      <TopNavigation inverted={isActionBannerInView} />
      <HomeActionBanner innerRef={actionBannerRef} />
      <HomeAircraftSection />
      <HomeInfraSection />
      <HomeSkyscoutSection />
      <Footer />
    </Container>
  );
};
export default Home;
