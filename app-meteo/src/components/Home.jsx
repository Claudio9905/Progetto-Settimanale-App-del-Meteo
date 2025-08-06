import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LocationWeather from "./LocationWeather";

const Home = (props) => {
  const endpoint1 =
    "https://api.openweathermap.org/data/2.5/weather?q=naples&appid=9c5ae8aaf755d64a7466ffbbd290cc11&units=metric";
  const endpoint2 =
    "https://api.openweathermap.org/data/2.5/weather?q=florence&appid=9c5ae8aaf755d64a7466ffbbd290cc11&units=metric";
  const endpoint3 =
    "https://api.openweathermap.org/data/2.5/weather?q=london&appid=9c5ae8aaf755d64a7466ffbbd290cc11&units=metric";
  const endpoint4 =
    "https://api.openweathermap.org/data/2.5/weather?q=bari&appid=9c5ae8aaf755d64a7466ffbbd290cc11&units=metric";
  const endpoint5 =
    "https://api.openweathermap.org/data/2.5/weather?q=tokio,jp&appid=9c5ae8aaf755d64a7466ffbbd290cc11&units=metric";
  const endpointSearch = `https://api.openweathermap.org/data/2.5/weather?q=${props.location}&appid=9c5ae8aaf755d64a7466ffbbd290cc11&units=metric`;

  return (
    <>
      <Container>
        <Row className=" mt-3 g-4 p-3">
          {props.found ? (
            <>
              <div id="meteo-search">
                <LocationWeather endpoint={endpointSearch} />
              </div>
            </>
          ) : (
            <div className="d-flex justify-content-center align-items-center mt-5">
              <h4>Nessuna Città cercata</h4>
            </div>
          )}
          <div className="border-bottom border-2 border-dark"></div>
          <LocationWeather endpoint={endpoint1} />
          <LocationWeather endpoint={endpoint2} />
          <LocationWeather endpoint={endpoint3} />
          <LocationWeather endpoint={endpoint4} />
          <LocationWeather endpoint={endpoint5} />
        </Row>
      </Container>
    </>
  );
};

export default Home;
