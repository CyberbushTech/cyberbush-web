"use client";
import { Container } from "react-bootstrap";
import PortIcon from "./port-icon";

export default function PortsTechnologyHero() {
  return (
    <Container
      id="ports"
      className="ports-section d-flex flex-column justify-content-between align-items-center text-center pt-4 bg-dark"
      fluid
    >
      <div className="p-5 section-header text-center">
        <div className="lead">FULL-FLEDGED</div>
        <h2>THE BEETLE PORTS</h2>
        <p className="pb-3">
          Despite the fact that our airplanes do not require any special
          infrastructure, we build mini-airports for convenient takeoff,
          landing, charging and boarding.
        </p>
      </div>
      <Container className="ports-container text-white" fluid>
        <Container className="ports-info-container d-flex flex-row gap-3 justify-content-center align-items-center flex-wrap">
          <PortIcon icon="broadcast-pin">McWill Radio Point</PortIcon>
          <PortIcon icon="lightning-charge">Charging or HPS Fueling</PortIcon>
          <PortIcon icon="airplane">Takeoff and Landing</PortIcon>
        </Container>
      </Container>
    </Container>
  );
}
