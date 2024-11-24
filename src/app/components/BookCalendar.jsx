import { Box, Button, Fade, Modal } from "@mui/material"
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { reserveDate, selectCalendarDates } from "../../features/slices/bookCalendarSlice"

function BookCalendar() {
  
  const dispatch = useDispatch();
  const reservedDates = useSelector(selectCalendarDates)

  const [open, setOpen] = useState(false);
  const [selectedDate,setSelectedDate] = useState(null);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handlePickerChange = (newDate) => setSelectedDate(newDate);

  const handleSaveChanges = () => {
    if(selectedDate) {
        dispatch(reserveDate(selectedDate.toString()))
    }
    setOpen(false);
    setSelectedDate(null);
  }
  
  return (
    <>
        <Button onClick={handleOpen}>Open Modal</Button>

        <Modal
         open={open}
         onClose={handleClose}
         >
            <Fade in={open} >
                <Box sx={{bgcolor: "white"}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            value={selectedDate}
                            onChange={handlePickerChange}
                        />
                    </LocalizationProvider>
                    <Button onClick={handleSaveChanges}>Save Changes</Button>
                </Box>
            </Fade>
        </Modal>
    </>
  )
}

export default BookCalendar