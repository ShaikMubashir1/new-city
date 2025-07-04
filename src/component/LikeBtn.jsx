import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import SavePopUp from "./SavePopUp";

function LikeBtn() {
  const [open, setOpen] = useState(false);
  const [change, setChange] = useState(false);

  const $btn =
    " flex justify-center bg-white md:py-3 md:px-5 p-2 rounded-full text-xs h-fit font-medium hover:text-violet-400 gap-1 md:shadow-none shadow-3xl items-start";
  return (
    <div>
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
        <SavePopUp open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default LikeBtn;
