import { Button } from "@mui/material";

function CustomButton({
  children,
  variant = "contained",
  href,
  startIcon,
  onClick,
}) {
  return (
    <Button
      variant={variant}
      href={href}
      startIcon={startIcon}
      onClick={onClick}
      size="large"
    >
      {children}
    </Button>
  );
}

export default CustomButton;