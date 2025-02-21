"use client";
import { Container, Image, Row } from "react-bootstrap";
import AppIcon from "./app-icon";
import { getLocalizations } from "../../dictionaries/dictionaries";

export default function AppsTechnologyHero() {
  const dict = getLocalizations();

  return (
    <Container
      id="apps"
      className="apps-section d-flex flex-column justify-content-center align-items-center text-center text-white pt-4 ps-4 pe-4 bg-secondary"
      fluid
    >
      <div className="p-5 section-header text-center">
        <div className="lead">{dict.appsHero.sectionLead}</div>
        <h2>{dict.appsHero.sectionTitle}</h2>
        <p className="pb-3">{dict.appsHero.description}</p>
      </div>
      <Container className="apps-container">
        <div className="inner-container container d-flex flex-row justify-content-between align-items-start text-center text-white flex-wrap">
          <div className="d-flex flex-column gap-3 pb-3">
            {dict.appsHero.steps.map((step: any, index: number) => (
              <AppIcon key={index} icon={step.icon}>
                {step.text}
              </AppIcon>
            ))}
          </div>
          <div className="head-image flex-column align-items-center">
            <Image
              src="images/technology/app-alone.png"
              className="head-image content-fit-cover"
              loading="eager"
              alt={"Cyberbush"}
            />
          </div>
          <div className="d-flex flex-column gap-3 flex-wrap pb-3">
            {dict.appsHero.features.map((feature: any, index: number) => (
              <AppIcon key={index} icon={feature.icon} className="simple">
                <strong>{feature.title}</strong>
                <br />
                {feature.description}
              </AppIcon>
            ))}
          </div>
        </div>
      </Container>
    </Container>
  );
}
