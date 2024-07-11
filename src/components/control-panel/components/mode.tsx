import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

export const Mode = () => {
  const [mode, setMode] = useState("encode");
  return (
    <FormControl>
      <FormLabel>Mode</FormLabel>
      <RadioGroup
        defaultValue={mode}
        onChange={(e) => setMode(e.currentTarget.value)}
      >
        <FormControlLabel value="encode" control={<Radio />} label="Encode" />
        <FormControlLabel value="decode" control={<Radio />} label="Decode" />
      </RadioGroup>
    </FormControl>
  );
};
