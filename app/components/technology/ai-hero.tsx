"use client";
import { Container } from "react-bootstrap";
import AIIcon from "./ai-icon";

export default function AITechnologyHero() {
  return (
    <Container
      id="ai"
      className="ai-section d-flex flex-column justify-content-center align-items-center text-center text-white p-4 pb-5 bg-dark"
      fluid
    >
      <div className="p-5 section-header text-center">
        <div className="lead">SMART</div>
        <h2>ARTIFICIAL INTELLIGENCE</h2>
        <p className="pb-3">
          Our aircraft utilize both reliable and proven terrain navigation based
          on a predetermined route and the ability of the aircraft to make
          independent decisions using Artificial Intelligence.
        </p>
      </div>
      <Container className="ai-container pb-5 d-flex flex-row gap-3 justify-content-center align-items-center flex-wrap">
        <AIIcon icon="eye">
          <strong>COMPUTER VISION</strong>
          <br />6 HD cameras for spatial orientation
        </AIIcon>

        <AIIcon icon="badge-3d">
          <strong>2 LIDARs AND ALTIMETER</strong>
          <br />
          for distance and altitude measurements
        </AIIcon>

        <AIIcon icon="vr">
          <strong>GYROSCOPE AND ACCELEROMETER</strong>
          <br />
          to measure flight parameters
        </AIIcon>
        <AIIcon icon="robot">
          <strong>ON-BOARD COMPUTER WITH AI</strong>
          <br />
          to control the flight
        </AIIcon>

        <AIIcon icon="broadcast-pin">
          <strong>MCWILL AND 5G CELLULAR</strong>
          <br />
          permanent connection for good avalibility
        </AIIcon>

        <AIIcon icon="activity">
          <strong>REAL-TIME OPERATING SYSTEM</strong>
          <br />
          for maximum reliability and performance
        </AIIcon>
      </Container>
    </Container>
  );
}
