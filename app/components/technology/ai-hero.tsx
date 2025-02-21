"use client";
import { Container } from "react-bootstrap";
import AIIcon from "./ai-icon";
import { getLocalizations } from "../../dictionaries/dictionaries";

export default function AITechnologyHero() {
  const dict = getLocalizations();

  return (
    <Container
      id="ai"
      className="ai-section d-flex flex-column justify-content-center align-items-center text-center text-white p-4 pb-5 bg-dark"
      fluid
    >
      <div className="p-5 section-header text-center">
        <div className="lead">{dict.aiHero.sectionLead}</div>
        <h2>{dict.aiHero.sectionTitle}</h2>
        <p className="pb-3">{dict.aiHero.description}</p>
      </div>
      <Container className="ai-container pb-5 d-flex flex-row gap-3 justify-content-center align-items-center flex-wrap">
        {dict.aiHero.features.map((feature: any, index: number) => (
          <AIIcon key={index} icon={feature.icon}>
            <strong>{feature.title}</strong>
            <br />
            {feature.description}
          </AIIcon>
        ))}
      </Container>
    </Container>
  );
}
