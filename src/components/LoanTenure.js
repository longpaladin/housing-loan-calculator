import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

const MIN_LOAN_TENURE_YEARS = 1;
const MAX_LOAN_TENURE_YEARS = 30;

// Controls loan tenure and error messages
export function LoanTenure({
  loanTenure,
  handleLoanTenureChange,
  calculateAttempt,
}) {
  let regexp = /^[0-9]*$/;
  let passRegexp = !regexp.test(loanTenure);

  return (
    <div>
      <FormControl
        sx={{ m: 2, width: "90%", maxWidth: "500px" }}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-loantenure">
          Loan Tenure
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-loantenure"
          value={loanTenure}
          onChange={handleLoanTenureChange}
          endAdornment={<InputAdornment position="end">years</InputAdornment>}
          label="Loan Tenure"
        />
        {passRegexp && loanTenure !== undefined && (
          <FormHelperText error>
            Loan tenure can only be whole numbers
          </FormHelperText>
        )}
        {loanTenure !== undefined &&
          (loanTenure < MIN_LOAN_TENURE_YEARS ||
            loanTenure > MAX_LOAN_TENURE_YEARS) && (
            <FormHelperText error>
              Loan tenure can only be between 1 to 30 years
            </FormHelperText>
          )}
        {calculateAttempt &&
          (loanTenure < MIN_LOAN_TENURE_YEARS ||
            loanTenure > MAX_LOAN_TENURE_YEARS ||
            loanTenure === undefined) && (
            <FormHelperText error>
              Loan tenure can only be between 1 to 30 years
            </FormHelperText>
          )}
      </FormControl>
    </div>
  );
}
