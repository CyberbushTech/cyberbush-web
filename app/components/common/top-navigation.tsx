"use client";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import global from "../../globals";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

export default function TopNavigation({
  inverted,
}: Readonly<{
  inverted: boolean;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  var predefinedNavbarClass = inverted ? "nav-regular" : "nav-inverted";
  var navbarClass = isOpen ? "nav-inverted" : predefinedNavbarClass;
  return (
    <Navbar expand="lg" className={`${navbarClass} fixed-top top-navigation`}>
      <Container className="top-navigation-container">
        <Navbar.Brand href="/" className="ms-3 mb-1 brand">
          <Image
            src="/images/logo.svg"
            width="170"
            height="20"
            loading="eager"
            alt={"Cyberbush"}
          />
        </Navbar.Brand>
        <div className="hamburger">
          <Hamburger onToggle={setIsOpen} color="white" size={26} />
        </div>
        <Navbar.Collapse className={`float-end ${isOpen ? "show" : ""}`}>
          <div className="mobile-menu-container ms-auto">
            <Nav>
              {global.menu.map((item) => (
                <Nav.Link
                  key={item.id}
                  id={item.id}
                  href={item.id}
                  className={`link me-2`}
                >
                  {item.title}
                </Nav.Link>
              ))}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
