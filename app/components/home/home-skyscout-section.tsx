"use client";
import Container from "react-bootstrap/Container";
import HomeBanner from "./home-banner";
import { Button } from "react-bootstrap";
import { useLocalizations } from "@/app/i18n/locale-context";

export default function HomeSkyscoutSection() {
  const dict = useLocalizations();

  return (
    <HomeBanner background="secondary" className="text-white scroll-snap-start">
      <div className="position-relative">
        <Container className="vh-100 bg-secondary" fluid id="home-skyscout">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="dimmed-video-2 vh-100 vw-100 object-fit-cover"
          >
            <source
              src="https://n7h6rncncjn4ongd.public.blob.vercel-storage.com/video/clouds-W7INUedRDyrNA5l6zQujQTqBQzdOBL.mp4"
              type="video/mp4"
            />
          </video>
        </Container>
        <Container
          className="d-flex flex-column vh-100 wv-100 justify-content-center align-items-center text-center p-4 position-absolute top-0 left-0"
          fluid
        >
          <Container className="home-hero">
            <h1>{dict.homeSkyscoutSection.mainTitle}</h1>
            <p className="pb-3">{dict.homeSkyscoutSection.description}</p>
            <p className="lead">{dict.homeSkyscoutSection.leadText}</p>
            <div
              className={`d-flex flex-column gap-2 justify-content-center align-items-center`}
            >
              <Button
                className="action-button"
                variant="outline-primary"
                size="lg"
              >
                {dict.homeSkyscoutSection.buttonText}
              </Button>
            </div>
          </Container>
        </Container>
      </div>
    </HomeBanner>
  );
}
