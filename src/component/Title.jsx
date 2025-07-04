import { FaStar } from "react-icons/fa";
import ShareBtn from "./ShareBtn";
import LikeBtn from "./LikeBtn";

export default function Title() {
  return (
    <div className="flex justify-between mt-4 mx-4 md:mt-0 md:mb-8 md:mx-0 ">
      <div className=" flex flex-wrap gap-1">
        <h1 className=" text-start font-bold md:text-4xl text-2xl">
          YOTEL New York Times Square
        </h1>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className=" flex justify-between md:gap-0 gap-3 invisible md:visible ">
        <ShareBtn />
        <LikeBtn />
      </div>
    </div>
  );
}
