import { Container } from "react-bootstrap";
import TopNavigation from "../../components/common/top-navigation";
import Footer from "../../components/common/footer";
import InvestPresentationHero from "../../components/invest/presentation-section";
import { redirect } from "next/navigation";

// Only the UUIDs listed here are built as static pages; anything else 404s.
export const dynamicParams = false;

const config = [
    // Full
    {
      id: "1c108201-9605-4d02-937a-8c5daf21c831",
      presentation:
        "https://n7h6rncncjn4ongd.public.blob.vercel-storage.com/presentations/Cyberbush%20Pitch%20Deck%20v8-5-tVURza9z4Ec7AZjOLMaMKGIZxMmMW8.pdf",
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
        "https://n7h6rncncjn4ongd.public.blob.vercel-storage.com/presentations/Cyberbush%20Pitch%20Deck%20v8-2%20RU%20Flat-9steTDb0BzDZzLTDboqUtOtBe8YdZj.pdf",
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
    {
      id: "04a24334-f8b2-4053-aad9-3862682c217f",
      presentation:
        "https://n7h6rncncjn4ongd.public.blob.vercel-storage.com/presentations/Cyberbush%20Pitch%20Deck%20v8-5%20Flat-0GklQd5y8Pb1KFUx7eMEyVZoYeiITz.pdf",
      items: [
        {
          title: "Cyberbush Beetle in Dubai",
          link: "https://vimeo.com/cyberbush/dubai",
        },
        {
          title: "CD-600 Cargo Flight",
          link: "https://vimeo.com/cyberbush/cd-600-flight-1",
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
      // English no founders
      id: "43cdac07-95fa-4b7c-a21f-e5bcb271c3ac",
      presentation:
        "https://n7h6rncncjn4ongd.public.blob.vercel-storage.com/presentations/Cyberbush%20Pitch%20Deck%20v8-5%20Flat%20U-ZJISudKP7UZUKqksXF6qcWb7og3aWV.pdf",
      items: [
        {
          title: "Cyberbush Beetle in Dubai",
          link: "https://vimeo.com/cyberbush/dubai",
        },
        {
          title: "CD-600 Cargo Flight",
          link: "https://vimeo.com/cyberbush/cd-600-flight-1",
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
      // Russian no founders
      id: "604836e3-c85f-4a0e-b8a0-53cc3d4ab0ff",
      presentation:
        "https://n7h6rncncjn4ongd.public.blob.vercel-storage.com/presentations/Cyberbush%20Pitch%20Deck%20v8-2%20RU%20Flat%20U-qX4CNfSz9U32kvCz6mMM55LYnUNDdI.pdf",
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

export async function generateStaticParams() {
  return config.map((e) => ({ uuid: e.id }));
}

export default async function InvestPage({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const uuid = (await params).uuid;

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
