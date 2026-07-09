"use client";
import { Container } from "react-bootstrap";
import { NextPage } from "next";
import TopNavigation from "@/app/components/common/top-navigation";
import Footer from "@/app/components/common/footer";
import BeetleHero from "@/app/components/beetle/beetle-hero";
import BeetleSpecsSection from "@/app/components/beetle/specs-section";
import BeetleBlueprintSection from "@/app/components/beetle/blueprint-section";
import BeetleCarouselSection from "@/app/components/beetle/carousel-section";
import HomeSkyscoutSection from "@/app/components/home/home-skyscout-section";

const BeetlePage: NextPage = () => {
  return (
    <div className="page-container">
      <Container className="page-beetle bg-secondary" fluid>
        <TopNavigation inverted={false} />
        <BeetleHero />
        <BeetleSpecsSection />
        <BeetleBlueprintSection />
        <BeetleCarouselSection />
        <HomeSkyscoutSection />
        <Footer />
      </Container>
    </div>
  );
};
export default BeetlePage;
