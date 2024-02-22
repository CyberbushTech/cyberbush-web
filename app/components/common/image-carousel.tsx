"use client";

import { Carousel, Container, Image } from "react-bootstrap";

export default function ImageCarousel({
  className,
  images,
}: Readonly<{
  className?: string;
  images: string[];
}>) {
  return (
    <Carousel className="w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center pb-5">
      {images.map((image) => (
        <Carousel.Item key={image} className="bg-dark">
          <Container>
            <Image
              src={image}
              className="w-100 align-self-center"
              loading="eager"
              alt={"Cyberbush"}
            />
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
