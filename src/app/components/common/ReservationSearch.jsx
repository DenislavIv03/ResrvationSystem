import { Search } from "@mui/icons-material"
import { Divider, IconButton, InputBase, Paper } from "@mui/material"
import { useState } from "react";

function ReservationSearch() {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          alignItems: "center",
          width: "400px",
          maxWidth: "calc(100% - 2rem)",
          p: 1
        }}
      >
        <InputBase 
          placeholder="Search reservation"
          inputProps={{"aria-label": "search reservation"}}
          value={searchValue}
          onChange={handleChange}
          sx={{
            flexGrow: 1,
            mr: 1.2
          }}
        />
        <Divider sx={{height: "auto", alignSelf: "stretch", mr: 1.2, ml: "auto",}} orientation="vertical"/>
        <IconButton type="submit">
          <Search />
        </IconButton>

      </Paper>
    </>
  )
}

export default ReservationSearch