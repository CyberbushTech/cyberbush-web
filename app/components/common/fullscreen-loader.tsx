"use client";
import { Container } from "react-bootstrap";

export default function FullscreenLoader() {
  const menu = [
    { title: "Fortuna", id: "fortuna" },
    { title: "Condor", id: "condor" },
    { title: "Beetle", id: "beetle" },
    { title: "Ecosystem", id: "ecosystem" },
    { title: "Company", id: "company" },
  ];

  return (
    <Container
      className="fullscreen-loader vh-100 wv-100 position-absolute bg-dark"
      fluid
    ></Container>
  );
}
