import React from "react";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";

const Browse = () => {
  //get the series and movies
  const { series } = useContent("series");
  const { films } = useContent("films");

  //get slide info
  const slides = selectionFilter({ series, films });
  console.log(slides);
  //pass it to the browse container
  return <p>browsee</p>;
};

export default Browse;
