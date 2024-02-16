"use client";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function TopNavigation({
  inverted,
}: Readonly<{
  inverted: boolean;
}>) {
  const menu = [
    { title: "Fortuna", id: "fortuna" },
    { title: "Condor", id: "condor" },
    { title: "Beetle", id: "beetle" },
    { title: "Ecosystem", id: "ecosystem" },
    { title: "Company", id: "company" },
  ];
  return (
    <Navbar
      expand="lg"
      className={`${
        inverted ? "nav-regular" : "nav-inverted"
      } fixed-top top-navigation`}
    >
      <Container fluid>
        <Navbar.Brand href="#home" className="ms-4 me-5 mb-1">
          <Image
            src="images/logo.svg"
            width="170"
            height="20"
            alt={"Cyberbush"}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-2" />
        <Navbar.Collapse className="float-end">
          <div className="mobile-menu-container ms-auto">
            <div className="topline"></div>
            <Nav>
              {menu.map((item) => (
                <Nav.Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={`link me-2 small`}
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
