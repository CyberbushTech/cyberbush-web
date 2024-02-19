"use client";
import { Container } from "react-bootstrap";
import { NextPage } from "next";
import TopNavigation from "../components/common/top-navigation";
import Footer from "../components/common/footer";
import CondorHero from "../components/condor/condor-hero";

const CondorPage: NextPage = () => {
  return (
    <Container className="page-condor bg-secondary" fluid>
      <TopNavigation inverted={false} />
      <CondorHero />
      <Footer />
    </Container>
  );
};
export default CondorPage;
