import { ControlPanelBoxStyled } from "./styles/controlpanel.styles";
import { Mode } from "./components/mode";
import { Shift } from "./components/shift";
import { Typography } from "@mui/material";
import { ControlPanelProps } from "../../utils/interfaces";
import { Alphabet } from "./components/alphabet";

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
      <Typography
        style={{
          background:
            "-webkit-linear-gradient(45deg, #86C232 30%, #474B4F 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "60px",
        }}
        variant="h1"
      >
        Caesar Cipher
      </Typography>
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
