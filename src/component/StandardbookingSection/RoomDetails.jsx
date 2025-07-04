import { IoIosArrowForward } from "react-icons/io";
import { FaUser } from "react-icons/fa";

function RoomDetails() {
  return (
    <div className=" flex flex-col relative pr-3 px-5 py-6 lg:px-6 w-full lg:w-[400px] bg-stone-50">
      <h3 className="text-start font-bold text-base/[22px] md:text-lg">
        Standard Queen Room
      </h3>
      <div className=" flex flex-wrap md:mt-2 md:mb-2 items-center text-xs text-stone-500 mb-10">
        170 sq. ft • Queen bed • <FaUser className=" mx-1" /> x2
      </div>
      <button className=" flex flex-nowrap uppercase tracking-[.17em] cursor-pointer hover:underline text-xs leading-6 [&:hover>svg:last-child]:translate-x-2 pr-4 items-center absolute bottom-0 mb-5 ">
        See more details
        <IoIosArrowForward className="ml-2 duration-150 shrink-0 h-[10px] w-[10px] " />
      </button>
    </div>
  );
}

export default RoomDetails;
