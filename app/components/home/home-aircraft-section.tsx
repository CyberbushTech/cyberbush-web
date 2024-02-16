"use client";
import HomeBanner from "./home-banner";
import HomeAircraftBanner from "./home-aircraft-banner";
import { Container, Row } from "react-bootstrap";
import HomeBlockHeader from "./home-block-header";

export default function HomeAircraftSection() {
  return (
    <HomeBanner background="white">
      <Container className="pt-4 pb-4">
        <Container>
          <HomeBlockHeader
            title="Terrific Flying Machines"
            description="We own the full cycle of development, testing and production of aircraft and related artificial intelligence technologies including engines, power compulsion and avionics."
          />
        </Container>
        <Container>
          <Row className="gx-5">
            <HomeAircraftBanner
              title="Fortuna"
              lead="Premium Jet Flight"
              image="images/home-fortuna.jpg"
              description="The unique flying jet-powered flying machine. Controlled by AI, but will allow for prescriptive flight adjustments."
              link="#home"
            />
            <HomeAircraftBanner
              title="Condor One"
              lead="Convertiplane"
              image="images/home-condor.jpg"
              description="Fully AI-controlled electric passenger aircraft for comfortable medium-range flights between city points or countryard."
              link="#home"
            />
            <HomeAircraftBanner
              title="Beetle One"
              lead="Multicopter"
              image="images/home-beetle.jpg"
              description="Fully AI-controlled electric passenger aircraft for comfortable short-range flights in the city or airports."
              link="#home"
            />
          </Row>
        </Container>
      </Container>
    </HomeBanner>
  );
}
