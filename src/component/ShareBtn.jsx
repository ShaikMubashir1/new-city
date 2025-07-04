import { BsSend } from "react-icons/bs";
import SharePopUp from "./SharePopUp";
import { useState } from "react";

function ShareBtn() {
  const [show, setShow] = useState(false);
  const $btn =
    " flex justify-center bg-white md:py-3 md:px-5 p-2 rounded-full text-xs h-fit font-medium hover:text-violet-400 gap-1 md:shadow-none shadow-3xl items-start";
  return (
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
  );
}

export default ShareBtn;
