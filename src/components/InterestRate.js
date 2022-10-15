import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";

// Controls interest rate and error messages
export function InterestRate({
  interestRate,
  handleInterestChange,
  calculateAttempt,
}) {
  let regexp = /^\+?[0-9]*(\.[0-9]{0,2})?$/;
  let passRegexp = regexp.test(interestRate);

  return (
    <div>
      <FormControl
        sx={{ m: 2, width: "90%", maxWidth: "500px" }}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-interestrate">
          Interest Rate
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-interestrate"
          value={interestRate}
          onChange={handleInterestChange}
          endAdornment={<InputAdornment position="end">%</InputAdornment>}
          label="Interest Rate"
        />
        {/* <InputLabel htmlFor="outlined-adornment-interestrate2">
          Interest Rate
        </InputLabel>
        <TextField
          id="outlined-adornment-interestrate2"
          value={interestRate}
          onChange={handleInterestChange}
          InputProps={{endAdornment: <InputAdornment position="end">%</InputAdornment>,}}
          label="Interest Rate"
        /> */}
        {!passRegexp && interestRate !== undefined && (
          <FormHelperText error>
            Interest rate can only be positive numbers and up to 2 decimal
            places
          </FormHelperText>
        )}
        {calculateAttempt && interestRate === undefined && (
          <FormHelperText error>
            Interest rate can only be positive numbers and up to 2 decimal
            places
          </FormHelperText>
        )}
      </FormControl>
    </div>
  );
}
