import { useSelector } from "react-redux"
import { getVisibleHotels, selectHotels } from "../../features/slices/hotelSlice"
import BookCalendar from "./BookCalendar"
import ReservationSearch from "./common/ReservationSearch"
import { useState } from "react"

function DummyHotelSearch() {
  const [filter,setFilter] = useState(null)
  const hotels = useSelector(selectHotels)
 
  const getFilteredHotels = useSelector(getVisibleHotels);

  return (
    <>
        <ReservationSearch filter={(searchFilter) => setFilter(searchFilter)}/>
        {getFilteredHotels.map(hotel => {
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