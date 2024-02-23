"use client";
import { Container, Image } from "react-bootstrap";
import ScrollMore from "../common/scroll-more";
import { motion } from "framer-motion";

export default function CondorHero() {
  return (
    <Container className="scroll-snap-start bg-dark hero" fluid>
      <Container
        className="d-flex flex-column vh-100 justify-content-center align-items-center text-center pb-5"
        fluid
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 1 }}
            exit={{ opacity: 0 }}
          >
            <Image
              src="images/condor-top.jpg"
              className="head-image content-fit-cover"
              loading="eager"
              alt={"Cyberbush"}
            />
          </motion.div>
        </Container>
        <Container className="head-title-block mt-5 ms-4 me-4 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="lead">PASSENGER AI-CONTROLLED CONVERTIPLANE</div>
            <h1 className="head">CONDOR ONE</h1>
          </motion.div>
        </Container>
        <ScrollMore textColor="white">Scroll For More</ScrollMore>
      </Container>
    </Container>
  );
}
