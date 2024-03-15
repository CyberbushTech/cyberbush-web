"use client";
import { Container } from "react-bootstrap";
import AIIcon from "./ai-icon";
import ControlIcon from "./control-icon";

export default function ControlTechnologyHero() {
  return (
    <Container
      id="control"
      className="control-section d-flex flex-column justify-content-center align-items-center text-center text-white p-4 pb-5 bg-secondary"
      fluid
    >
      <div className="p-5 section-header text-center">
        <div className="lead">CLEAR</div>
        <h2>FLIGHT CONTROL</h2>
        <p className="pb-3">
          We are developing a complete flight management system that is designed
          specifically for automated aircraft and takes into account their
          peculiarities. We ensure integration of drones into the city&apos;s
          transportation life.
        </p>
      </div>
      <Container className="ai-container pb-5 d-flex flex-row gap-3 justify-content-center align-items-center flex-wrap">
        <ControlIcon icon="file-bar-graph">
          <strong>AIRTRAIL</strong>
          <br />
          Universal protocol for realtime information exchange from aboard
          automated aircrafts.
        </ControlIcon>

        <ControlIcon icon="radar">
          <strong>REALTIME MONITORING</strong>
          <br />
          Real-time flight tracking of all aircraft, taking into account route
          and model parameters.
        </ControlIcon>

        <ControlIcon icon="sign-turn-right">
          <strong>SMART ROUTE PLANNING</strong>
          <br />
          Automatic terrain-aware planning of non-overlapping routes.
        </ControlIcon>

        <ControlIcon icon="database-check">
          <strong>FULL TELEMENTRY STORAGE</strong>
          <br />
          Storage of all flight telemetry and marshrouts for later analysis.
        </ControlIcon>

        <ControlIcon icon="phone">
          <strong>CLIENT APPS</strong>
          <br />
          Client applications for aero taxi and drone-assisted delivery in the
          city and coyntryside.
        </ControlIcon>

        <ControlIcon icon="megaphone">
          <strong>EMERGENCY PREDICTION</strong>
          <br />
          Predicting and solving emergency situations in real time, to maximize
          safety.
        </ControlIcon>
      </Container>
    </Container>
  );
}
