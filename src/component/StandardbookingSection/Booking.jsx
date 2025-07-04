import BookingCard from "./BookingCard"

function Booking() {
  return (
    <div className="flex flex-col items-start pt-8" >
        <span className="text-xl md:text-3xl/[38px] font-semibold">Standard booking</span>
        <BookingCard />
    </div>
  )
}

export default Booking