"use client";

import { motion } from "framer-motion";
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
      <motion.div
        className="ms-4 me-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
        exit={{ opacity: 0 }}
      >
        <div>{children}</div>
        <div className={`icon bi-arrow-down`}></div>
      </motion.div>
    </Container>
  );
}
