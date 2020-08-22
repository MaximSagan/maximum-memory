import React from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Game from "./Game";

const generateClassName = createGenerateClassName({
  productionPrefix: "mm",
});

function App(): JSX.Element {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Game />
    </StylesProvider>
  );
}

export default App;
