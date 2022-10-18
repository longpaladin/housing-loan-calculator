import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

const MIN_LOAN_AMOUNT = 100000;
const MAX_LOAN_AMOUNT = 99999999;

// Controls loan amount and error messages
export function LoanAmount({
  loanAmount,
  handleLoanAmountChange,
  calculateAttempt,
}) {
  let regexp = /^[0-9]*$/;
  let passRegexp = regexp.test(loanAmount);

  return (
    <div>
      <FormControl
        sx={{ m: 2, width: "90%", maxWidth: "500px" }}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-loanamount">
          Loan Amount
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={loanAmount}
          onChange={handleLoanAmountChange}
          startAdornment={
            <InputAdornment position="start">SGD$</InputAdornment>
          }
          label="Loan Amount"
        />
        {!passRegexp && loanAmount !== "" && (
          <FormHelperText error>
            Numbers only, no alphabets or special characters
          </FormHelperText>
        )}
        {!calculateAttempt &&
          (loanAmount < MIN_LOAN_AMOUNT || loanAmount > MAX_LOAN_AMOUNT) && (
            <FormHelperText error>
              Out of range. Input loan amount between $100,000 and $99,999,999
            </FormHelperText>
          )}
        {calculateAttempt &&
          (loanAmount === "" ||
            loanAmount < MIN_LOAN_AMOUNT ||
            loanAmount > MAX_LOAN_AMOUNT) && (
            <FormHelperText error>
              Input loan amount between $100,000 and $99,999,999
            </FormHelperText>
          )}
      </FormControl>
    </div>
  );
}
