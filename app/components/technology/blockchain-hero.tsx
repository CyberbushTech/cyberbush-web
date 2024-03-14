"use client";
import { Container } from "react-bootstrap";

export default function BlockchainTechnologyHero() {
  let items = [
    [
      { icon: "clock", title: "Speed" },
      { icon: "clock", title: "Flight Data" },
      { icon: "clock", title: "Payload" },
      { icon: "clock", title: "Engines State" },
      { icon: "clock", title: "Battery Charge" },
      { icon: "clock", title: "Passenger Data" },
      { icon: "clock", title: "Aircraft Route" },
      { icon: "clock", title: "Aircraft Part Tokens" },
      { icon: "clock", title: "Fueling" },
      { icon: "clock", title: "Space" },
    ],
    [
      { icon: "clock", title: "Weather Conditions" },
      { icon: "clock", title: "Route Points" },
      { icon: "clock", title: "Route Timing" },
      { icon: "clock", title: "Energy Consumption" },
      { icon: "clock", title: "Altitude" },
      { icon: "clock", title: "Time" },
      { icon: "clock", title: "Origin Port" },
      { icon: "clock", title: "Video Recording Hash" },
      { icon: "clock", title: "Costs" },
      { icon: "clock", title: "Smart Contract" },
      { icon: "clock", title: "Acceleration" },
    ],
    [
      { icon: "clock", title: "Performance" },
      { icon: "clock", title: "Communication Sessions" },
      { icon: "clock", title: "Propellers Runtime" },
      { icon: "clock", title: "Parts Certification" },
      { icon: "clock", title: "Payments" },
      { icon: "clock", title: "Charge Time" },
      { icon: "clock", title: "Measurements" },
      { icon: "clock", title: "Insite Temperature" },
      { icon: "clock", title: "Components Conditions" },
      { icon: "clock", title: "Operator" },
    ],
  ];
  return (
    <Container
      id="blockchain"
      className="blockchain-section d-flex flex-column justify-content-center align-items-center text-center p-4 pb-5 bg-dark"
      fluid
    >
      <div className="p-5 section-header text-center">
        <div className="lead">TOKENIZED</div>
        <h2>PUBLIC BLOCKCHAIN</h2>
        <p className="pb-3">
          Following a policy of truth and transparency, all telemetry from the
          beginning of flight testing and during all operations is stored in a
          public blockchain and can be examined easily.
        </p>
      </div>
      <Container className="blockchain-container pb-5 d-flex flex-row gap-3 justify-content-center align-items-center flex-wrap">
        <div className="blockchain-scroll-container">
          <div className="blockchain-scroll slow">
            <div>
              {items[0].map((item) => (
                <span key={item.title}>{item.title}</span>
              ))}
            </div>
            <div>
              {items[0].map((item) => (
                <span key={item.title}>{item.title}</span>
              ))}
            </div>
          </div>
          <div className="blockchain-scroll medium">
            <div>
              {items[1].map((item) => (
                <span key={item.title}>{item.title}</span>
              ))}
            </div>
            <div>
              {items[1].map((item) => (
                <span key={item.title}>{item.title}</span>
              ))}
            </div>
          </div>
          <div className="blockchain-scroll fast">
            <div>
              {items[2].map((item) => (
                <span key={item.title}>{item.title}</span>
              ))}
            </div>
            <div>
              {items[2].map((item) => (
                <span key={item.title}>{item.title}</span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}
