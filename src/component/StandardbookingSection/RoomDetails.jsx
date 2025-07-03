import { IoIosArrowForward } from "react-icons/io";
import { FaUser } from "react-icons/fa";

function RoomDetails() {
  return (
    <div className=" relative pr-3 px-5 py-6 lg:px-6 w-full lg:w-[400px] bg-stone-50">
      <h3 className="text-start font-bold text-lg">Standard Queen Room</h3>
      <div className=" flex flex-wrap md:mt-2 mb-2 items-center text-xs text-stone-500">
        170 sq. ft • Queen bed • <FaUser className=" mx-1" /> x2
      </div>
      <button className=" uppercase tracking-[.17em] cursor-pointer hover:underline text-xs leading-6 [&:hover>svg:last-child]:translate-x-2 pr-4 items-center hidden absolute bottom-0 mb-5 lg:flex ">
        See more details
        <IoIosArrowForward className="ml-2 duration-150 shrink-0 h-[10px] w-[10px]" />
      </button>
    </div>
  );
}

export default RoomDetails;
