import ReserveButton from "./ReserveButton";

function BookingReserve() {
  return (
    <div className=" lg:w-auto lg:py-6 md:pl-0 my-auto flex flex-col gap-2 items-center bg-white w-full">
      <div className=" flex flex-col ">
        <span className=" text-3xl text-right font-semibold">US$99</span>
        <p className="text-xs flex gap-1 justify-center items-center py-2 ">
          <span className=" bg-black rounded-xl text-white px-2">-63%</span>
          <span className=" text-stone-400 line-through">US$279 at night</span>
        </p>
      </div>
      <div className=" hidden md:block">
        <ReserveButton />
      </div>
    </div>
  );
}

export default BookingReserve;
