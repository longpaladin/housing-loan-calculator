import * as React from "react";
import Button from "@mui/material/Button";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

// Reset all fields to 0 or nothing
export function ResetButton({ resetAll }) {
  return (
    <Button variant="contained" color="error" size="large" onClick={resetAll}>
      Reset &nbsp; <RestartAltIcon sx={{fontSize: "20px"}}/>
    </Button>
  );
}
