import { TextField } from "@mui/material";

interface InputContainerProps {
  text: string;
  setText: (newText: string) => void;
}

export const InputContainer = ({ text, setText }: InputContainerProps) => {
  return (
    <TextField
      fullWidth
      multiline
      rows={12}
      value={text}
      onChange={(e) => setText(e.currentTarget.value)}
      inputProps={{
        style: {
          color: "#474B4F",
        },
      }}
    />
  );
};
