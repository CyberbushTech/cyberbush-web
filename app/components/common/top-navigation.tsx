"use client";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import global from "../../globals";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sling as Hamburger } from "hamburger-react";
import { getLocalizations } from "@/app/dictionaries/dictionaries";
import { LOCALES, SITE_LOCALE, SITES } from "@/app/site-config";

export default function TopNavigation({
  inverted,
}: Readonly<{
  inverted: boolean;
}>) {
  const dict = getLocalizations();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const predefinedNavbarClass = inverted ? "nav-regular" : "nav-inverted";
  const navbarClass = isOpen ? "nav-inverted" : predefinedNavbarClass;
  return (
    <Navbar expand="lg" className={`${navbarClass} fixed-top top-navigation`}>
      <Container className="top-navigation-container">
        <Navbar.Brand href="/" className="ms-3 mb-1 brand">
          <Image
            src="/images/logo.svg"
            width="170"
            height="20"
            loading="eager"
            priority={false}
            alt={"Cyberbush"}
          />
        </Navbar.Brand>
        <div className="hamburger">
          <Hamburger onToggle={setIsOpen} color="white" size={26} />
        </div>
        <Navbar.Collapse className={`float-end ${isOpen ? "show" : ""}`}>
          <div className="mobile-menu-container ms-auto">
            <Nav>
              {dict.menu.map((item: { title: string; id: string }) => (
                <Nav.Link
                  key={item.id}
                  id={item.id}
                  href={`/${item.id}`}
                  className={`link me-2`}
                >
                  {item.title}
                </Nav.Link>
              ))}
            </Nav>
            <div className="lang-switch">
              {LOCALES.map((loc) =>
                loc === SITE_LOCALE ? (
                  <span key={loc} className="lang-item lang-current">
                    {SITES[loc].label}
                  </span>
                ) : (
                  <a
                    key={loc}
                    className="lang-item lang-link"
                    href={`${SITES[loc].origin}${pathname}`}
                  >
                    {SITES[loc].label}
                  </a>
                )
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
