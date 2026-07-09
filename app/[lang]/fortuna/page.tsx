"use client";
import { Container } from "react-bootstrap";
import { NextPage } from "next";
import TopNavigation from "@/app/components/common/top-navigation";
import Footer from "@/app/components/common/footer";
import FortunaHero from "@/app/components/fortuna/fortuna-hero";
import FortunaSpecsSection from "@/app/components/fortuna/specs-section";
import FortunaCarouselSection from "@/app/components/fortuna/carousel-section";
import FortunaBlueprintSection from "@/app/components/fortuna/blueprint-section";
import HomeSkyscoutSection from "@/app/components/home/home-skyscout-section";

const FortunaPage: NextPage = () => {
  return (
    <div className="page-container">
      <Container className="page-fortuna bg-secondary" fluid>
        <TopNavigation inverted={false} />
        <FortunaHero />
        <FortunaSpecsSection />
        <FortunaBlueprintSection />
        <FortunaCarouselSection />
        <HomeSkyscoutSection />
        <Footer />
      </Container>
    </div>
  );
};
export default FortunaPage;
