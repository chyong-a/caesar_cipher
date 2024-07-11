import { Box, Button, TextField, Typography } from "@mui/material";

interface AlphabetProps {
  characters: string;
  setCharacters: (newValue: string) => void;
}

export const Alphabet = ({ characters, setCharacters }: AlphabetProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography>Alphabet</Typography>
      <TextField
        placeholder={characters}
        value={characters}
        onChange={(e) => setCharacters(e.currentTarget.value)}
      />
      <Button
        onClick={() =>
          setCharacters("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")
        }
      >
        Reset
      </Button>
    </Box>
  );
};
