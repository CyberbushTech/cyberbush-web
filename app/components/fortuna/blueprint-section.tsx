"use client";
import { Container, Image, Table } from "react-bootstrap";

export default function FortunaBlueprintSection() {
  const images = [
    "images/fortuna/Fortuna-Perspective.png",
    "images/fortuna/Fortuna-Top.png",
    "images/fortuna/Fortuna-Back.png",
    "images/fortuna/Fortuna-Front.png",
    "images/fortuna/Fortuna-Perspective-Back.png",
  ];

  return (
    <Container className="bg-white d-flex flex-column" fluid>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <div className="pt-5 ps-5 pe-5 section-header text-center">
          <div className="lead">DETAILED SPECIFICATION</div>
          <h2>FORTUNA JET FLIGHT</h2>
        </div>
      </Container>
      <Container className="d-flex flex-column justify-content-center pb-5">
        <div className="blueprint">
          <Image
            src="images/fortuna/Fortuna-Perspective-Blueprint.jpg"
            className="object-fit-contain blueprint-image"
            loading="eager"
            alt={"Cyberbush"}
          />
        </div>
        <div className="specs d-flex flex-row gap-5 ps-5 pe-5 justify-content-center align-items-start">
          <Table>
            <tbody>
              <tr>
                <th>Height</th>
                <td>1500 mm</td>
              </tr>
              <tr>
                <th>Width</th>
                <td>2000 mm</td>
              </tr>
              <tr>
                <th>Length</th>
                <td>5000 mm</td>
              </tr>
              <tr>
                <th>Weight</th>
                <td>600 Kg</td>
              </tr>
              <tr>
                <th>Range</th>
                <td>300 Km</td>
              </tr>
              <tr>
                <th>Engines</th>
                <td>8 jet engines</td>
              </tr>
              <tr>
                <th>Payload</th>
                <td>120 Kg</td>
              </tr>
              <tr>
                <th>Passengers</th>
                <td>1</td>
              </tr>
              <tr>
                <th>Flight</th>
                <td>Time 25 min</td>
              </tr>
              <tr>
                <th>Propulsion</th>
                <td>Kerosene</td>
              </tr>
              <tr>
                <th>Speed</th>
                <td>750 km/h</td>
              </tr>
              <tr>
                <th>Flight Altitude</th>
                <td>3000 m</td>
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
                <td>AI with manual correction</td>
              </tr>
              <tr>
                <th>Controls</th>
                <td>Touchscreen and controller</td>
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
                <th>Body Base </th>
                <td>Aluminium</td>
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
