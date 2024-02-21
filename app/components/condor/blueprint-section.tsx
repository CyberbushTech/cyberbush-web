"use client";
import { Container, Image, Table } from "react-bootstrap";

export default function CondorBlueprintSection() {
  return (
    <Container className="scroll-snap-start bg-white d-flex flex-column" fluid>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <div className="pt-5 ps-5 pe-5 section-header text-center">
          <div className="lead">DETAILED SPECIFICATION</div>
          <h2>CONDOR ONE eVTOL</h2>
        </div>
      </Container>
      <Container className="d-flex flex-column justify-content-center pb-5">
        <div className="blueprint">
          <Image
            src="images/condor/blueprints/perspective.png"
            className="object-fit-contain blueprint-image"
            loading="eager"
            alt={"Cyberbush"}
          />
        </div>
        <div className="specs d-flex flex-row gap-5 ps-5 pe-5 justify-content-center align-items-start">
          <Table>
            <tbody>
              <tr>
                <th>Height</th> <td>2090 mm</td>
              </tr>
              <tr>
                <th>Width</th> <td>10000 mm</td>
              </tr>
              <tr>
                <th>Length</th> <td>7165 mm</td>
              </tr>
              <tr>
                <th>Weight</th> <td>600 Kg</td>
              </tr>
              <tr>
                <th>Range</th> <td>150 Km</td>
              </tr>
              <tr>
                <th>Engines</th> <td>16 Electric VTOL 1 Electric Sustainer</td>
              </tr>
              <tr>
                <th>Payload</th> <td>120 Kg</td>
              </tr>
              <tr>
                <th>Passengers</th> <td>1 or 2</td>
              </tr>
              <tr>
                <th>Flight Time</th> <td>2 h</td>
              </tr>
              <tr>
                <th>Propulsion</th> <td>Electric or HPS</td>
              </tr>
              <tr>
                <th>Speed</th> <td>120 km/h</td>{" "}
              </tr>
              <tr>
                <th>Flight Altitude</th> <td>3000 m</td>
              </tr>
            </tbody>
          </Table>
          <Table>
            <tbody>
              <tr>
                <th>Take Off & Landing</th>
                <td>Vertical</td>
              </tr>
              <tr>
                <th>Flight Control</th>
                <td>AI, fully automatic</td>
              </tr>
              <tr>
                <th>Controls</th>
                <td>Touchscreen</td>
              </tr>
              <tr>
                <th>Passenger Safety</th>
                <td>KC-2012 Catapult Seat</td>
              </tr>
              <tr>
                <th>Aircraft Safety</th>
                <td>Parachute System</td>
              </tr>
              <tr>
                <th>Cargo Option</th>
                <td>No</td>
              </tr>
              <tr>
                <th>Appearance</th>
                <td>Customizable</td>
              </tr>
              <tr>
                <th>Body Base</th>
                <td>Aircraft Aluminium</td>
              </tr>
              <tr>
                <th>Bodywork</th>
                <td>Carbon Fiber</td>
              </tr>
              <tr>
                <th>Interior</th>
                <td>Customizable</td>
              </tr>
              <tr>
                <th>Flight Monitoring</th>
                <td>Realtime</td>
              </tr>
              <tr>
                <th>Telemetry</th>
                <td>Blockchain based</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </Container>
  );
}
