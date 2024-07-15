import { Box, Button, TextField, Typography } from "@mui/material";
import { AlphabetProps } from "../../../utils/interfaces";

export const Alphabet = ({ characters, setCharacters }: AlphabetProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        sx={{
          color: "#86C232",
          marginBottom: "20px",
          paddingTop: "8px",
          fontWeight: "bold",
        }}
      >
        Alphabet
      </Typography>
      <TextField
        placeholder={characters}
        value={characters}
        onChange={(e) => setCharacters(e.currentTarget.value)}
        InputLabelProps={{
          shrink: true,
          style: { color: "#474B4F" },
        }}
        inputProps={{
          style: {
            color: "#474B4F",
          },
        }}
      />
      <Button
        sx={{
          color: "#474B4F",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
        onClick={() => setCharacters("abcdefghijklmnopqrstuvwxyz")}
      >
        Reset
      </Button>
    </Box>
  );
};
