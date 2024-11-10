"use client";
import { Container } from "react-bootstrap";
import VideoBlock from "./video-block";

export default function InvestVideosSection({
  items,
}: Readonly<{
  items: {
    text: string;
    image: string;
    link: string;
  }[];
}>) {
  return (
    <Container className="scroll-snap-start p-4 bg-white" fluid>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <div className="p-5 section-header text-center">
          <div className="lead">ADDITIONAL VIDEOS</div>
          <h2>WATCH MORE</h2>
        </div>
      </Container>
      <Container className="specs-row d-flex flex-row align-items-center text-center gap-5 pb-5">
        {items.map((item) => (
          <VideoBlock key={item.text} image={item.image} link={item.link}>
            {item.text}
          </VideoBlock>
        ))}
      </Container>
    </Container>
  );
}
