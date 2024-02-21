"use client";

import { Carousel, Image } from "react-bootstrap";

export default function ImageCarousel({
  className,
  images,
}: Readonly<{
  className?: string;
  images: string[];
}>) {
  return (
    <Carousel>
      {images.map((image) => (
        <Carousel.Item key={image} className="bg-dark">
          <Image
            src={image}
            className="object-fit-scale vh-100 vw-100"
            loading="eager"
            alt={"Cyberbush"}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
