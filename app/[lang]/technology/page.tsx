import { Container } from "react-bootstrap";
import type { Metadata, NextPage } from "next";
import { getDictionary } from "@/app/dictionaries/dictionaries";
import { isLocale } from "@/app/site-config";
import TopNavigation from "@/app/components/common/top-navigation";
import Footer from "@/app/components/common/footer";
import HomeSkyscoutSection from "@/app/components/home/home-skyscout-section";
import TechnologyHero from "@/app/components/technology/technology-hero";
import AITechnologyHero from "@/app/components/technology/ai-hero";
import SafetyTechnologyHero from "@/app/components/technology/safety-hero";
import ControlTechnologyHero from "@/app/components/technology/control-hero";
import BlockchainTechnologyHero from "@/app/components/technology/blockchain-hero";
import PortsTechnologyHero from "@/app/components/technology/ports-hero";
import AppsTechnologyHero from "@/app/components/technology/apps-hero";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(isLocale(lang) ? lang : "en");
  return { title: dict.seo.technology };
}

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
