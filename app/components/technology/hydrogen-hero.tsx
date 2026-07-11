"use client";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import ControlIcon from "./control-icon";
import { useLocalizations } from "@/app/i18n/locale-context";

export default function HydrogenTechnologyHero() {
  const dict = useLocalizations();

  return (
    <Container
      id="hydrogen"
      className="hydrogen-section text-white"
      fluid
    >
      <motion.div
        className="hydrogen-bg"
        initial={{ opacity: 0, scale: 1.06 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />

      <div className="hydrogen-content d-flex flex-column justify-content-between align-items-center text-center">
        <div className="p-4 section-header text-center">
          <div className="lead">{dict.hydrogenHero.sectionLead}</div>
          <h2>{dict.hydrogenHero.sectionTitle}</h2>
          <p className="pb-3">{dict.hydrogenHero.description}</p>
        </div>

        <Container className="hydrogen-features d-flex flex-row gap-3 justify-content-center align-items-center flex-wrap">
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
      </div>
    </Container>
  );
}
