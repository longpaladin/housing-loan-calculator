import * as React from "react";
import { CalculateButton } from "./CalculateButton";
import { InterestRate } from "./InterestRate";
import { LoanAmount } from "./LoanAmount";
import { LoanTenure } from "./LoanTenure";
import { PropertyType } from "./PropertyType";
import { ResetButton } from "./ResetButton";
import Stack from "@mui/material/Stack";
import { RepaymentTable } from "./RepaymentTable";
import { ChartTable } from "./ChartTable";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export function LoanForm() {
  // Set the states for different input fields
  const [loanAmount, setLoanAmount] = React.useState();
  const [interestRate, setInterestRate] = React.useState();
  const [loanTenure, setLoanTenure] = React.useState();
  const [property, setProperty] = React.useState();

  // Validator when you click the calculate button
  const [validateLoanAmount, setValidateLoanAmount] = React.useState(false);
  const [validateInterestRate, setValidateInterestRate] = React.useState(false);
  const [validateLoanTenure, setValidateLoanTenure] = React.useState(false);
  const [validateProperty, setValidateProperty] = React.useState(false);
  const [validateAll, setValidateAll] = React.useState(false);
  const [calculateAttempt, setCalculateAttempt] = React.useState(false);

  // Update whenever property is changed
  const handlePropertyChange = (event) => {
    setCalculateAttempt(false);
    setProperty(event.target.value);

    setValidateProperty(true);
  };

  // Update whenever loan amount field is changed
  const handleLoanAmountChange = (event) => {
    setCalculateAttempt(false);
    setLoanAmount(event.target.value);

    let regexp = /^[0-9]*$/;
    let passRegexp = regexp.test(loanAmount);
    if (loanAmount < 100000000 && loanAmount >= 100000 && passRegexp) {
      setValidateLoanAmount(true);
    } else {
      setValidateLoanAmount(false);
    }
  };

  // Update whenever interest rate field is changed
  const handleInterestChange = (event) => {
    setCalculateAttempt(false);
    setInterestRate(event.target.value);

    let regexp = /^\+?[0-9]*(\.[0-9]{0,2})?$/;
    let passRegexp = regexp.test(interestRate);
    if (passRegexp && interestRate !== undefined) {
      setValidateInterestRate(true);
    } else {
      setValidateInterestRate(false);
    }
  };

  // Update whenever loan tenure field is changed
  const handleLoanTenureChange = (event) => {
    setCalculateAttempt(false);
    setLoanTenure(event.target.value);

    let regexp = /^[0-9]*$/;
    let passRegexp = !regexp.test(loanTenure);
    if (
      passRegexp &&
      loanTenure !== undefined &&
      (loanTenure < 1 || loanTenure > 30)
    ) {
      setValidateLoanTenure(true);
    } else {
      setValidateLoanTenure(false);
    }
  };

  // When reset button is clicked
  const resetAll = () => {
    setLoanAmount(0);
    setInterestRate(0);
    setLoanTenure(0);
    setCalculateAttempt(false);
  };

  // When calculate button is clicked
  const handleClickCalculate = () => {
    setCalculateAttempt(true);
    if (property && loanAmount && interestRate && loanTenure) {
      setValidateAll(true);
    } else {
      setValidateAll(false);
    }
  };

  // Prevent form submission in html
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <PropertyType
        handlePropertyChange={handlePropertyChange}
        property={property}
        validateProperty={validateProperty}
        calculateAttempt={calculateAttempt}
      />
      <LoanAmount
        handleLoanAmountChange={handleLoanAmountChange}
        loanAmount={loanAmount}
        calculateAttempt={calculateAttempt}
      />
      <InterestRate
        handleInterestChange={handleInterestChange}
        interestRate={interestRate}
        calculateAttempt={calculateAttempt}
      />
      <LoanTenure
        handleLoanTenureChange={handleLoanTenureChange}
        loanTenure={loanTenure}
        calculateAttempt={calculateAttempt}
      />
      
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item lg={2} md={1}></Grid>
          <Grid item lg={6} md={7} xs={12}>
            <CalculateButton handleClickCalculate={handleClickCalculate} />
          </Grid>
          <Grid item lg={2} md={3} xs={12}>
            <ResetButton resetAll={resetAll} />
          </Grid>
          <Grid item lg={2} md={1}></Grid>
        </Grid>
      </Box>
      {calculateAttempt && !validateAll && (
        <h4 style={{ color: "red" }}>
          Ensure all input fields are filled correctly
        </h4>
      )}

      {validateAll && calculateAttempt ? (
        <RepaymentTable
          property={property}
          loanAmount={loanAmount}
          interestRate={interestRate}
          loanTenure={loanTenure}
        />
      ) : (
        <></>
      )}
    </form>
  );
}
