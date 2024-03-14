"use client";
import { Container, Image } from "react-bootstrap";

export default function SafetyTechnologyHero() {
  return (
    <Container
      id="safety"
      className="safety-section d-flex flex-column justify-content-center align-items-center text-center p-4 pb-5 bg-white"
      fluid
    >
      <div className="p-5 section-header text-center">
        <div className="lead">TRUSTFUL</div>
        <h2>SAFETY FEATURES</h2>
        <p className="pb-3">
          The Artificial intelligence dramatically reduces the chance of
          emergency situations, but the safety is most important for us.
        </p>
      </div>
      <Container className="ai-container pb-5 d-flex flex-row gap-3 justify-content-center align-items-center flex-wrap">
        <div className="safety-item monitoring text-white">
          <div className="head-image"></div>
          <div className="title">
            <div className="heading">AI-SUPPORTED MONITORING AND CONTROL</div>
            <div className="description">
              Flight telemetry data realtime analysis, storage and transmission
              via permenent McWill connection
            </div>
          </div>
        </div>

        <div className="safety-item escape text-white">
          <div className="head-image"></div>
          <div className="title">
            <div className="heading">UNIQUE PASSENGER ESCAPING SYSTEM</div>
            <div className="description">
              Civil version of 5th gen jet fighter’s catapult seat saving
              passengers in emergency cases
            </div>
          </div>
        </div>

        <div className="safety-item parachute text-white">
          <div className="head-image"></div>
          <div className="title">
            <div className="heading">ALL-AIRCRAFT PARACHUTE SYSTEM</div>
            <div className="description">
              Soft landing of aircraft preserving safety for passengers and
              ground infrastructure
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}
