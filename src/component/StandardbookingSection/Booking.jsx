import BookingCard from "./BookingCard"

function Booking() {
  return (
    <div className="flex flex-col items-start pt-8" >
        <span className="text-3xl font-semibold">Standard booking</span>
        <BookingCard />
    </div>
  )
}

export default Booking