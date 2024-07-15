import { TextField } from "@mui/material";
import { InputContainerProps } from "../../utils/interfaces";

export const InputContainer = ({ text, setText }: InputContainerProps) => {
  return (
    <TextField
      sx={{ width: { md: "100%", xs: "90%" } }}
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
