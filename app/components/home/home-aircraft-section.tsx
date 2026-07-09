"use client";
import HomeBanner from "./home-banner";
import HomeAircraftBanner from "./home-aircraft-banner";
import { Container } from "react-bootstrap";
import { useLocalizations, useLocale, localePath } from "@/app/i18n/locale-context";

export default function HomeAircraftSection() {
  const dict = useLocalizations();
  const locale = useLocale();

  return (
    <HomeBanner
      background="secondary"
      className="home-aircrafts-banner text-white vh-100 scroll-snap-start"
    >
      <Container id="aircrafts" className="pt-4 pb-4">
        <Container
          className="d-flex flex-column vh-100 wv-100 align-items-center text-center pt-5"
          fluid
        >
          <Container className="home-hero pt-5">
            <h2>{dict.homeAircraftSection.mainTitle}</h2>
            <p className="pb-3">{dict.homeAircraftSection.description}</p>
            <div className="aircrafts d-flex flex-row gap-3 justify-content-center align-items-center">
              {dict.homeAircraftSection.aircrafts.map(
                (aircraft: any, index: number) => (
                  <HomeAircraftBanner
                    key={index}
                    title={aircraft.title}
                    lead={aircraft.lead}
                    link={localePath(aircraft.link, locale)}
                  />
                )
              )}
            </div>
          </Container>
        </Container>
      </Container>
    </HomeBanner>
  );
}
