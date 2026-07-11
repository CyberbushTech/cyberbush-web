"use client";
import { Container, Image } from "react-bootstrap";
import ScrollMore from "../common/scroll-more";
import { motion } from "framer-motion";
import { useLocalizations } from "@/app/i18n/locale-context";

export default function FortunaHero() {
  const { fortunaHero } = useLocalizations();
  return (
    <Container
      id="fortuna-hero"
      className="bg-dark hero scroll-snap-start"
      fluid
    >
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
              src="/images/fortuna-right.jpg"
              className="head-image object-fit-cover"
              loading="eager"
              alt={`Cyberbush ${fortunaHero.headTitle}`}
            />
          </motion.div>
        </Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1 }}
          exit={{ opacity: 0 }}
        >
          <Container className="head-title-block pt-3 ps-4 pe-4 text-white">
            <div className="lead">{fortunaHero.leadText}</div>
            <h1 className="head">{fortunaHero.headTitle}</h1>
          </Container>
        </motion.div>
        <ScrollMore textColor="white">{fortunaHero.scrollMoreText}</ScrollMore>
      </Container>
    </Container>
  );
}
