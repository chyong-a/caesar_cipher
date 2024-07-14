import { ControlPanelBoxStyled } from "./styles/controlpanel.styles";
import logo from "../../assets/logo.png";
import { Mode } from "./components/mode";
import { Shift } from "./components/shift";
import { Alphabet } from "./components/alphabet";
import { Typography } from "@mui/material";

interface ControlPanelProps {
  characters: string;
  setCharacters: (characters: string) => void;
  mode: string;
  setMode: (mode: string) => void;
  shiftNumber: number;
  setShiftNumber: (shiftNumber: number) => void;
}

export const ControlPanel = ({
  characters,
  setCharacters,
  mode,
  setMode,
  shiftNumber,
  setShiftNumber,
}: ControlPanelProps) => {
  return (
    <ControlPanelBoxStyled sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <img src={logo} style={{ width: "100px", objectFit: "contain" }} />
      <Mode mode={mode} setMode={setMode} />
      <Shift
        characters={characters}
        shiftNumber={shiftNumber}
        setShiftNumber={setShiftNumber}
      />
      <Alphabet characters={characters} setCharacters={setCharacters} />
    </ControlPanelBoxStyled>
  );
};
