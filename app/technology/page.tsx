"use client";
import { Container } from "react-bootstrap";
import { NextPage } from "next";
import TopNavigation from "../components/common/top-navigation";
import Footer from "../components/common/footer";
import HomeSkyscoutSection from "../components/home/home-skyscout-section";
import TechnologyHero from "../components/technology/technology-hero";
import AITechnologyHero from "../components/technology/ai-hero";
import SafetyTechnologyHero from "../components/technology/safety-hero";
import ControlTechnologyHero from "../components/technology/control-hero";
import BlockchainTechnologyHero from "../components/technology/blockchain-hero";
import PortsTechnologyHero from "../components/technology/ports-hero";
import AppsTechnologyHero from "../components/technology/apps-hero";

const TechnologyPage: NextPage = () => {
  return (
    <div className="page-container">
      <Container className="page-technology bg-secondary" fluid>
        <TopNavigation inverted={false} />
        <TechnologyHero />
        <AITechnologyHero />
        <SafetyTechnologyHero />
        <ControlTechnologyHero />
        <BlockchainTechnologyHero />
        <AppsTechnologyHero />
        <PortsTechnologyHero />
        <HomeSkyscoutSection />
        <Footer />
      </Container>
    </div>
  );
};
export default TechnologyPage;
