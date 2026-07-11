"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLocalizations } from "@/app/i18n/locale-context";

type Milestone = { year: string; title: string; description: string };

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
      <div className="exp-intro text-white text-center">
        <div className="lead">{exp.lead}</div>
        <h1>{exp.title}</h1>
        <p>{exp.description}</p>
      </div>

      <div className="exp-body">
        <div className="exp-rail" aria-hidden="true">
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
              <motion.div
                className="exp-content text-white"
                initial={{ opacity: 0, y: 42 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="exp-year-big">{m.year}</div>
                <h2>{m.title}</h2>
                <p>{m.description}</p>
              </motion.div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
