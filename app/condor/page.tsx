import { Container } from "react-bootstrap";
import { NextPage } from "next";
import TopNavigation from "../components/common/top-navigation";
import Footer from "../components/common/footer";
import CondorHero from "../components/condor/condor-hero";
import CondorBlueprintSection from "../components/condor/blueprint-section";
import CondorCarouselSection from "../components/condor/carousel-section";
import CondorSpecsSection from "../components/condor/specs-section";
import HomeSkyscoutSection from "../components/home/home-skyscout-section";

const CondorPage: NextPage = () => {
  return (
    <div className="page-container">
      <Container className="page-condor bg-secondary" fluid>
        <TopNavigation inverted={false} />
        <CondorHero />
        <CondorSpecsSection />
        <CondorBlueprintSection />
        <CondorCarouselSection />
        <HomeSkyscoutSection />
        <Footer />
      </Container>
    </div>
  );
};
export default CondorPage;
