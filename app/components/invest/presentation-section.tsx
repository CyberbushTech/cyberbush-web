"use client";
import { Container, Image } from "react-bootstrap";
import ScrollMore from "../common/scroll-more";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLocalizations } from "@/app/i18n/locale-context";

export default function InvestPresentationHero({
  presentationLink,
  videos,
}: Readonly<{
  presentationLink: string;
  videos: { title: string; link: string }[];
}>) {
  const dict = useLocalizations();

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
        <Container className="head-title-block mt-3 ms-4 me-4 text-white d-flex flex-column m-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="lead">{dict.presentationSection.leadText}</div>
            <h1 className="head">{dict.presentationSection.mainTitle}</h1>
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
            href={presentationLink}
            target="_new"
            scroll={true}
          >
            {dict.presentationSection.downloadButton}
          </Link>
          {videos.map((item) => (
            <Link
              key={item.title}
              className="d-flex action-button btn btn-outline-primary btn-lg m-2 flex-column"
              href={item.link}
              target="_blank"
            >
              {item.title}
            </Link>
          ))}
        </motion.div>
      </Container>
    </Container>
  );
}
