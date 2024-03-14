"use client";
import Container from "react-bootstrap/Container";
import HomeBanner from "./home-banner";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import ScrollMore from "../common/scroll-more";
import Link from "next/link";

export default function HomeActionBanner() {
  return (
    <HomeBanner background="dark text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
      >
        <Container className="vh-100" fluid>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="dimmed-video vh-100 vw-100 object-fit-cover scroll-snap-start"
          >
            <source
              src="https://n7h6rncncjn4ongd.public.blob.vercel-storage.com/video/draft-Ig2XAapGCUj2gqCAlQJYUarZubOZW9.mp4"
              type="video/mp4"
            />
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
          <h1 id="main-title-hero">BUILDING THE NEW WAY OF MOVING</h1>
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
              <Link
                className="action-button btn btn-outline-primary btn-lg"
                href="#aircrafts"
                scroll={true}
              >
                Find Out More
              </Link>
            </div>
          </motion.div>
        </motion.div>
        <ScrollMore textColor="white">Scroll For More</ScrollMore>
      </Container>
    </HomeBanner>
  );
}
