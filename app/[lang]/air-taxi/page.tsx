import { Container } from "react-bootstrap";
import type { Metadata, NextPage } from "next";
import TopNavigation from "@/app/components/common/top-navigation";
import Footer from "@/app/components/common/footer";
import AirTaxiContent from "@/app/components/airtaxi/air-taxi-content";
import { getDictionary } from "@/app/dictionaries/dictionaries";
import { isLocale } from "@/app/site-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(isLocale(lang) ? lang : "en");
  return { title: dict.seo.airtaxi };
}

const AirTaxiPage: NextPage = () => {
  return (
    <div className="page-container">
      <Container className="page-airtaxi bg-dark" fluid>
        <TopNavigation inverted={false} />
        <AirTaxiContent />
        <Footer />
      </Container>
    </div>
  );
};
export default AirTaxiPage;
