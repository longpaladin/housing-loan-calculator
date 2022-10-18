import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

// Simple dropdown menu
// Controls property type and error messages
export function PropertyType({
  handlePropertyChange,
  property,
  calculateAttempt,
}) {
  return (
    <FormControl sx={{ m: 2, width: "90%", maxWidth: "500px" }}>
      <InputLabel id="property-type">Property Type</InputLabel>
      <Select
        labelId="property-type"
        id="property-type"
        value={property}
        label="Property Type"
        onChange={handlePropertyChange}
      >
        <MenuItem value={"HDB"}>HDB</MenuItem>
        <MenuItem value={"Private Property"}>Private Property</MenuItem>
      </Select>

      {calculateAttempt &&
        property !== "HDB" &&
        property !== "Private Property" && (
          <FormHelperText error>Choose your property type</FormHelperText>
        )}
    </FormControl>
  );
}
