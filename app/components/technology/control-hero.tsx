"use client";
import { Container } from "react-bootstrap";

export default function ControlTechnologyHero() {
  return (
    <Container
      id="control"
      className="safety-section d-flex flex-column justify-content-center align-items-center text-center text-white p-4 pb-5 bg-secondary"
      fluid
    >
      <div className="p-5 section-header text-center">
        <div className="lead">CLEAR</div>
        <h2>FLIGHT CONTROL</h2>
        <p className="pb-3">
          The Artificial intelligence dramatically reduces the chance of
          emergency situations, but the safety is most important for us.
        </p>
      </div>
      <Container className="ai-container pb-5 d-flex flex-row gap-3 justify-content-center align-items-center flex-wrap"></Container>
    </Container>
  );
}
