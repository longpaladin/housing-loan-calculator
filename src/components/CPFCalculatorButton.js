import * as React from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import CalculateIcon from "@mui/icons-material/Calculate";

// Triggers calculation only if all input fields are filled & validated to be of correct format
export function CPFCalculatorButton({ handleClickCalculate }) {
  return (
    <Button variant="contained" color="success" size="large">
      <Link
        href="https://www.cpf.gov.sg/eSvc/Web/Schemes/MortgageCalculator/MortgageCalculate"
        underline="none"
        rel="noopener"
        target={"_blank"}
        color="white"
      >
        CPF Calculator &nbsp;
      </Link>
      <CalculateIcon />
    </Button>
  );
}
