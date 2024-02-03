import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { pokemonTypes } from "../pokemonTypes";
import { FTextField } from "./form";

export default function PokeTypeList({ name }) {
  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <FTextField
        id="outlined-select-currency"
        name={name}
        select
        label="Types"
        defaultValue={"select"}
        sx={{ backgroundColor: "white", color: "green" }}
      >
        {pokemonTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </FTextField>
    </Box>
  );
}
