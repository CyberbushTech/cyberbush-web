import { Container } from "react-bootstrap";
import type { Metadata, NextPage } from "next";
import TopNavigation from "@/app/components/common/top-navigation";
import Footer from "@/app/components/common/footer";
import ExperienceTimeline from "@/app/components/experience/experience-timeline";
import { getDictionary } from "@/app/dictionaries/dictionaries";
import { isLocale } from "@/app/site-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(isLocale(lang) ? lang : "en");
  return { title: dict.seo.experience };
}

const ExperiencePage: NextPage = () => {
  return (
    <div className="page-container">
      <Container className="page-experience bg-dark" fluid>
        <TopNavigation inverted={false} />
        <ExperienceTimeline />
        <Footer />
      </Container>
    </div>
  );
};
export default ExperiencePage;
