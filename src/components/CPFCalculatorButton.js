import * as React from "react";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import CalculateIcon from "@mui/icons-material/Calculate";

// Links to CPF calculator if you do not like my calculator
export function CPFCalculatorButton() {
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
