"use client";
import { Container, Image, Table } from "react-bootstrap";
import { getLocalizations } from "@/app/dictionaries/dictionaries";

export default function BeetleBlueprintSection() {
  const dict = getLocalizations();

  return (
    <Container className="scroll-snap-start bg-white d-flex flex-column" fluid>
      <Container className="d-flex flex-column justify-content-center align-items-center pt-4">
        <div className="pt-5 ps-5 pe-5 section-header text-center">
          <div className="lead">{dict.blueprintSection.sectionHeaderLead}</div>
          <h2>{dict.blueprintSection.sectionHeaderTitle}</h2>
        </div>
      </Container>
      <Container className="d-flex flex-column justify-content-center pb-5 pt-3">
        <div className="blueprint">
          <Image
            src="images/beetle/blueprints/perspective.png"
            className="object-fit-contain blueprint-image"
            loading="eager"
            alt={dict.blueprintSection.imageAlt}
          />
        </div>
        <div className="specs d-flex flex-row gap-5 ps-5 pe-5 justify-content-center align-items-start">
          <Table>
            <tbody>
              <tr>
                <th>{dict.blueprintSection.specs.height}</th> <td>2000 mm</td>
              </tr>
              <tr>
                <th>{dict.blueprintSection.specs.width}</th> <td>5020 mm</td>
              </tr>
              <tr>
                <th>{dict.blueprintSection.specs.length}</th> <td>5500 mm</td>
              </tr>
              <tr>
                <th>{dict.blueprintSection.specs.weight}</th> <td>500 Kg</td>
              </tr>
              <tr>
                <th>{dict.blueprintSection.specs.range}</th> <td>35 Km</td>
              </tr>
              <tr>
                <th>{dict.blueprintSection.specs.engines}</th>{" "}
                <td>16 Electric VTOL</td>
              </tr>
              <tr>
                <th>{dict.blueprintSection.specs.payload}</th> <td>120 Kg</td>
              </tr>
              <tr>
                <th>{dict.blueprintSection.specs.passengers}</th>{" "}
                <td>1 or 2</td>
              </tr>
              <tr>
                <th>{dict.blueprintSection.specs.flightTime}</th>{" "}
                <td>30 min</td>
              </tr>
              <tr>
                <th>{dict.blueprintSection.specs.propulsion}</th>{" "}
                <td>Electric or HPS</td>
              </tr>
              <tr>
                <th>{dict.blueprintSection.specs.speed}</th> <td>70 km/h</td>
              </tr>
              <tr>
                <th>{dict.blueprintSection.specs.flightAltitude}</th>{" "}
                <td>3000 m</td>
              </tr>
            </tbody>
          </Table>
          <Table>
            <tbody>
              <tr>
                <th>{dict.blueprintSection.specs.takeOffLanding}</th>
                <td>Vertical</td>
              </tr>
              <tr>
                <th>{dict.blueprintSection.specs.flightControl}</th>
                <td>AI, fully automatic</td>
              </tr>
              <tr>
                <th>{dict.blueprintSection.specs.controls}</th>
                <td>Touchscreen</td>
              </tr>
              <tr>
                <th>{dict.blueprintSection.specs.passengerSafety}</th>
                <td>KC-2012 Catapult Seat</td>
              </tr>
              <tr>
                <th>{dict.blueprintSection.specs.aircraftSafety}</th>
                <td>Parachute System</td>
              </tr>
              <tr>
                <th>{dict.blueprintSection.specs.cargoOption}</th>
                <td>Yes</td>
              </tr>
              <tr>
                <th>{dict.blueprintSection.specs.appearance}</th>
                <td>Customizable</td>
              </tr>
              <tr>
                <th>{dict.blueprintSection.specs.bodyBase}</th>
                <td>Aircraft Aluminium</td>
              </tr>
              <tr>
                <th>{dict.blueprintSection.specs.bodywork}</th>
                <td>Carbon Fiber</td>
              </tr>
              <tr>
                <th>{dict.blueprintSection.specs.interior}</th>
                <td>Customizable</td>
              </tr>
              <tr>
                <th>{dict.blueprintSection.specs.flightMonitoring}</th>
                <td>Realtime</td>
              </tr>
              <tr>
                <th>{dict.blueprintSection.specs.telemetry}</th>
                <td>Blockchain based</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </Container>
  );
}
