import { Container } from "react-bootstrap";
import { NextPage } from "next";
import TopNavigation from "@/app/components/common/top-navigation";
import Footer from "@/app/components/common/footer";
import CondorHero from "@/app/components/condor/condor-hero";
import CondorBlueprintSection from "@/app/components/condor/blueprint-section";
import CondorCarouselSection from "@/app/components/condor/carousel-section";
import CondorSpecsSection from "@/app/components/condor/specs-section";
import HomeSkyscoutSection from "@/app/components/home/home-skyscout-section";

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
