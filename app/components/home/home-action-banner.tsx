"use client";
import Container from "react-bootstrap/Container";
import HomeBanner from "./home-banner";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { RefObject } from "react";

export default function HomeActionBanner({
  innerRef,
}: Readonly<{
  innerRef: RefObject<HTMLDivElement>;
}>) {
  return (
    <HomeBanner background="dark text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
      >
        <Container className="vh-100" fluid ref={innerRef}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="dimmed-video vh-100 vw-100 object-fit-cover scroll-snap-start"
          >
            <source src="video/draft.mp4" type="video/mp4" />
          </video>
        </Container>
      </motion.div>
      <Container
        className="d-flex flex-column vh-100 justify-content-center align-items-center text-center position-absolute top-0 start-0 pb-4"
        fluid
      >
        <motion.div
          className="ms-4 me-4"
          initial={{ opacity: 0, scale: 2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1>Building The New Way of Moving</h1>
          <p className="pb-3">
            The first available line of fully autonomous AI-controlled
            aircrafts.
            <br />
            We are building a complete ecosystem from automated airports to
            mobile applications and flight control.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -10 }}
            transition={{ type: "spring", duration: 1, delay: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className={`d-flex flex-column gap-1 justify-content-center align-items-center`}
            >
              <Button
                className="action-button"
                variant="outline-primary"
                size="lg"
              >
                Find Out More
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </HomeBanner>
  );
}
