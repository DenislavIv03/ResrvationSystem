import { Search } from "@mui/icons-material"
import { Divider, IconButton, InputBase, Paper } from "@mui/material"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setListFilter } from "../../../features/slices/hotelSlice";

function ReservationSearch({ filter }) {

  const dispatch = useDispatch();

  const [searchFilter, setSearchFilter] = useState("")

  const handleChange = (e) => {
    setSearchFilter(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setListFilter(searchFilter))
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
          value={searchFilter}
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