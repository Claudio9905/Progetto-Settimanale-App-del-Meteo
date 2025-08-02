import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

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
      <Container>
        <Row>
          <Col>
            <section>
              <div>
                <h4>{detailsLocation.city.name}</h4>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Previsioni;
