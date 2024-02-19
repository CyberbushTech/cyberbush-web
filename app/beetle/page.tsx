"use client";
import { Container } from "react-bootstrap";
import { NextPage } from "next";
import TopNavigation from "../components/common/top-navigation";
import Footer from "../components/common/footer";
import BeetleHero from "../components/beetle/beetle-hero";

const BeetlePage: NextPage = () => {
  return (
    <Container className="page-beetle bg-secondary" fluid>
      <TopNavigation inverted={false} />
      <BeetleHero />
      <Footer />
    </Container>
  );
};
export default BeetlePage;
