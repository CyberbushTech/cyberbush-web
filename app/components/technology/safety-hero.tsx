"use client";
import { Container, Image } from "react-bootstrap";

export default function SafetyTechnologyHero() {
  return (
    <Container
      id="safety"
      className="safety-section d-flex flex-column justify-content-center align-items-center text-center text-white p-4 pb-5 bg-dark"
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
        <div className="safety-item monitoring">
          <div className="head-image"></div>
          <div className="title">
            <div className="heading">AI-SUPPORTED MONITORING AND CONTROL</div>
            <div className="description">
              Flight telemetry data realtime analysis and storage
            </div>
          </div>
        </div>

        <div className="safety-item escape">
          <div className="head-image"></div>
          <div className="title">
            <div className="heading">UNIQUE PASSENGER ESCAPING SYSTEM</div>
            <div className="description">
              Civil version of 5th generation jet fighter’s catapult seat
            </div>
          </div>
        </div>

        <div className="safety-item parachute">
          <div className="head-image"></div>
          <div className="title">
            <div className="heading">ALL-AIRCRAFT PARACHUTE SYSTEM</div>
            <div className="description">
              Soft landing of aircraft preserving safety on the ground
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}
