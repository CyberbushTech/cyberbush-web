"use client";
import { Container, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import ScrollMore from "../common/scroll-more";
import Link from "next/link";
import HomeBanner from "../home/home-banner";

export default function TechnologyHero() {
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
              src="https://n7h6rncncjn4ongd.public.blob.vercel-storage.com/video/tech-TNLNgumLSUnOUNwvJxdpfDkFoPElXG.mp4"
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
          <div className="tech-hero-block">
            <h1 id="main-title-hero">CYBERBUSH IMPRESSIVE TECHNOLOGIES</h1>
            <p className="pb-3">
              More than 15 years of R&D have resulted in many proven
              technologies that make our flying vehicles different. We care not
              only about high performance, but also about infrastructure,
              control and safety.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -10 }}
              transition={{ type: "spring", duration: 1, delay: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className={`tech-hero-buttons d-flex flex-row gap-3 justify-content-center align-items-center flex-wrap`}
              >
                <Link
                  className="action-button btn btn-outline-primary btn-lg"
                  href="#ai"
                  scroll={true}
                >
                  AI
                </Link>
                <Link
                  className="action-button btn btn-outline-primary btn-lg"
                  href="#safety"
                  scroll={true}
                >
                  Safety
                </Link>
                <Link
                  className="action-button btn btn-outline-primary btn-lg"
                  href="#blockchain"
                  scroll={true}
                >
                  Blockchain
                </Link>
                <Link
                  className="action-button btn btn-outline-primary btn-lg"
                  href="#control"
                  scroll={true}
                >
                  Flight Control
                </Link>
                {/* <Link
                  className="action-button btn btn-outline-primary btn-lg"
                  href="#ports"
                  scroll={true}
                >
                  Vertiports
                </Link> */}
                <Link
                  className="action-button btn btn-outline-primary btn-lg"
                  href="#apps"
                  scroll={true}
                >
                  Apps
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <ScrollMore textColor="white">Scroll For More</ScrollMore>
      </Container>
    </HomeBanner>
  );
}
