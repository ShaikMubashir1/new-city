import { useState } from "react";
import { BsSend } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import SavePopUp from "./SavePopUp";
import SharePopUp from "./SharePopUp";

export default function Title() {
  const [open, setOpen] = useState(false);
  const [change, setChange] = useState(false);
  const [show, setShow] = useState(false);

  const $btn =
    " flex justify-center bg-white md:py-3 md:px-5 p-2 rounded-full text-xs h-fit font-medium hover:text-violet-400 gap-1 md:shadow-none shadow-3xl items-start";
  return (
    <div className="flex justify-between mt-4  md:mt-0 md:mb-8 md:mx-0 md:order-2 ">
      <div className="">
        <h1 className=" text-start font-bold md:text-4xl text-2xl">
          YOTEL New York Times Square
        </h1>
      </div>
      <div className=" flex justify-between md:gap-0 gap-3">
        <div className=" relative">
          <button
            className={`${$btn}`}
            onClick={() => {
              setShow(!show);
            }}
          >
            <BsSend className="w-4 h-4" />
            <span className=" hidden md:block"> Share</span>
          </button>
          <SharePopUp show={show} onCloseShow={() => setShow(false)} />
        </div>
        <button
          className={$btn}
          onClick={() => {
            setOpen(!change);
            setChange(!change);
          }}
        >
          {change ? (
            <FcLike className="w-4 h-4" />
          ) : (
            <CiHeart className="w-4 h-4" />
          )}
          <span className=" hidden md:block"> Save</span>
        </button>
      </div>
      <SavePopUp open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
