"use client";
import { Container, Image, Nav, NavLink } from "react-bootstrap";
import HomeBanner from "../home/home-banner";
import Link from "next/link";
import global from "../../globals";

export default function HomeAircraftSection() {
  return (
    <HomeBanner background="scroll-snap-end dark text-white footer">
      <Container className={`p-4 small`} fluid>
        <Container className="d-flex flex-column justify-content-center align-items-center ps-2 pe-2 flex-wrap">
          <Nav className="menu pb-3 d-flex justify-content-center align-items-center">
            {global.menu.map((item) => (
              <NavLink key={item.title} href={item.id}>
                {item.title}
              </NavLink>
            ))}
          </Nav>
          <Container className="small">
            <div className="image pb-1">
              <Image
                src="/images/logo-red.svg"
                width="140"
                height="50"
                alt="Cyberbush"
              />
            </div>
            <div className="contacts">
              <p>
                +971502567503 | ask@cyberbush.tech | linked.in/cyberbush
                <br />
                UAE, Dubai, Dubai Silicon Oasis, IFZA Properties
              </p>
            </div>
            <div className="terms small">
              <Link href="#">Privacy Policy</Link> |{" "}
              <Link href="#">Legal Information</Link> |{" "}
              <Link href="#">Terms of Use</Link>
              <br />
              Copyright © 2024 CYBERBUSH FZCO.
            </div>
          </Container>
        </Container>
      </Container>
    </HomeBanner>
  );
}
