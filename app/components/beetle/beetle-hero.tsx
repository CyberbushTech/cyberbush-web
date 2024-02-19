"use client";
import { Container, Image } from "react-bootstrap";

export default function BeetleHero() {
  return (
    <Container className="bg-dark hero scroll-snap-start" fluid>
      <Container
        className="d-flex flex-column vh-100 justify-content-center align-items-center text-center pb-5"
        fluid
      >
        <Container>
          <Image
            src="images/beetle-right.jpg"
            className="head-image content-fit-cover"
            loading="eager"
            alt={"Cyberbush"}
          />
        </Container>
        <Container className="head-title-block mt-3 ms-4 me-4 text-white">
          <div className="lead">PASSENGER AI-CONTROLLED MULTICOPTER</div>
          <h1 className="head">BEETLE ONE</h1>
        </Container>
      </Container>
    </Container>
  );
}
