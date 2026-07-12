"use client";
import { motion, type Variants } from "framer-motion";
import { useLocalizations } from "@/app/i18n/locale-context";

type Step = { icon: string; title: string; text: string };
type Feature = { icon: string; text: string };

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

// Decorative flight routes drawn over the city hero.
const ROUTES = [
  "M 60 430 C 320 300, 520 360, 760 210",
  "M 120 520 C 400 470, 700 500, 940 330",
  "M 40 300 C 260 210, 560 250, 900 120",
];

export default function AirTaxiContent() {
  const dict = useLocalizations();
  const at = dict.airtaxi;

  return (
    <>
      <section className="at-hero scroll-snap-start">
        <div className="at-hero-overlay" />
        <svg
          className="at-routes"
          viewBox="0 0 1000 560"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {ROUTES.map((d, i) => (
            <g key={i}>
              <motion.path
                d={d}
                fill="none"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth={2}
                strokeDasharray="2 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.4, delay: 0.4 + i * 0.5, ease: "easeInOut" }}
              />
            </g>
          ))}
        </svg>

        <motion.div
          className="at-hero-content text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="lead">{at.heroLead}</div>
          <h1>{at.heroTitle}</h1>
          <p>{at.heroDescription}</p>
        </motion.div>
      </section>

      <section className="at-steps scroll-snap-start bg-dark text-white">
        <div className="at-steps-content">
          <div className="section-header">
            <div className="lead">{at.stepsLead}</div>
            <h2>{at.stepsTitle}</h2>
          </div>

          <motion.ol
            className="at-steps-list"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            {at.steps.map((s: Step, i: number) => (
              <motion.li key={i} className="at-step" variants={item}>
                <div className="at-step-num">{i + 1}</div>
                <div className="at-step-body">
                  <span className={`icon bi-${s.icon}`} aria-hidden="true" />
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      <section className="at-port scroll-snap-start text-white">
        <div className="at-port-scrim" aria-hidden="true" />
        <motion.div
          className="at-port-content"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div className="lead" variants={item}>
            {at.portLead}
          </motion.div>
          <motion.h2 variants={item}>{at.portTitle}</motion.h2>
          <motion.p className="at-port-desc" variants={item}>
            {at.portDescription}
          </motion.p>
          <ul className="at-port-features">
            {at.portFeatures.map((f: Feature, i: number) => (
              <motion.li key={i} variants={item}>
                <span className={`icon bi-${f.icon}`} aria-hidden="true" />
                <span>{f.text}</span>
              </motion.li>
            ))}
          </ul>
          <motion.p className="at-port-note" variants={item}>
            {at.portNote}
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}
