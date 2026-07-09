"use client";
import { Container } from "react-bootstrap";
import PortIcon from "./port-icon";
import { useLocalizations } from "@/app/i18n/locale-context";

export default function PortsTechnologyHero() {
  const dict = useLocalizations();

  return (
    <Container
      id="ports"
      className="ports-section d-flex flex-column justify-content-between align-items-center text-center pt-4 bg-dark"
      fluid
    >
      <div className="p-5 section-header text-center">
        <div className="lead">{dict.portsHero.sectionLead}</div>
        <h2>{dict.portsHero.sectionTitle}</h2>
        <p className="pb-3">{dict.portsHero.description}</p>
      </div>
      <Container className="ports-container text-white" fluid>
        <Container className="ports-info-container d-flex flex-row gap-3 justify-content-center align-items-center flex-wrap">
          {dict.portsHero.features.map((feature: any, index: number) => (
            <PortIcon key={index} icon={feature.icon}>
              {feature.text}
            </PortIcon>
          ))}
        </Container>
      </Container>
    </Container>
  );
}
