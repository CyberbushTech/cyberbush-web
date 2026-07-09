"use client";
import { Container } from "react-bootstrap";
import ParamBlock from "../common/param-block";
import { useLocalizations } from "@/app/i18n/locale-context";

export default function FortunaSpecsSection() {
  const { fortunaSpecsSection } = useLocalizations();
  const items = [
    {
      text: fortunaSpecsSection.items[0].text,
      image: "fortuna-engines",
      icon: "slash-circle",
    },
    {
      text: fortunaSpecsSection.items[1].text,
      image: "fortuna-bottom",
      icon: "speedometer",
    },
    {
      text: fortunaSpecsSection.items[2].text,
      image: "fortuna-seats",
      icon: "people",
    },
  ];

  const items2 = [
    {
      text: fortunaSpecsSection.items2[0].text,
      image: "fortuna-controller",
      icon: "robot",
    },
    {
      text: fortunaSpecsSection.items2[1].text,
      image: "fortuna-top-part",
      icon: "stopwatch",
    },
    {
      text: fortunaSpecsSection.items2[2].text,
      image: "fortuna-take-off",
      icon: "h-circle",
    },
  ];
  return (
    <Container className="p-4 bg-white" fluid>
      <Container className="d-flex flex-column justify-content-center align-items-center scroll-snap-start">
        <div className="p-5 section-header text-center">
          <div className="lead">{fortunaSpecsSection.headerLead}</div>
          <h2>{fortunaSpecsSection.headerTitle}</h2>
          <p className="pb-3">{fortunaSpecsSection.description}</p>
        </div>
      </Container>
      <Container className="specs-row d-flex flex-row align-items-center text-center gap-5 pb-5">
        {items.map((item) => (
          <ParamBlock key={item.text} image={item.image} icon={item.icon}>
            {item.text}
          </ParamBlock>
        ))}
      </Container>
      <Container className="specs-row d-flex flex-row align-items-center text-center gap-5 pb-5">
        {items2.map((item) => (
          <ParamBlock key={item.text} image={item.image} icon={item.icon}>
            {item.text}
          </ParamBlock>
        ))}
      </Container>
    </Container>
  );
}
