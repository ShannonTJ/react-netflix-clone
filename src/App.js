import React from "react";
import Jumbotron from "./components/jumbotron";
import jumboData from "./fixtures/jumbo";

function App() {
  return (
    <div>
      <Jumbotron.Container>
        {jumboData.map((data) => (
          <Jumbotron key={data.id} direction={data.direction}>
            <p>HII</p>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  );
}

export default App;
