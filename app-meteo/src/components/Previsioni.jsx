import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Previsioni = () => {
  const params = useParams();
  console.log("PARAMS", params);

  const [detailsLocation, setDetailslocation] = useState({
    city: {},
    cnt: 0,
    cod: "",
    list: [],
    message: 0,
  });

  const getDetailsLocation = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${params.nameLocation}&appid=9c5ae8aaf755d64a7466ffbbd290cc11&units=metric`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel caricamento dei dati");
        }
      })
      .then((resData) => {
        console.log(resData);
        setDetailslocation(resData);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  useEffect(() => {
    getDetailsLocation();
  }, [params.nameLocation]);

  return (
    <>
      <Container className=" p-5">
        <Row>
          <Col>
            <section className="mb-3">
              <div id="name-location">
                <h4 id="title-country">{detailsLocation.city.name}</h4>
              </div>
            </section>
          </Col>
        </Row>
        <Row className=" overflow-y-scroll" id="row-card">
          {detailsLocation.list.map((day) => {
            return (
              <Col
                xs="12"
                md="6"
                lg="4"
                key={day.dt}
                className="d-flex justify-content-center"
              >
                <Card id="card-day">
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>{day.dt_txt}</Card.Title>
                    <Card.Text>Temp: {day.main.temp} °C</Card.Text>
                    <Card.Text>Max: {day.main.temp_min} °C</Card.Text>
                    <Card.Text>Min: {day.main.temp_max} °C</Card.Text>
                    <Card.Text>Humidity: {day.main.humidity} %</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Previsioni;
