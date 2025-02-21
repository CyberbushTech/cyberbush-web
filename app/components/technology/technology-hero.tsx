"use client";
import { Container, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import ScrollMore from "../common/scroll-more";
import Link from "next/link";
import HomeBanner from "../home/home-banner";
import { getLocalizations } from "../../dictionaries/dictionaries";

export default function TechnologyHero() {
  const dict = getLocalizations();

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
            <h1 id="main-title-hero">{dict.technologyHero.mainTitle}</h1>
            <p className="pb-3">{dict.technologyHero.description}</p>
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
                  {dict.technologyHero.buttons.ai}
                </Link>
                <Link
                  className="action-button btn btn-outline-primary btn-lg"
                  href="#safety"
                  scroll={true}
                >
                  {dict.technologyHero.buttons.safety}
                </Link>
                <Link
                  className="action-button btn btn-outline-primary btn-lg"
                  href="#blockchain"
                  scroll={true}
                >
                  {dict.technologyHero.buttons.blockchain}
                </Link>
                <Link
                  className="action-button btn btn-outline-primary btn-lg"
                  href="#control"
                  scroll={true}
                >
                  {dict.technologyHero.buttons.control}
                </Link>
                <Link
                  className="action-button btn btn-outline-primary btn-lg"
                  href="#apps"
                  scroll={true}
                >
                  {dict.technologyHero.buttons.apps}
                </Link>
                <Link
                  className="action-button btn btn-outline-primary btn-lg"
                  href="#ports"
                  scroll={true}
                >
                  {dict.technologyHero.buttons.ports}
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <ScrollMore textColor="white">
          {dict.technologyHero.scrollMoreText}
        </ScrollMore>
      </Container>
    </HomeBanner>
  );
}
