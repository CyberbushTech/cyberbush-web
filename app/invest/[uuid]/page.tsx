import { Container } from "react-bootstrap";
import { NextPage } from "next";
import TopNavigation from "../../components/common/top-navigation";
import Footer from "../../components/common/footer";
import InvestPresentationHero from "../../components/invest/presentation-section";
import { redirect } from "next/navigation";
import InvestVideosSection from "@/app/components/invest/videos-section";

export default async function InvestPage({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const uuid = (await params).uuid;
  const config = [
    // Full
    {
      id: "1c108201-9605-4d02-937a-8c5daf21c831",
      presentation: "/files/Cyberbush-Pitch-Deck-v8.pdf",
      items: [
        {
          text: "Cyberbush Beetle in Bahrain",
          image: "/images/thumbnails/1.jpg",
          link: "https://vimeo.com/cyberbush/bahrain",
        },
        {
          text: "BK-140",
          image: "/images/thumbnails/1.jpg",
          link: "https://vimeo.com/cyberbush/bk1409-en",
        },
        {
          text: "BK-300",
          image: "/images/thumbnails/1.jpg",
          link: "https://vimeo.com/cyberbush/bk-300",
        },
      ],
    },
  ];

  const foundConfig = config.find((e) => {
    return e.id == uuid;
  });

  if (foundConfig == null) {
    redirect("/");
  }
  return (
    <div className="page-container">
      <Container className="page-invest bg-secondary" fluid>
        <TopNavigation inverted={false} />
        <InvestPresentationHero link={foundConfig?.presentation ?? ""} />
        <Footer />
      </Container>
    </div>
  );
}
