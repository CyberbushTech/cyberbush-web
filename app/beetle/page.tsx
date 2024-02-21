"use client";
import { Container } from "react-bootstrap";
import { NextPage } from "next";
import TopNavigation from "../components/common/top-navigation";
import Footer from "../components/common/footer";
import BeetleHero from "../components/beetle/beetle-hero";
import BeetleSpecsSection from "../components/beetle/specs-section";
import BeetleBlueprintSection from "../components/beetle/blueprint-section";
import BeetleCarouselSection from "../components/beetle/carousel-section";

const BeetlePage: NextPage = () => {
  return (
    <Container className="page-beetle bg-secondary" fluid>
      <TopNavigation inverted={false} />
      <BeetleHero />
      <BeetleSpecsSection />
      <BeetleBlueprintSection />
      <BeetleCarouselSection />
      <Footer />
    </Container>
  );
};
export default BeetlePage;
