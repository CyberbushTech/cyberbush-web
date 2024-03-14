"use client";
import { Container, Image, Row } from "react-bootstrap";
import AppIcon from "../common/app-icon";

export default function AppsTechnologyHero() {
  return (
    <Container
      id="apps"
      className="apps-section d-flex flex-column justify-content-center align-items-center text-center text-white pt-4 ps-4 pe-4 bg-secondary"
      fluid
    >
      <div className="p-5 section-header text-center">
        <div className="lead">USER-FRIENDLY</div>
        <h2>AIR TAXI SERVICE</h2>
        <p className="pb-3">
          We&apos;re creating a convenient service for getting around town and
          between cities by air taxi. See how it can work. You can use an air
          taxi to fly between points that are inconvenient or event inaccessible
          for traditional transportation.
        </p>
      </div>
      <Container className="apps-container">
        <div className="inner-container container d-flex flex-row justify-content-between align-items-start text-center text-white flex-wrap">
          <div className="d-flex flex-column gap-3 pb-3">
            <AppIcon icon="1-circle-fill">
              Book your <strong>Condor</strong> or <strong>Beetle</strong> via
              mobile app, use elevator to reach the skyscraper’s roof-top Beetle
              Port.
            </AppIcon>
            <AppIcon icon="2-circle-fill">
              Fly to an available Beetle Port port in the nearest neighborhood,
              suburb or neighboring city.
            </AppIcon>
            <AppIcon icon="3-circle-fill">
              After landing at the end point of the route, leave the vehicle and
              take the elevator down to the city.
            </AppIcon>
          </div>
          <div className="head-image flex-column align-items-center">
            <Image
              src="images/technology/app-alone.png"
              className="head-image content-fit-cover"
              loading="eager"
              alt={"Cyberbush"}
            />
          </div>
          <div className="d-flex flex-column gap-3 flex-wrap pb-3">
            <AppIcon icon="info-circle-fill" className="simple">
              <strong>CYBERBUSH CONDOR ONE</strong>
              <br />
              Convertiplane is used in order to move between the cities or to
              far away locations.
            </AppIcon>

            <AppIcon icon="info-circle-fill" className="simple">
              <strong>CYBERBUSH BEETLE ONE</strong>
              <br />
              Multicopter is used in order to move between city points and
              airports.
            </AppIcon>

            <AppIcon icon="info-circle-fill" className="simple">
              <strong>CUBERBUSH FORTUNA</strong>
              <br />
              Jet flight is personal flying vehicle that can use custom build
              vertiport.
            </AppIcon>
          </div>
        </div>
      </Container>
    </Container>
  );
}
