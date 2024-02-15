"use client";
import { Container, Row, Image, Col, Nav, NavLink } from "react-bootstrap";
import HomeBanner from "../../home/home-banner/home-banner";
import IconItem from "../icon-item/icon-item";

export default function HomeAircraftSection() {
  const produceMenu = [
    { title: "Fortuna", id: "fortuna" },
    { title: "Condor", id: "condor" },
    { title: "Beetle", id: "beetle" },
    { title: "Ecosystem", id: "ecosystem" },
  ];

  const companyMenu = [
    { title: "About Us", id: "fortuna" },
    { title: "Founders", id: "condor" },
    { title: "History", id: "beetle" },
    { title: "Legal", id: "ecosystem" },
  ];

  return (
    <HomeBanner background="dark text-white footer scroll-snap-end pt-3">
      <Container className={`p-4`} fluid>
        <Container className="ps-2 pe-2">
          <Row className="gx-5 ps-2 pe-2">
            <Col>
              <Row>
                <Col className="pb-4">
                  <h5>Products</h5>
                  <Nav className="menu">
                    {produceMenu.map((item) => (
                      <NavLink key={item.title} href={item.id}>
                        {item.title}
                      </NavLink>
                    ))}
                  </Nav>
                </Col>
                <Col className="pb-4">
                  <h5>Company</h5>
                  <Nav className="menu">
                    {companyMenu.map((item) => (
                      <NavLink key={item.title} href={item.id}>
                        {item.title}
                      </NavLink>
                    ))}
                  </Nav>
                </Col>
              </Row>
            </Col>
            <Col md>
              <Row>
                <Col>
                  <div className="image pb-3">
                    <Image
                      src="images/logo-red.svg"
                      width="200"
                      height="50"
                      alt="Cyberbush"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md>
                  <div className="icons pb-3">
                    <IconItem
                      className="icon"
                      icon="phone"
                      text="+971502567503"
                    />
                    <IconItem
                      className="icon"
                      icon="envelope"
                      text="ask@cyberbush.tech"
                    />
                    <IconItem
                      className="icon"
                      icon="linkedin"
                      text="linked.in/cyberbush"
                    />
                  </div>
                </Col>
                <Col md>
                  <div className="info pb-3">
                    <p>
                      UAE, Dubai, Dubai Silicon Oasis
                      <br />
                      IFZA Properties
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </HomeBanner>
  );
}
