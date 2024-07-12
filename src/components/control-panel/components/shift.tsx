import { Box, TextField, Typography } from "@mui/material";
// import { useState } from "react";

interface ShiftProps {
  characters: string;
  shiftNumber: number;
  setShiftNumber: (shiftNumber: number) => void;
}

export const Shift = ({
  characters,
  shiftNumber,
  setShiftNumber,
}: ShiftProps) => {
  // const [shiftNumber, setShiftNumber] = useState(3);
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography>Shift</Typography>
      <TextField
        label="Shift number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={shiftNumber}
        onChange={(e) => setShiftNumber(Number(e.currentTarget.value))}
      />
      <Typography>
        {characters[0] + " -> " + characters[shiftNumber]}
      </Typography>
    </Box>
  );
};
