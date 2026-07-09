"use client";
import { Container } from "react-bootstrap";
import ParamBlock from "../common/param-block";
import ImageCarousel from "../common/image-carousel";

export default function FortunaCarouselSection() {
  const images = [
    "/images/fortuna/Fortuna-Perspective.png",
    "/images/fortuna/Fortuna-Top.png",
    "/images/fortuna/Fortuna-Back.png",
    "/images/fortuna/Fortuna-Front.png",
    "/images/fortuna/Fortuna-Perspective-Back.png",
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
