import * as React from "react";
import { useState } from "react";
import { CalculateButton } from "./CalculateButton";
import { InterestRate } from "./InterestRate";
import { LoanAmount } from "./LoanAmount";
import { LoanTenure } from "./LoanTenure";
import { PropertyType } from "./PropertyType";
import { ResetButton } from "./ResetButton";
import { RepaymentTable } from "./RepaymentTable";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const MAX_LOAN_AMOUNT = 99999999;
const MIN_LOAN_AMOUNT = 100000;

export function LoanForm() {
  // Set the states for different input fields
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(2.6);
  const [loanTenure, setLoanTenure] = useState(30);
  const [property, setProperty] = useState("");

  // Validator when you click the calculate button
  const [validateLoanAmount, setValidateLoanAmount] = useState(true);
  const [validateInterestRate, setValidateInterestRate] = useState(true);
  // const [validateLoanTenure, setValidateLoanTenure] = useState(false);
  const [validateProperty, setValidateProperty] = useState(false);
  const [validateAll, setValidateAll] = useState(false);
  const [calculateAttempt, setCalculateAttempt] = useState(false);

  // Update whenever property is changed
  const handlePropertyChange = (event) => {
    setCalculateAttempt(false);
    setProperty(event.target.value);
    if (event.target.value === "HDB" || event.target.value === "Private Property") {
      setValidateProperty(true);
    } else {
      setValidateProperty(false);
    }
    
  };

  // Update whenever loan amount field is changed
  const handleLoanAmountChange = (event) => {
    setCalculateAttempt(false);
    setLoanAmount(event.target.value);

    let regexp = /^[0-9]*$/;
    let passRegexp = regexp.test(event.target.value);
    if (
      event.target.value <= MAX_LOAN_AMOUNT &&
      event.target.value >= MIN_LOAN_AMOUNT &&
      passRegexp
    ) {
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
    let passRegexp = regexp.test(event.target.value);
    if (passRegexp && event.target.value !== "") {
      setValidateInterestRate(true);
    } else {
      setValidateInterestRate(false);
    }
  };

  // Update whenever loan tenure field is changed
  const handleLoanTenureChange = (event) => {
    setCalculateAttempt(false);
    setLoanTenure(event.target.value);
  };

  // When reset button is clicked
  const resetAll = () => {
    setLoanAmount(500000);
    setValidateLoanAmount(true);
    setInterestRate(2.6);
    setValidateInterestRate(true);
    setLoanTenure(30);
    setCalculateAttempt(false);
  };

  // When calculate button is clicked
  const handleClickCalculate = () => {
    setCalculateAttempt(true);

    if (validateProperty && validateLoanAmount && validateInterestRate) {
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

      {validateAll && calculateAttempt && (
        <RepaymentTable
          property={property}
          loanAmount={loanAmount}
          interestRate={interestRate}
          loanTenure={loanTenure}
        />
      )}
    </form>
  );
}
