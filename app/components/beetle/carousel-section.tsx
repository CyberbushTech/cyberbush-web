"use client";
import { Container } from "react-bootstrap";
import ImageCarousel from "../common/image-carousel";

export default function BeetleCarouselSection() {
  const images = [
    "images/beetle/Beetle-Perspective.png",
    "images/beetle/Beetle-Top.png",
    "images/beetle/Beetle-Back.png",
    "images/beetle/Beetle-Front.png",
    "images/beetle/Beetle-Perspective-Back.png",
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
