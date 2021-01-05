import React from "react";
import { useContent } from "../hooks";

const Browse = () => {
  //need series and movies
  const { series } = useContent("series");
  console.log(series);
  //need slide design
  //pass it to the browse container
  return <p>browsee</p>;
};

export default Browse;
