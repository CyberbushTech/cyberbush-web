"use client";
import { Container, Image } from "react-bootstrap";

export default function FortunaHero() {
  return (
    <Container className="bg-dark hero scroll-snap-start" fluid>
      <Container
        className="d-flex flex-column vh-100 justify-content-center align-items-center text-center pb-5"
        fluid
      >
        <Container>
          <Image
            src="images/fortuna-right.jpg"
            className="head-image content-fit-cover"
            loading="eager"
            alt={"Cyberbush"}
          />
        </Container>
        <Container className="head-title-block mt-3 ms-4 me-4 text-white">
          <div className="lead">PREMIUM SPORT AI-CONTROLLED JET FLIGHT</div>
          <h1 className="head">FORTUNA</h1>
        </Container>
      </Container>
    </Container>
  );
}
