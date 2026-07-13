"use client";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import global from "../../globals";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sling as Hamburger } from "hamburger-react";
import { useLocalizations, useLocale, localePath } from "@/app/i18n/locale-context";
import { LOCALES, LOCALE_LABELS } from "@/app/site-config";

type MenuItem = {
  title: string;
  id: string;
  children?: { title: string; id: string }[];
};

export default function TopNavigation({
  inverted,
}: Readonly<{
  inverted: boolean;
}>) {
  const dict = useLocalizations();
  const locale = useLocale();
  const pathname = usePathname();
  const restPath = pathname.replace(/^\/(en|ru)/, "") || "/";
  const [isOpen, setIsOpen] = useState(false);
  const predefinedNavbarClass = inverted ? "nav-regular" : "nav-inverted";
  const navbarClass = isOpen ? "nav-inverted" : predefinedNavbarClass;
  return (
    <Navbar expand="lg" className={`${navbarClass} fixed-top top-navigation`}>
      <Container className="top-navigation-container">
        <Navbar.Brand href={localePath("/", locale)} className="ms-3 mb-1 brand">
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
              {dict.menu.map((item: MenuItem) =>
                item.children ? (
                  <NavDropdown
                    key={item.id}
                    id={`nav-${item.id}`}
                    title={item.title}
                    className="link nav-group me-2"
                  >
                    {item.children.map((child) => (
                      <NavDropdown.Item
                        key={child.id}
                        href={localePath(`/${child.id}`, locale)}
                      >
                        {child.title}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                ) : (
                  <Nav.Link
                    key={item.id}
                    id={item.id}
                    href={localePath(`/${item.id}`, locale)}
                    className={`link me-2`}
                  >
                    {item.title}
                  </Nav.Link>
                )
              )}
            </Nav>
            <div className="lang-switch">
              {LOCALES.map((loc) =>
                loc === locale ? (
                  <span key={loc} className="lang-item lang-current">
                    {LOCALE_LABELS[loc]}
                  </span>
                ) : (
                  <a
                    key={loc}
                    className="lang-item lang-link"
                    href={`/${loc}${restPath === "/" ? "" : restPath}`}
                  >
                    {LOCALE_LABELS[loc]}
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
