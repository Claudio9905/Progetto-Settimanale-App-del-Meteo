import Col from "react-bootstrap/esm/Col";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LocationWeather = (props) => {
  const [locationCountry, setLocationCountry] = useState({
    coord: {},
    weather: [],
    base: "stations",
    main: {},
    visibility: 0,
    wind: {},
    clouds: {},
    dt: 0,
    sys: {},
    timezone: 0,
    id: 0,
    name: "",
    cod: 0,
  });
  const navigate = useNavigate();

  const getWeather = () => {
    fetch(props.endpoint)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei dati");
        }
      })
      .then((resData) => {
        console.log(resData);
        setLocationCountry(resData);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  useEffect(() => {
    getWeather();
  }, [props.endpoint]);

  return (
    <>
      <Col xs="12" md="12" lg="12" className="location p-2 text-center">
        {/* Rappresentazione delle location:
      1)immagine della location;
      2)titolo con il luogo della location;
      3)descrizione della location con i dati del meteo */}
        <section className="d-flex justify-content-between me-2">
          <div id="name-location">
            <h4 className=" fs-2 " id="title-country">
              {locationCountry.name}
            </h4>
          </div>
          <h4 id="box-weather">Now</h4>
        </section>
        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
          <div className="box-meteo text-center me-3">
            <h4 className="title-meteo">Coordinate:</h4>
            <p className="fs-5">
              Lon: {locationCountry.coord.lon}
              <br />
              Lat: {locationCountry.coord.lat}
            </p>
          </div>
          <div className="box-meteo text-center">
            <h4 className="title-meteo">Temperature:</h4>
            <p className="fs-5 mt-3 ">Temp: {locationCountry.main.temp} °C</p>
            <div className="fs-5 border-top border-1 border-dark">
              <p className="mt-3">
                Min: {locationCountry.main.temp_min} °C
                <br />
                Max: {locationCountry.main.temp_max} °C
              </p>
            </div>
          </div>
          <div className="box-meteo text-center">
            <h4 className="title-meteo">Humidity: </h4>
            <p className="fs-3">{locationCountry.main.humidity} %</p>
          </div>
          <div className="box-meteo text-center">
            <h4 className="title-meteo">Condizioni Meteo:</h4>
            <p className="fs-5">
              {locationCountry.weather.map((desc) => {
                return desc.description;
              })}
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            navigate(`/previsioni/` + locationCountry.name);
          }}
          className="button-prevs"
        >
          Mostra Previsioni
        </button>
      </Col>
    </>
  );
};

export default LocationWeather;
