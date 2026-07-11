import { Container } from "react-bootstrap";
import type { Metadata, NextPage } from "next";
import { getDictionary } from "@/app/dictionaries/dictionaries";
import { isLocale } from "@/app/site-config";
import TopNavigation from "@/app/components/common/top-navigation";
import Footer from "@/app/components/common/footer";
import BeetleHero from "@/app/components/beetle/beetle-hero";
import BeetleSpecsSection from "@/app/components/beetle/specs-section";
import BeetleBlueprintSection from "@/app/components/beetle/blueprint-section";
import BeetleCarouselSection from "@/app/components/beetle/carousel-section";
import HomeSkyscoutSection from "@/app/components/home/home-skyscout-section";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(isLocale(lang) ? lang : "en");
  return { title: dict.seo.beetle };
}

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
