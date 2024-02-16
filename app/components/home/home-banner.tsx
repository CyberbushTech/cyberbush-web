"use client";
import Container from "react-bootstrap/Container";
import { Color } from "react-bootstrap/esm/types";

export default function HomeBanner({
  children,
  background,
  className,
}: Readonly<{
  children?: React.ReactNode;
  background: Color;
  className?: string;
}>) {
  return (
    <Container
      className={`bg-${background} ${className ? className : ""}`}
      fluid
    >
      {children}
    </Container>
  );
}
