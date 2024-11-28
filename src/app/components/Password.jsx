import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";

const Password = ({label, value,handleChange}) => {
  const [showPassword,setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
    <TextField
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label={
                showPassword ? "hide the password" : "display the password"
              }
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      id="outlined-controlled"
      label={label}
      value={value}
      onChange={(event) => {
        handleChange(event.target.value);
      }}
    />
  );
};

export default Password;
