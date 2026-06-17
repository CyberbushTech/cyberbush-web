import { Container } from "react-bootstrap";

export default function FullscreenLoader() {
  return (
    <Container
      className="fullscreen-loader vh-100 wv-100 position-absolute bg-dark"
      fluid
    ></Container>
  );
}
