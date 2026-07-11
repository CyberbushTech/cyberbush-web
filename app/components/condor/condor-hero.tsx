"use client";
import { Container, Image } from "react-bootstrap";
import ScrollMore from "../common/scroll-more";
import { motion } from "framer-motion";
import { useLocalizations } from "@/app/i18n/locale-context";

export default function CondorHero() {
  const { condorHero } = useLocalizations();

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
              src="/images/condor-top.jpg"
              className="head-image object-fit-cover"
              loading="eager"
              alt={`Cyberbush ${condorHero.headTitle} eVTOL`}
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
            <div className="lead">{condorHero.leadText}</div>
            <h1 className="head">{condorHero.headTitle}</h1>
          </motion.div>
        </Container>
        <ScrollMore textColor="white">{condorHero.scrollMoreText}</ScrollMore>
      </Container>
    </Container>
  );
}
