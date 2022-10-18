import * as React from "react";
import FormControl from "@mui/material/FormControl";
import Slider from "@mui/material/Slider";

// Controls loan tenure and error messages
export function LoanTenure({
  loanTenure,
  handleLoanTenureChange,
}) {
  return (
    <div>
      <FormControl
        sx={{ m: 2, width: "90%", maxWidth: "470px" }}
        variant="outlined"
      >
        <p
          style={{
            margin: "0 0 10px 0",
            fontFamily: "Helvetica",
            fontSize: "12px",
            textAlign: "left",
            color: "rgba(0,0,0,0.6)"
          }}
        >
          Loan Tenure
        </p>
        <Slider
          defaultValue={30}
          step={1}
          min={1}
          max={30}
          aria-label="Default"
          valueLabelDisplay="auto"
          value={loanTenure}
          onChange={handleLoanTenureChange}
          sx={{ color: "#006d5b", marginBottom: "10px" }}
        />
      </FormControl>
    </div>
  );
}
