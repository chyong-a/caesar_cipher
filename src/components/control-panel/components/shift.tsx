import { Box, TextField, Typography } from "@mui/material";
import { ShiftProps } from "../../../utils/interfaces";

export const Shift = ({
  characters,
  shiftNumber,
  setShiftNumber,
}: ShiftProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        sx={{ color: "#86C232", marginBottom: "20px", fontWeight: "bold" }}
      >
        Shift
      </Typography>
      <TextField
        label="Shift number"
        type="number"
        InputLabelProps={{
          shrink: true,
          style: { color: "#474B4F" },
        }}
        inputProps={{
          style: {
            color: "#474B4F",
          },
        }}
        value={shiftNumber}
        onChange={(e) => setShiftNumber(Number(e.currentTarget.value))}
      />
      <Typography sx={{ color: "#474B4F" }}>
        {characters[0] + " -> " + characters[shiftNumber % characters.length]}
      </Typography>
    </Box>
  );
};
