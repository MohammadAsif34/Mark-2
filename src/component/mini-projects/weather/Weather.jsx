import React from "react";
import { useParams } from "react-router-dom";

const Weather = () => {
  const params = useParams();
  return <div>this is weather page - {params.location}</div>;
};

export default Weather;
