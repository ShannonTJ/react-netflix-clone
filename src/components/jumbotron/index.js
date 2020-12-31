import React from "react";
import { Inner, Container } from "./styles/jumbotron";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <div>
      <Inner direction={direction}>
        <p>hell</p>
      </Inner>
    </div>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
