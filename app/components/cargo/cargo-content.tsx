"use client";
import { Container } from "react-bootstrap";
import { motion, type Variants } from "framer-motion";
import { useLocalizations } from "@/app/i18n/locale-context";

type Spec = { icon: string; text: string };
type Drone = {
  image: string;
  cls: string;
  name: string;
  description: string;
  specs: Spec[];
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function CargoContent() {
  const dict = useLocalizations();
  const drones: Drone[] = dict.cargo.drones;

  return (
    <>
      {drones.map((d: Drone, i: number) => (
        <section key={i} className="cargo-slide scroll-snap-start">
          <div
            className="cargo-photo"
            style={{ backgroundImage: `url(/images/cargo/${d.image}.jpg)` }}
            aria-hidden="true"
          />
          <div className="cargo-scrim" aria-hidden="true" />
          <Container className="cargo-container">
            <motion.div
              className="cargo-content text-white"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div className="cls" variants={item}>
                {d.cls}
              </motion.div>
              <motion.h2 variants={item}>{d.name}</motion.h2>
              <motion.p className="cargo-desc" variants={item}>
                {d.description}
              </motion.p>
              <ul className="cargo-specs">
                {d.specs.map((s: Spec, j: number) => (
                  <motion.li key={j} variants={item}>
                    <span className={`icon bi-${s.icon}`} aria-hidden="true" />
                    <span>{s.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Container>
        </section>
      ))}
    </>
  );
}
