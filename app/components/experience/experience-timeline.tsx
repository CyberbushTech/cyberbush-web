"use client";
import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { motion, type Variants } from "framer-motion";
import { useLocalizations } from "@/app/i18n/locale-context";

type Point = { icon: string; text: string };
type Milestone = {
  year: string;
  title: string;
  description: string;
  points: Point[];
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ExperienceTimeline() {
  const dict = useLocalizations();
  const exp = dict.experience;
  const milestones: Milestone[] = exp.milestones;
  const [active, setActive] = useState(0);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            setActive(idx);
          }
        });
      },
      { threshold: 0.55 }
    );
    panelRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goTo = (i: number) =>
    panelRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="experience">
      <Container className="exp-intro text-white text-center">
        <div className="lead">{exp.lead}</div>
        <h1>{exp.title}</h1>
        <p>{exp.description}</p>
      </Container>

      <div className="exp-body">
        <div className="exp-rail">
          <Container className="exp-rail-inner">
            <div className="exp-rail-years">
              {milestones.map((m, i) => (
                <button
                  key={i}
                  type="button"
                  className={`exp-year-tick ${i === active ? "active" : ""}`}
                  onClick={() => goTo(i)}
                >
                  <span className="dot" />
                  <span className="label">{m.year}</span>
                </button>
              ))}
            </div>
          </Container>
        </div>

        <div className="exp-panels">
          {milestones.map((m, i) => (
            <section
              key={i}
              data-index={i}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              className="exp-panel scroll-snap-start"
              style={{ backgroundImage: `url(/images/experience/bg-${i}.jpg)` }}
            >
              <div className="exp-panel-scrim" aria-hidden="true" />
              <Container className="exp-panel-inner">
                <motion.div
                  className="exp-content text-white"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.4 }}
                >
                  <motion.div className="exp-year-big" variants={item}>
                    {m.year}
                  </motion.div>
                  <motion.h2 variants={item}>{m.title}</motion.h2>
                  <motion.p className="exp-lead" variants={item}>
                    {m.description}
                  </motion.p>
                  <ul className="exp-points">
                    {m.points.map((pt, j) => (
                      <motion.li key={j} className="exp-point" variants={item}>
                        <span
                          className={`icon bi-${pt.icon}`}
                          aria-hidden="true"
                        />
                        <span>{pt.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </Container>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
