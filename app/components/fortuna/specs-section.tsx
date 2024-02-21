"use client";
import { Container } from "react-bootstrap";
import ParamBlock from "../common/param-block";

export default function FortunaSpecsSection() {
  const items = [
    {
      text: "8 Jet Engines with Thrust Vector Control",
      image: "engines",
      icon: "slash-circle",
    },
    { text: "750 Km/h Ground Speed", image: "bottom", icon: "speedometer" },
    {
      text: "120 Kg of Payload, Single Passenger",
      image: "seats",
      icon: "people",
    },
  ];

  const items2 = [
    {
      text: "AI Controlled with Manual Route Correction",
      image: "controller",
      icon: "robot",
    },
    {
      text: "300 km Range, 25 min of flight",
      image: "top-part",
      icon: "stopwatch",
    },
    {
      text: "Vertical Takeoff and Landing",
      image: "take-off",
      icon: "h-circle",
    },
  ];
  return (
    <Container className="p-4 bg-white" fluid>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <div className="p-5 section-header text-center">
          <div className="lead">UNIQUE FLYING VEHICLE</div>
          <h2>KEY FEATURES</h2>
          <p className="pb-3">
            The unique flying machine for transportation and entertainment.
            Controlled by AI, but will allow for prescriptive flight adjustments
            by the user providing more fun and impressions.
          </p>
        </div>
      </Container>
      <Container className="specs-row d-flex flex-row align-items-center text-center gap-5 pb-5">
        {items.map((item) => (
          <ParamBlock key={item.text} image={item.image} icon={item.icon}>
            {item.text}
          </ParamBlock>
        ))}
      </Container>
      <Container className="specs-row d-flex flex-row align-items-center text-center gap-5 pb-5">
        {items2.map((item) => (
          <ParamBlock key={item.text} image={item.image} icon={item.icon}>
            {item.text}
          </ParamBlock>
        ))}
      </Container>
    </Container>
  );
}
