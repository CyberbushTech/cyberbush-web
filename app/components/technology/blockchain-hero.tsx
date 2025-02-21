"use client";
import { Container } from "react-bootstrap";
import { getLocalizations } from "../../dictionaries/dictionaries";

export default function BlockchainTechnologyHero() {
  const dict = getLocalizations();

  return (
    <Container
      id="blockchain"
      className="blockchain-section d-flex flex-column justify-content-center align-items-center text-center p-4 pb-5 bg-dark"
      fluid
    >
      <div className="p-5 section-header text-center">
        <div className="lead">{dict.blockchainHero.sectionLead}</div>
        <h2>{dict.blockchainHero.sectionTitle}</h2>
        <p className="pb-3">{dict.blockchainHero.description}</p>
      </div>
      <Container className="blockchain-container pb-5 d-flex flex-row gap-3 justify-content-center align-items-center flex-wrap">
        <div className="blockchain-scroll-container">
          <div className="blockchain-scroll slow">
            <div>
              {dict.blockchainHero.items[0].map((item: any) => (
                <span key={item.title}>{item.title}</span>
              ))}
            </div>
            <div>
              {dict.blockchainHero.items[0].map((item: any) => (
                <span key={item.title}>{item.title}</span>
              ))}
            </div>
          </div>
          <div className="blockchain-scroll medium">
            <div>
              {dict.blockchainHero.items[1].map((item: any) => (
                <span key={item.title}>{item.title}</span>
              ))}
            </div>
            <div>
              {dict.blockchainHero.items[1].map((item: any) => (
                <span key={item.title}>{item.title}</span>
              ))}
            </div>
          </div>
          <div className="blockchain-scroll fast">
            <div>
              {dict.blockchainHero.items[2].map((item: any) => (
                <span key={item.title}>{item.title}</span>
              ))}
            </div>
            <div>
              {dict.blockchainHero.items[2].map((item: any) => (
                <span key={item.title}>{item.title}</span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}
