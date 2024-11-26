import { Box, Button, Fade, Modal, Typography } from "@mui/material"
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { reserveDate, selectCalendarDates } from "../../features/slices/bookCalendarSlice"
import dayjs from "dayjs"

function BookCalendar() {
  
  const dispatch = useDispatch();
  const reservedDates = useSelector(selectCalendarDates)

  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState(null)
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handlePickerChange = (newDate) => setSelectedDate(newDate);
  const handleError = (newError) => setError(newError);

  const shouldDisableDates = (dateForDisable) => {
    return reservedDates.some(date =>
         dateForDisable.isSame(dayjs(date),'day')
    )
  }

  const shouldDisableTime = (timeForDisable,view) => {

    if(view == 'hours' || view == 'seconds') return false;

    if(timeForDisable.minute() !== 0 &&
       timeForDisable.minute() !== 30) return true;

    return reservedDates.some(date => dayjs(date).isSame(timeForDisable,'minute'))
  }

  const handleSaveChanges = () => {
    if(error) return;
    
    if(selectedDate) {
        dispatch(reserveDate(selectedDate.toString()))
    }
    setOpen(false);
    setSelectedDate(null);
  }
  
  return (
    <>
        <Button
         sx={{
          border:"3px solid green",
          color: "green",
          display: "inline-block",
          textTransform: "unset",
          py: 0.5,
          px: 1.2,
         }}
         onClick={handleOpen}
         >Book
         </Button>

        <Modal
         sx={{
            width: 700,
            maxWidth: 'calc(100% - 2.5rem)',
            marginInline: 'auto',
            marginBlock: 2,
         }}
         open={open}
         onClose={handleClose}
         closeAfterTransition
         disableRestoreFocus
         >
            <Fade in={open} >
                <Box
                 sx={{
                    bgcolor: "white",
                    p: 2,
                    borderRadius: 2
                 }}>
                    <Typography variant="h4" sx={{mb: 2,}}>Reserve Service</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="Select date and time"
                            // shouldDisableDate={shouldDisableDates}
                            shouldDisableTime={shouldDisableTime}
                            showDaysOutsideCurrentMonth
                            minDate={dayjs(new Date())}
                            value={selectedDate}
                            onChange={handlePickerChange}
                            onError={handleError}
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