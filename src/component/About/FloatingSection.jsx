import { FaStar } from "react-icons/fa";
import { RiAppsFill } from "react-icons/ri";
import ShareBtn from "../ShareBtn";
import LikeBtn from "../LikeBtn";

function FloatingSection() {
  return (
    <div className=" shadow-3xl sticky top-20 float-right p-6 rounded-2xl w-full z-20">
      <h2 className="font-bold text-2xl text-black mb-4 line-clamp-3">
        YOTEL New York Times Square
      </h2>
      <div className="flex flex-row flex-wrap justify-between mb-3">
        <span className="my-auto inline-flex pt-2">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </span>
        <div className="relative flex">
          <div className="flex gap-x-3 md:gap-x-0 ">
            <ShareBtn />
            <LikeBtn />
          </div>
        </div>
      </div>
      <div className="relative w-full mb-5 ">
        <div>
          <img
            src="https://dayuse.twic.pics/hotels/16035/47bfabad18150d65a6bfc738c14f0829-yotel-new-york-city.jpg?twic=v1/cover=1080/quality=75"
            alt=""
            className="object-cover rounded-xl w-full h-56"
          />
        </div>
        <button className="flex justify-center select-none items-center text-black bg-white cursor-pointer  rounded-full py-3 px-5 absolute gap-x-1 bottom-4 right-4 p-3 font-medium text-xs/3 hover:bg-slate-100 ">
          <RiAppsFill className="h-4 w-4" />
          See photos
        </button>
      </div>
      <div className="flex flex-row justify-between space-x-2">
        <div className="flex flex-col">
          <span className="text-xs text-stone-500">From</span>
          <span className="font-bold text-3xl text-right text-black">
            US$84
          </span>
        </div>
        <button className="flex justify-center items-center text-black rounded-full px-7 cursor-pointer h-[52px] bg-yellow-400 hover:bg-yellow-500">
          Reserve a room
        </button>
      </div>
    </div>
  );
}

export default FloatingSection;
