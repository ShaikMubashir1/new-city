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
    " flex justify-center bg-white py-3 px-5 text-xs h-fit font-medium hover:text-violet-400 gap-1 items-start";
  return (
    <div className="flex justify-between mt-4  md:mt-0 md:mb-8 md:mx-0 md:order-2 ">
      <div className="">
        <h1 className="font-bold text-4xl ">YOTEL New York Times Square</h1>
      </div>
      <div className=" flex justify-between ">
        <div className=" relative">
          <button
            className={`${$btn}`}
            onClick={() => {
              setShow(!show);
            }}
          >
            <BsSend className="w-4 h-4" />
            <span> Share</span>
          </button>
          <SharePopUp show={show} />
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
          <span> Save</span>
        </button>
      </div>
      <SavePopUp open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
