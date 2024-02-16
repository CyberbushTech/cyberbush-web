"use client";
import { Col, Figure, Image } from "react-bootstrap";
import Link from "next/link";

export default function HomeAircraftBanner({
  title,
  lead,
  image,
  description,
  link,
}: Readonly<{
  title: string;
  lead: string;
  image: string;
  description: string;
  link: string;
}>) {
  return (
    <Col md className="pb-5">
      <div className="lead">{lead}</div>
      <h4>{title}</h4>
      <Figure className="w-100 rounded">
        <Image
          className="w-100 object-fit-cover rounded"
          src={image}
          height="250rem"
          alt={title}
        />
      </Figure>
      <div className="description">{description}</div>
    </Col>
  );
}
