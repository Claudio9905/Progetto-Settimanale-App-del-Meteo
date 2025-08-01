import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Previsioni = () => {
  const params = useParams();
  console.log("PARAMS", params);

  const [detailsLocation, setDetailslocation] = useState({});

  const getDetailsLocation = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${params.name}&appid=9c5ae8aaf755d64a7466ffbbd290cc11`
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
    getDetailsLocation;
  }, []);

  return <></>;
};

export default Previsioni;
