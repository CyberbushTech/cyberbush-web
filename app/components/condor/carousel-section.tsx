"use client";
import { Container } from "react-bootstrap";
import ImageCarousel from "../common/image-carousel";

export default function CondorCarouselSection() {
  const images = [
    "/images/condor/Condor-Perspective-Back.png",
    "/images/condor/Condor-Right.png",
    "/images/condor/Condor-Back.png",
    "/images/condor/Condor-Front.png",
  ];

  return (
    <Container
      className="scroll-snap-start vw-100 vh-100 bg-dark d-flex flex-column justify-content-center align-items-center text-center pb-5"
      fluid
    >
      <ImageCarousel images={images} />
    </Container>
  );
}
