"use client";
import { Container, Image } from "react-bootstrap";

export default function CondorHero() {
  return (
    <Container className="bg-dark hero scroll-snap-start" fluid>
      <Container
        className="d-flex flex-column vh-100 justify-content-center align-items-center text-center pb-5"
        fluid
      >
        <Container>
          <Image
            src="images/condor-top.jpg"
            className="head-image content-fit-cover"
            loading="eager"
            alt={"Cyberbush"}
          />
        </Container>
        <Container className="head-title-block mt-5 ms-4 me-4 text-white">
          <div className="lead">PASSENGER AI-CONTROLLED CONVERTIPLANE</div>
          <h1 className="head">CONDOR ONE</h1>
        </Container>
      </Container>
    </Container>
  );
}
