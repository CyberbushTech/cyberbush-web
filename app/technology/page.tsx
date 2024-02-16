"use client";
import { Container } from "react-bootstrap";
import { NextPage } from "next";
import TopNavigation from "../components/common/top-navigation";
import Footer from "../components/common/footer";
import HomeAircraftSection from "../components/home/home-aircraft-section";

const Home: NextPage = () => {
  return (
    <Container className="bg-secondary" fluid>
      <TopNavigation inverted={false} />
      <div className="menu-span"></div>
      <HomeAircraftSection />
      <Footer />
    </Container>
  );
};
export default Home;
