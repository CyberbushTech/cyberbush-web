"use client";
import { Container, Image, Nav, NavLink } from "react-bootstrap";
import HomeBanner from "../home/home-banner";
import Link from "next/link";
import { getLocalizations } from "../../dictionaries/dictionaries";

export default function HomeAircraftSection() {
  const dict = getLocalizations();

  return (
    <HomeBanner background="scroll-snap-end dark text-white footer">
      <Container className={`p-4 small`} fluid>
        <Container className="d-flex flex-column justify-content-center align-items-center ps-2 pe-2 flex-wrap">
          <Nav className="menu pb-3 d-flex justify-content-center align-items-center">
            {dict.menu.map((item: { title: string; id: string }) => (
              <NavLink key={item.title} href={`/${item.id}`}>
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
                {dict.footer.contacts.phone} | {dict.footer.contacts.email} |{" "}
                {dict.footer.contacts.linkedin}
                <br />
                {dict.footer.contacts.address}
              </p>
            </div>
            <div className="terms small">
              <Link href="#">{dict.footer.terms.privacyPolicy}</Link> |{" "}
              <Link href="#">{dict.footer.terms.legalInformation}</Link> |{" "}
              <Link href="#">{dict.footer.terms.termsOfUse}</Link>
              <br />
              {dict.footer.copyright}
            </div>
          </Container>
        </Container>
      </Container>
    </HomeBanner>
  );
}
