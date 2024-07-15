import { TextField, Typography } from "@mui/material";
import { OutputContainerProps } from "../../utils/interfaces";

export const OutputContainer = ({ text }: OutputContainerProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const text = target.value;
    navigator.clipboard.writeText(text);
    alert("Copied to Clipboard!");
  };

  return (
    <>
      <TextField
        sx={{ width: { md: "100%", xs: "90%" } }}
        multiline
        rows={12}
        value={text}
        onClick={(e) => {
          handleClick(e);
        }}
        inputProps={{
          style: {
            color: "#474B4F",
          },
        }}
      />
      <Typography
        variant="body1"
        style={{ color: "#86C232", marginTop: "4px" }}
      >
        Click on the field to copy the text.
      </Typography>
    </>
  );
};
