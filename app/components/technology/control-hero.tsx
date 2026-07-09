"use client";
import { Container } from "react-bootstrap";
import ControlIcon from "./control-icon";
import { useLocalizations } from "@/app/i18n/locale-context";

export default function ControlTechnologyHero() {
  const dict = useLocalizations();

  return (
    <Container
      id="control"
      className="control-section d-flex flex-column justify-content-center align-items-center text-center text-white p-4 pb-5 bg-secondary"
      fluid
    >
      <div className="p-5 section-header text-center">
        <div className="lead">{dict.controlHero.sectionLead}</div>
        <h2>{dict.controlHero.sectionTitle}</h2>
        <p className="pb-3">{dict.controlHero.description}</p>
      </div>
      <Container className="ai-container pb-5 d-flex flex-row gap-3 justify-content-center align-items-center flex-wrap">
        {dict.controlHero.features.map((feature: any, index: number) => (
          <ControlIcon key={index} icon={feature.icon}>
            <strong>{feature.title}</strong>
            <br />
            {feature.description}
          </ControlIcon>
        ))}
      </Container>
    </Container>
  );
}
