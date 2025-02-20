import { Container } from "react-bootstrap";
import ParamBlock from "../common/param-block";
import { getLocalizations } from "@/app/dictionaries/dictionaries";

export default function BeetleSpecsSection() {
  const dict = getLocalizations();
  const items = [
    {
      text: dict.specsSection.items[0].text,
      image: "beetle-seats",
      icon: "people",
    },
    {
      text: dict.specsSection.items[1].text,
      image: "beetle-top-part",
      icon: "robot",
    },
    {
      text: dict.specsSection.items[2].text,
      image: "beetle-parachute",
      icon: "life-preserver",
    },
  ];

  const items2 = [
    {
      text: dict.specsSection.items2[0].text,
      image: "beetle-top",
      icon: "slash-circle",
    },
    {
      text: dict.specsSection.items2[1].text,
      image: "beetle-bottom",
      icon: "stopwatch",
    },
    {
      text: dict.specsSection.items2[2].text,
      image: "beetle-take-off",
      icon: "h-circle",
    },
  ];
  return (
    <Container className="scroll-snap-start p-4 bg-white" fluid>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <div className="p-5 section-header text-center">
          <div className="lead">{dict.specsSection.headerLead}</div>
          <h2>{dict.specsSection.headerTitle}</h2>
          <p className="pb-3">{dict.specsSection.description}</p>
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
