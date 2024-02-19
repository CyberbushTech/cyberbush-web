"use client";
import { Container } from "react-bootstrap";
import { NextPage } from "next";
import TopNavigation from "../components/common/top-navigation";
import Footer from "../components/common/footer";
import FortunaHero from "../components/fortuna/fortuna-hero";

const FortunaPage: NextPage = () => {
  return (
    <Container className="page-fortuna bg-secondary" fluid>
      <TopNavigation inverted={false} />
      <FortunaHero />
      <Footer />
    </Container>
  );
};
export default FortunaPage;
