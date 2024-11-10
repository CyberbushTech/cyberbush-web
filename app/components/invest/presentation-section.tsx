"use client";
import { Container, Image } from "react-bootstrap";
import ScrollMore from "../common/scroll-more";
import { motion } from "framer-motion";
import Link from "next/link";

export default function InvestPresentationHero({
  link,
  videoLink,
}: Readonly<{
  link: string;
  videoLink: string;
}>) {
  return (
    <Container
      className="invest-section scroll-snap-start bg-dark hero scroll-snap-start"
      fluid
    >
      <Container
        className="d-flex flex-column vh-100 justify-content-center align-items-center text-center"
        fluid
      >
        <Container></Container>
        <Container className="head-title-block mt-3 ms-4 me-4 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="lead">INVESTOR RELATIONSHIPS</div>
            <h1 className="head">GET READY!</h1>
          </motion.div>
        </Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1 }}
          exit={{ opacity: 0 }}
        >
          <Link
            className="action-button btn btn-outline-primary btn-lg m-2"
            href={link}
            target="_new"
            scroll={true}
          >
            Download Pitch Deck Presentation
          </Link>
          <Link
            className="action-button btn btn-outline-primary btn-lg m-2"
            href={videoLink}
            target="_new"
            scroll={true}
          >
            Watch The Video
          </Link>
        </motion.div>
        <ScrollMore textColor="white">Scroll For More</ScrollMore>
      </Container>
    </Container>
  );
}
