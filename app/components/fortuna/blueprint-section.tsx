"use client";
import { Container, Image, Table } from "react-bootstrap";
import { getLocalizations } from "../../dictionaries/dictionaries";

export default function FortunaBlueprintSection() {
  const { fortunaBlueprintSection } = getLocalizations();
  return (
    <Container
      className="scroll-snap-start bg-white d-flex flex-column pt-3"
      fluid
    >
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <div className="pt-5 ps-5 pe-5 section-header text-center">
          <div className="lead">
            {fortunaBlueprintSection.sectionHeaderLead}
          </div>
          <h2>{fortunaBlueprintSection.sectionHeaderTitle}</h2>
        </div>
      </Container>
      <Container className="d-flex flex-column justify-content-center pb-5 pt-3">
        <div className="blueprint">
          <Image
            src="images/fortuna/blueprints/perspective.jpg"
            className="object-fit-contain blueprint-image"
            loading="eager"
            alt={fortunaBlueprintSection.imageAlt}
          />
        </div>
        <div className="specs d-flex flex-row gap-5 ps-5 pe-5 justify-content-center align-items-start">
          <Table>
            <tbody>
              <tr>
                <th>{fortunaBlueprintSection.specs.height}</th>
                <td>1500 mm</td>
              </tr>
              <tr>
                <th>{fortunaBlueprintSection.specs.width}</th>
                <td>2000 mm</td>
              </tr>
              <tr>
                <th>{fortunaBlueprintSection.specs.length}</th>
                <td>5000 mm</td>
              </tr>
              <tr>
                <th>{fortunaBlueprintSection.specs.weight}</th>
                <td>600 Kg</td>
              </tr>
              <tr>
                <th>{fortunaBlueprintSection.specs.range}</th>
                <td>300 Km</td>
              </tr>
              <tr>
                <th>{fortunaBlueprintSection.specs.engines}</th>
                <td>8 jet engines</td>
              </tr>
              <tr>
                <th>{fortunaBlueprintSection.specs.payload}</th>
                <td>120 Kg</td>
              </tr>
              <tr>
                <th>{fortunaBlueprintSection.specs.passengers}</th>
                <td>1</td>
              </tr>
              <tr>
                <th>{fortunaBlueprintSection.specs.flightTime}</th>
                <td>Time 25 min</td>
              </tr>
              <tr>
                <th>{fortunaBlueprintSection.specs.propulsion}</th>
                <td>Kerosene</td>
              </tr>
              <tr>
                <th>{fortunaBlueprintSection.specs.speed}</th>
                <td>750 km/h</td>
              </tr>
              <tr>
                <th>{fortunaBlueprintSection.specs.flightAltitude}</th>
                <td>3000 m</td>
              </tr>
            </tbody>
          </Table>
          <Table>
            <tbody>
              <tr>
                <th>{fortunaBlueprintSection.specs.takeOffLanding}</th>
                <td>Vertical</td>
              </tr>
              <tr>
                <th>{fortunaBlueprintSection.specs.flightControl}</th>
                <td>AI with manual correction</td>
              </tr>
              <tr>
                <th>{fortunaBlueprintSection.specs.controls}</th>
                <td>Touchscreen and controller</td>
              </tr>
              <tr>
                <th>{fortunaBlueprintSection.specs.passengerSafety}</th>
                <td>KC-2012 Catapult Seat</td>
              </tr>
              <tr>
                <th>{fortunaBlueprintSection.specs.aircraftSafety}</th>
                <td>Parachute System</td>
              </tr>
              <tr>
                <th>{fortunaBlueprintSection.specs.cargoOption}</th>
                <td>No</td>
              </tr>
              <tr>
                <th>{fortunaBlueprintSection.specs.appearance}</th>
                <td>Customizable</td>
              </tr>
              <tr>
                <th>{fortunaBlueprintSection.specs.bodyBase}</th>
                <td>Aluminium</td>
              </tr>
              <tr>
                <th>{fortunaBlueprintSection.specs.bodywork}</th>
                <td>Carbon Fiber</td>
              </tr>
              <tr>
                <th>{fortunaBlueprintSection.specs.interior}</th>
                <td>Customizable</td>
              </tr>
              <tr>
                <th>{fortunaBlueprintSection.specs.flightMonitoring}</th>
                <td>Realtime</td>
              </tr>
              <tr>
                <th>{fortunaBlueprintSection.specs.telemetry}</th>
                <td>Blockchain based</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </Container>
  );
}
