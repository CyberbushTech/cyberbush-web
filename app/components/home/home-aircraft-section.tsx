"use client";
import HomeBanner from "./home-banner";
import HomeAircraftBanner from "./home-aircraft-banner";
import { Container } from "react-bootstrap";

export default function HomeAircraftSection() {
  return (
    <HomeBanner
      background="secondary"
      className="home-aircrafts-banner text-white vh-100 scroll-snap-start"
    >
      <Container className="pt-4 pb-4">
        <Container
          className="d-flex flex-column vh-100 wv-100 align-items-center text-center pt-5"
          fluid
        >
          <Container className="home-hero pt-5">
            <h2>Terrific Flying Machines</h2>
            <p className="pb-3">
              Our goal is a transportation revolution on the cusp of a new
              technological era, creating an entirely new transportation
              industry. Full range of AI-controlled aircrafts for in-city
              use-cases.
            </p>
            <div className="aircrafts d-flex flex-row gap-3 justify-content-center align-items-center">
              <HomeAircraftBanner
                title="Fortuna"
                lead="Premium Jet Flight"
                link="/fortuna"
              />
              <HomeAircraftBanner
                title="Beetle One"
                lead="Passenger Multicopter"
                link="/beetle"
              />
              <HomeAircraftBanner
                title="Condor One"
                lead="Passenger Convertiplane"
                link="/condor"
              />
            </div>
          </Container>
        </Container>
      </Container>
    </HomeBanner>
  );
}
