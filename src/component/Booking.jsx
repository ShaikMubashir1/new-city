import BookingCard from "./BookingCard"

function Booking() {
  return (
    <div className="flex flex-col items-start" >
        <span className="text-3xl ">Standard booking</span>
        <BookingCard />
    </div>
  )
}

export default Booking