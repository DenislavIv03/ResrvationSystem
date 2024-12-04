import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { useSelector } from "react-redux"
import { selectCalendarDates } from "../../features/slices/bookCalendarSlice"
import DummyHotelSearch from "./DummyHotelSearch"

function UserReservations() {

  const rows = useSelector(selectCalendarDates)
  
  const columns = [
    {field: 'hotelName', headerName: 'Name', width: 200},
    {field: 'hotelPrice', headerName: 'Price', width: 200},
    {field: 'reservationDate', headerName: 'Reservation Date', width: 200},
  ] 

  return (
    <>
        <h1>My Reservations</h1>

        <DummyHotelSearch />

        <DataGrid
            rows={rows}
            columns={columns}
            slots={{toolbar: GridToolbar}}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              }
            }}
            sx={{
                width: 1000,
                maxWidth: "calc(100% - 2rem)",
                mx: "auto",
            }}
         />
    </>
  )
}

export default UserReservations