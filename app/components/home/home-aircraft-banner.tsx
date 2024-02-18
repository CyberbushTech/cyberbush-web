"use client";
import { Col, Figure, Image } from "react-bootstrap";
import Link from "next/link";

export default function HomeAircraftBanner({
  title,
  lead,
  link,
}: Readonly<{
  title: string;
  lead: string;
  link: string;
}>) {
  return (
    <Link className="home-aircraft-block" href={link}>
      <div className="lead" style={{ whiteSpace: "nowrap" }}>
        {lead}
      </div>
      <h4 style={{ whiteSpace: "nowrap" }}>{title}</h4>
    </Link>
  );
}
