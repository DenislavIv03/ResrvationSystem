import { useSelector } from "react-redux"
import { selectHotels } from "../../features/slices/hotelSlice"
import BookCalendar from "./BookCalendar"
import ReservationSearch from "./common/ReservationSearch"

function DummyHotelSearch() {
  const hotels = useSelector(selectHotels)

  return (
    <>
        <ReservationSearch />
        {hotels.map(hotel => {
            return (
                <div key={hotel.id}>
                    <h3>{hotel.name}</h3>
                    <p>{hotel.price}$</p>
                    <BookCalendar for={hotel.id}/>
                </div>
            )
        })}
    </>
  )
}

export default DummyHotelSearch