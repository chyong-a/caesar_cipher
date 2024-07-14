import { TextField } from "@mui/material";

interface OutputContainerProps {
  text: string;
}

export const OutputContainer = ({ text }: OutputContainerProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    const text = target.value;
    navigator.clipboard.writeText(text);
    alert("Copied to Clipboard!");
  };

  return (
    <TextField
      fullWidth
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
  );
};
