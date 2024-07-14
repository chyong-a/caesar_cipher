import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

interface ModeProps {
  mode: string;
  setMode: (mode: string) => void;
}

export const Mode = ({ mode, setMode }: ModeProps) => {
  return (
    <FormControl>
      <FormLabel
        sx={{
          color: "#86C232",
        }}
      >
        Mode
      </FormLabel>
      <RadioGroup
        defaultValue={mode}
        onChange={(e) => setMode(e.currentTarget.value)}
        sx={{
          color: "#474B4F",
        }}
      >
        <FormControlLabel
          value="encode"
          control={
            <Radio
              sx={{
                "&, &.Mui-checked": {
                  color: "#474B4F",
                },
              }}
            />
          }
          label="Encode"
        />
        <FormControlLabel
          value="decode"
          control={
            <Radio
              sx={{
                "&, &.Mui-checked": {
                  color: "#474B4F",
                },
              }}
            />
          }
          label="Decode"
        />
      </RadioGroup>
    </FormControl>
  );
};
