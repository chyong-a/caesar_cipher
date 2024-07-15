import { Grid } from "@mui/material";
import "./App.css";
import { ControlPanel } from "./components/control-panel/controlpanel";
import { InputContainer } from "./components/input/inputcontainer";
import { OutputContainer } from "./components/output/outputcontainer";
import { useState } from "react";
import { processText } from "./utils/functions";

function App() {
  const [text, setText] = useState(
    "In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code, or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet."
  );
  const [characters, setCharacters] = useState("abcdefghijklmnopqrstuvwxyz");
  const [mode, setMode] = useState("encode");
  const [shiftNumber, setShiftNumber] = useState(7);

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <ControlPanel
          characters={characters}
          setCharacters={setCharacters}
          mode={mode}
          setMode={setMode}
          shiftNumber={shiftNumber}
          setShiftNumber={setShiftNumber}
        />
      </Grid>
      <Grid item xs={12} md={4} sx={{ margin: "16px auto" }}>
        <InputContainer text={text} setText={setText} />
      </Grid>
      <Grid item xs={12} md={4} sx={{ margin: "16px auto" }}>
        <OutputContainer
          text={processText(mode, characters, shiftNumber, text)}
        />
      </Grid>
    </Grid>
  );
}

export default App;
