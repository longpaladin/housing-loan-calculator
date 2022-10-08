import * as React from "react";
import Button from "@mui/material/Button";
import CalculateIcon from "@mui/icons-material/Calculate";

// Triggers calculation only if all input fields are filled & validated to be of correct format
export function CalculateButton({ handleClickCalculate }) {
  return (
    <Button
      variant="contained"
      color="success"
      size="large"
      onClick={handleClickCalculate}
    >
      Calculate monthly mortgage &nbsp;
      <CalculateIcon />
    </Button>
  );
}
