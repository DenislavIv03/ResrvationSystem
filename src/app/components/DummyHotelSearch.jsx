import { useSelector } from "react-redux"
import { getVisibleHotels, selectHotels } from "../../features/slices/hotelSlice"
import BookCalendar from "./BookCalendar"
import ReservationSearch from "./common/ReservationSearch"
import { useState } from "react"

function DummyHotelSearch() {
  const [filter,setFilter] = useState(null)
  const [isLoading,setIsLoading] = useState(false)
 
  const getFilteredHotels = useSelector(getVisibleHotels);

  return (
    <>
        <ReservationSearch 
          loading={isLoading}
          setLoading={(loading) => setIsLoading(loading)}
        />

        {!isLoading && getFilteredHotels.map(hotel => {
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