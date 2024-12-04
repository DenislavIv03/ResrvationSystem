import { Search } from "@mui/icons-material"
import { Divider, IconButton, InputBase, Paper } from "@mui/material"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setListFilter } from "../../../features/slices/hotelSlice";
import { TailSpin } from "react-loader-spinner"

function ReservationSearch({ loading, setLoading }) {

  const dispatch = useDispatch();

  const [searchFilter, setSearchFilter] = useState("")
  
  const handleChange = (e) => {
    setSearchFilter(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setListFilter(searchFilter))
  }

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      dispatch(setListFilter(searchFilter));
      setLoading(false)
    }, 1000)

    if(searchFilter) {
      setLoading(true);
    }
    
    return () => {
      clearTimeout(timeout)
    }

  },[searchFilter])

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

      <TailSpin visible={loading} width={50} height={50} color="gray" ariaLabel="search loading" />
    </>
  )
}

export default ReservationSearch