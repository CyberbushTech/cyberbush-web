"use client";
import { Container } from "react-bootstrap";
import { NextPage } from "next";
import TopNavigation from "../components/common/top-navigation";
import Footer from "../components/common/footer";
import FortunaHero from "../components/fortuna/fortuna-hero";
import FortunaSpecsSection from "../components/fortuna/specs-section";
import FortunaCarouselSection from "../components/fortuna/carousel-section";
import FortunaBlueprintSection from "../components/fortuna/blueprint-section";
import HomeSkyscoutSection from "../components/home/home-skyscout-section";

const FortunaPage: NextPage = () => {
  return (
    <Container className="page-fortuna bg-secondary" fluid>
      <TopNavigation inverted={false} />
      <FortunaHero />
      <FortunaSpecsSection />
      <FortunaBlueprintSection />
      <FortunaCarouselSection />
      <HomeSkyscoutSection />
      <Footer />
    </Container>
  );
};
export default FortunaPage;
