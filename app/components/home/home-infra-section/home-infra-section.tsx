"use client";
import HomeBanner from "../home-banner/home-banner";
import { Col, Container, Row } from "react-bootstrap";
import HomeBlockHeader from "../home-block-header/home-block-header";
import IconItem from "../../common/icon-item/icon-item";

export default function HomeInfraSection() {
  const portItems = [
    { text: "McWill Radio Point", icon: "broadcast-pin" },
    { text: "Charging or Hydrogen Fueling", icon: "fuel-pump" },
    { text: "Takeoff and Landing", icon: "airplane" },
    { text: "Optional Lounge Area", icon: "cup-straw  " },
    { text: "Fully Automated", icon: "robot" },
  ];
  const softwareItems = [
    { text: "AI-backed autopilot", icon: "robot" },
    { text: "Aircraft Managment Software", icon: "pin-map-fill" },
    { text: "Realtime Aircraft Health Monitoring", icon: "speedometer" },
    { text: "Blockchain-backed Telemetry Storage", icon: "currency-bitcoin" },
    { text: "Mobile App for Air Taxi Service", icon: "sign-turn-slight-right" },
  ];
  return (
    <HomeBanner background="white" className="home-infra-banner">
      <Container className={`ps-3 pe-3`} fluid>
        <Container className="ps-2 pe-2" fluid>
          <Row className="d-flex align-items-stretch">
            <Col md className="pt-4 ps-4 mb-3 column">
              <HomeBlockHeader
                title="The Beetle Port"
                description="Despite the fact that our airplanes do not require any special infrastructure, we develop vertiports for convenient takeoff, landing, charging and boarding.	"
              />
              <div className="features pb-4">
                {portItems.map((item) => (
                  <IconItem
                    className="item"
                    key={item.text}
                    text={item.text}
                    icon={item.icon}
                  />
                ))}
              </div>
            </Col>
            <Col md className="pt-4 ps-4 mb-3 column">
              <HomeBlockHeader
                title="Software and Operations"
                description="Ready-made solution for aircrafts operation, monitoring and control providing all necessary infrastructure and operational support for most use cases."
              />
              <div className="features pb-4">
                {softwareItems.map((item) => (
                  <IconItem
                    className="item"
                    key={item.text}
                    text={item.text}
                    icon={item.icon}
                  />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </HomeBanner>
  );
}
