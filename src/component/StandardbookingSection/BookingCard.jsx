import { FaClock } from "react-icons/fa6";
import RoomFacilities from "./RoomFacilities";
import FreeCancellation from "./FreeCancellation";
import BookingReserve from "./BookingReserve";
import RoomDetails from "./RoomDetails";

function BookingCard() {

  return (
    <div className=" flex flex-col md:mt-[42px] w-full items-start  ">
      <div className=" flex justify-start items-center gap-2 text-xl font-semibold">
        <FaClock className=" text-orange-500" />
        5:00 AM - 11:00 AM
      </div>
      <div className=" w-full lg:px-0 lg:py-0 mt-6 bg-white shadow-3xl lg:rounded-3xl relative ">
        <hr className="h-10 bg-gradient-to-r from-amber-400 from-20% via-orange-500 via-40% to-teal-200 to-60% rounded-b-3xl w-full absolute -bottom-2 z-0 " />
        <section className=" flex bg-white w-full overflow-hidden lg:rounded-3xl ">
          <RoomDetails />
          <section className="flex flex-col w-full z-10">
            <div className="flex justify-between w-full bg-white pt-5 px-5 py-3 gap-6 rounded-t-3xl">
              <RoomFacilities />
              <div className="flex-1 flex gap-4 justify-end ">
                <FreeCancellation />
                <BookingReserve />
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default BookingCard;
