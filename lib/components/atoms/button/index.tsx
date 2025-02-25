import { Button as MUIButton, ButtonProps } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(MUIButton)(({ theme }) => ({
  borderRadius: "8px",
  padding: theme.spacing(1.5),
  textTransform: "none",
}));

export const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};
