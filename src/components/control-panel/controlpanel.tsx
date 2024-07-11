import { ControlPanelBoxStyled } from "./styles/controlpanel.styles";
import logo from "../../assets/logo.png";
import { Mode } from "./components/mode";
import { Shift } from "./components/shift";
import { Alphabet } from "./components/alphabet";
import { useState } from "react";

export const ControlPanel = () => {
  const [characters, setCharacters] = useState(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  );
  return (
    <ControlPanelBoxStyled>
      <img src={logo} style={{ width: "100px", objectFit: "contain" }} />
      <Mode />
      <Shift characters={characters} />
      <Alphabet characters={characters} setCharacters={setCharacters} />
    </ControlPanelBoxStyled>
  );
};
