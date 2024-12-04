import { useSelector } from "react-redux"
import { getVisibleHotels, selectHotels } from "../../features/slices/hotelSlice"
import BookCalendar from "./BookCalendar"
import ReservationSearch from "./common/ReservationSearch"
import { useState } from "react"
import ReservationCard from "./ReservationCard"

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
                    <ReservationCard
                      thumbnail={hotel.thumbnail}
                      title={hotel.title}
                      price={hotel.price}
                    />
                    <BookCalendar for={hotel.id}/>
                </div>
            )
        })}
    </>
  )
}

export default DummyHotelSearch