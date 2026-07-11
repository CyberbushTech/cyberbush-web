"use client";
import { Container, Image } from "react-bootstrap";
import ScrollMore from "../common/scroll-more";
import { motion } from "framer-motion";
import { useLocalizations } from "@/app/i18n/locale-context";

export default function BeetleHero() {
  const dict = useLocalizations();
  return (
    <Container
      className="scroll-snap-start bg-dark hero scroll-snap-start"
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
              src="/images/beetle-right.jpg"
              className="head-image object-fit-cover"
              loading="eager"
              alt={`Cyberbush ${dict.beetleHero.headTitle}`}
            />
          </motion.div>
        </Container>
        <Container className="head-title-block mt-3 ms-4 me-4 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="lead">{dict.beetleHero.leadText}</div>
            <h1 className="head">{dict.beetleHero.headTitle}</h1>
          </motion.div>
        </Container>
        <ScrollMore textColor="white">
          {dict.beetleHero.scrollMoreText}
        </ScrollMore>
      </Container>
    </Container>
  );
}
