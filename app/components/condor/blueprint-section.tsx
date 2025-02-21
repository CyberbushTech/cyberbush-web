import { Container, Image, Table } from "react-bootstrap";
import { getLocalizations } from "../../dictionaries/dictionaries";

export default function CondorBlueprintSection() {
  const { condorBlueprintSection } = getLocalizations();

  return (
    <Container className="scroll-snap-start bg-white d-flex flex-column" fluid>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <div className="pt-5 ps-5 pe-5 section-header text-center">
          <div className="lead">{condorBlueprintSection.sectionHeaderLead}</div>
          <h2>{condorBlueprintSection.sectionHeaderTitle}</h2>
        </div>
      </Container>
      <Container className="d-flex flex-column justify-content-center pb-5">
        <div className="blueprint">
          <Image
            src="images/condor/blueprints/perspective.png"
            className="object-fit-contain blueprint-image"
            loading="eager"
            alt={condorBlueprintSection.imageAlt}
          />
        </div>
        <div className="specs d-flex flex-row gap-5 ps-5 pe-5 justify-content-center align-items-start">
          <Table>
            <tbody>
              <tr>
                <th>{condorBlueprintSection.specs.height}</th>
                <td>2090 mm</td>
              </tr>
              <tr>
                <th>{condorBlueprintSection.specs.width}</th>
                <td>10000 mm</td>
              </tr>
              <tr>
                <th>{condorBlueprintSection.specs.length}</th>
                <td>7165 mm</td>
              </tr>
              <tr>
                <th>{condorBlueprintSection.specs.weight}</th>
                <td>600 Kg</td>
              </tr>
              <tr>
                <th>{condorBlueprintSection.specs.range}</th>
                <td>320 Km</td>
              </tr>
              <tr>
                <th>{condorBlueprintSection.specs.engines}</th>
                <td>16 Electric VTOL 1 Electric Sustainer</td>
              </tr>
              <tr>
                <th>{condorBlueprintSection.specs.payload}</th>
                <td>120 Kg</td>
              </tr>
              <tr>
                <th>{condorBlueprintSection.specs.passengers}</th>
                <td>1 or 2</td>
              </tr>
              <tr>
                <th>{condorBlueprintSection.specs.flightTime}</th>
                <td>2 h</td>
              </tr>
              <tr>
                <th>{condorBlueprintSection.specs.propulsion}</th>
                <td>Electric or HPS</td>
              </tr>
              <tr>
                <th>{condorBlueprintSection.specs.speed}</th>
                <td>180 km/h</td>
              </tr>
              <tr>
                <th>{condorBlueprintSection.specs.flightAltitude}</th>
                <td>3000 m</td>
              </tr>
            </tbody>
          </Table>
          <Table>
            <tbody>
              <tr>
                <th>{condorBlueprintSection.specs.takeOffLanding}</th>
                <td>Vertical</td>
              </tr>
              <tr>
                <th>{condorBlueprintSection.specs.flightControl}</th>
                <td>AI, fully automatic</td>
              </tr>
              <tr>
                <th>{condorBlueprintSection.specs.controls}</th>
                <td>Touchscreen</td>
              </tr>
              <tr>
                <th>{condorBlueprintSection.specs.passengerSafety}</th>
                <td>KC-2012 Catapult Seat</td>
              </tr>
              <tr>
                <th>{condorBlueprintSection.specs.aircraftSafety}</th>
                <td>Parachute System</td>
              </tr>
              <tr>
                <th>{condorBlueprintSection.specs.cargoOption}</th>
                <td>No</td>
              </tr>
              <tr>
                <th>{condorBlueprintSection.specs.appearance}</th>
                <td>Customizable</td>
              </tr>
              <tr>
                <th>{condorBlueprintSection.specs.bodyBase}</th>
                <td>Aircraft Aluminium</td>
              </tr>
              <tr>
                <th>{condorBlueprintSection.specs.bodywork}</th>
                <td>Carbon Fiber</td>
              </tr>
              <tr>
                <th>{condorBlueprintSection.specs.interior}</th>
                <td>Customizable</td>
              </tr>
              <tr>
                <th>{condorBlueprintSection.specs.flightMonitoring}</th>
                <td>Realtime</td>
              </tr>
              <tr>
                <th>{condorBlueprintSection.specs.telemetry}</th>
                <td>Blockchain based</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </Container>
  );
}
