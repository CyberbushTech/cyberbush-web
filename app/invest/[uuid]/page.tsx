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
      presentation:
        "https://drive.google.com/file/d/1rSO2esbxo-dzZwpj5WahugcsODZLljtH/view?usp=share_link",
      items: [
        {
          title: "Presentation Video",
          link: "https://vimeo.com/cyberbush/presentation-10-2024",
        },
        {
          title: "Cyberbush Beetle in Dubai",
          link: "https://vimeo.com/cyberbush/dubai",
        },
        {
          title: "BK-140 Video",
          link: "https://vimeo.com/cyberbush/bk140",
        },
        {
          title: "BK-300 Video",
          link: "https://vimeo.com/cyberbush/bk-300-en",
        },
      ],
    },
    {
      id: "9845ec69-23f4-4ee3-9253-47508006f98d",
      presentation:
        "https://drive.google.com/file/d/1rSO2esbxo-dzZwpj5WahugcsODZLljtH/view?usp=share_link",
      items: [
        {
          title: "Презентационное Видео",
          link: "https://vimeo.com/cyberbush/presentation-10-2024",
        },
        {
          title: "Cyberbush Beetle в Дубае",
          link: "https://vimeo.com/cyberbush/dubai",
        },
        {
          title: "БК-140 Видео",
          link: "https://vimeo.com/cyberbush/bk-140-ru",
        },
        {
          title: "БК-300 Видео",
          link: "https://vimeo.com/cyberbush/bk-300-ru",
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
        <InvestPresentationHero
          presentationLink={foundConfig?.presentation ?? ""}
          videos={foundConfig.items}
        />
        <Footer />
      </Container>
    </div>
  );
}
