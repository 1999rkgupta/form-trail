import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function NativePickers() {
  return (
    <Stack component="form" noValidate spacing={3}>
      <TextField
        id="date"
        label="Date of birth"
        type="date"
        sx={{ width: "280px" }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Stack>
  );
}
