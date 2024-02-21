"use client";

import { Container } from "react-bootstrap";

export default function ScrollMore({
  children,
  textColor,
}: Readonly<{
  children?: React.ReactNode;
  textColor: string;
}>) {
  return (
    <Container className={`p-5 text-${textColor} position-absolute bottom-0`}>
      <div>{children}</div>
      <div className={`icon bi-arrow-down`}></div>
    </Container>
  );
}
