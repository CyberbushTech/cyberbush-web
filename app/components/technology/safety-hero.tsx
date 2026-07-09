"use client";
import { Container, Image } from "react-bootstrap";
import { useLocalizations } from "@/app/i18n/locale-context";

export default function SafetyTechnologyHero() {
  const dict = useLocalizations();

  return (
    <Container
      id="safety"
      className="safety-section d-flex flex-column justify-content-center align-items-center text-center p-4 pb-5 bg-white"
      fluid
    >
      <div className="p-5 section-header text-center">
        <div className="lead">{dict.safetyHero.sectionLead}</div>
        <h2>{dict.safetyHero.sectionTitle}</h2>
        <p className="pb-3">{dict.safetyHero.description}</p>
      </div>
      <Container className="ai-container pb-5 d-flex flex-row gap-3 justify-content-center align-items-center flex-wrap">
        {dict.safetyHero.features.map((feature: any, index: number) => (
          <div
            key={index}
            className={`safety-item ${feature.class} text-white`}
          >
            <div className="head-image"></div>
            <div className="title">
              <div className="heading">{feature.heading}</div>
              <div className="description">{feature.description}</div>
            </div>
          </div>
        ))}
      </Container>
    </Container>
  );
}
