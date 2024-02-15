import Container from "react-bootstrap/Container";
import styles from "./styles.module.scss";
import { Color } from "react-bootstrap/esm/types";

export default function HomeBlockHeader({
  title,
  description,
}: Readonly<{
  title: string;
  description: string;
}>) {
  return (
    <div className="home-section-header text-start">
      <h2>{title}</h2>
      <p className="pb-3">{description}</p>
    </div>
  );
}
