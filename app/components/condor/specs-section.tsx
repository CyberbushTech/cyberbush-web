"use client";
import { Container } from "react-bootstrap";
import ParamBlock from "../common/param-block";

export default function CondorSpecsSection() {
  const items = [
    {
      text: "120 Kg of Payload, Single or Two Passenger",
      image: "condor-seats",
      icon: "people",
    },
    {
      text: "Full Flight Automation",
      image: "condor-top-part",
      icon: "robot",
    },
    {
      text: "Safety System",
      image: "beetle-parachute",
      icon: "life-preserver",
    },
  ];

  const items2 = [
    {
      text: "Effective traction motor",
      image: "condor-motor",
      icon: "slash-circle",
    },
    {
      text: "150 km Range Electric",
      image: "condor-bottom",
      icon: "stopwatch",
    },
    {
      text: "Vertical Takeoff and Landing",
      image: "condor-engines",
      icon: "h-circle",
    },
  ];
  return (
    <Container className="scroll-snap-start p-4 bg-white" fluid>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <div className="p-5 section-header text-center">
          <div className="lead">CONDOR ONE</div>
          <h2>KEY FEATURES</h2>
          <p className="pb-3">
            Fully AI-controlled electric passenger aircraft for comfortable
            medium-range flights. It can be used in urban, suburban and
            intercity areas.
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
