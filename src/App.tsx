import { Grid } from "@mui/material";
import "./App.css";
import { ControlPanel } from "./components/control-panel/controlpanel";
import { InputContainer } from "./components/input/inputcontainer";
import { OutputContainer } from "./components/output/outputcontainer";
import { useState } from "react";

function App() {
  const [text, setText] = useState("Hello World");
  const [characters, setCharacters] = useState("abcdefghijklmnopqrstuvwxyz");
  const [mode, setMode] = useState("encode");
  const [shiftNumber, setShiftNumber] = useState(3);

  const processText = (text: string) => {
    let result = text.split("");
    for (var i = 0; i < text.length; i++) {
      const lowerCaseChar = text[i].toLowerCase();
      if (characters.includes(lowerCaseChar)) {
        const isInLowerCase = lowerCaseChar == text[i];
        const currentIndex = characters.indexOf(lowerCaseChar);
        let newIndex = currentIndex + shiftNumber;
        if (newIndex > characters.length - 1) {
          newIndex = newIndex % characters.length;
        }
        if (isInLowerCase) {
          result[i] = characters[newIndex].toLowerCase();
        } else {
          result[i] = characters[newIndex].toUpperCase();
        }
      }
    }
    return result.join("");
  };

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
        <OutputContainer text={processText(text)} />
      </Grid>
    </Grid>
  );
}

export default App;
