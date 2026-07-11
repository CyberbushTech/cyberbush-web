"use client";
import { Container, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import ControlIcon from "./control-icon";
import { useLocalizations } from "@/app/i18n/locale-context";

export default function HydrogenTechnologyHero() {
  const dict = useLocalizations();

  return (
    <Container
      id="hydrogen"
      className="hydrogen-section d-flex flex-column justify-content-center align-items-center text-center text-white p-4 pb-5"
      fluid
    >
      <div className="p-5 section-header text-center">
        <div className="lead">{dict.hydrogenHero.sectionLead}</div>
        <h2>{dict.hydrogenHero.sectionTitle}</h2>
        <p className="pb-3">{dict.hydrogenHero.description}</p>
      </div>

      <motion.div
        className="hydrogen-image-wrap"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", duration: 1.4, bounce: 0.15 }}
      >
        <Image
          src="/images/technology/hydrogen.jpg"
          alt={dict.hydrogenHero.imageAlt}
          className="hydrogen-image"
          fluid
        />
      </motion.div>

      <Container className="ai-container pt-4 pb-5 d-flex flex-row gap-3 justify-content-center align-items-center flex-wrap">
        {dict.hydrogenHero.features.map(
          (
            feature: { icon: string; title: string; description: string },
            index: number
          ) => (
            <ControlIcon key={index} icon={feature.icon}>
              <strong>{feature.title}</strong>
              <br />
              {feature.description}
            </ControlIcon>
          )
        )}
      </Container>
    </Container>
  );
}
