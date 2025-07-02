import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosCopy } from "react-icons/io";

function SharePopUp({ show, onCloseShow }) {
  const $list =
    "flex gap-3 whitespace-nowrap w-full items-center text-left cursor-pointer text-base/4";
  return (
    <div
      className={`flex justify-center items-center fixed md:absolute inset-0 w-full z-10 transition-colors ${
        show ? "visible  md:bg-transparent bg-black/50 " : "invisible"
      }`} onClick={onCloseShow}
    >
      <div
        className={`absolute flex flex-col md:w-fit w-full max-w-sm shadow-3xl md:top-0 md:right-0 px-8 bg-white rounded-3xl mt-12 space-y-9 py-8 z-10 hover:text-black text-black ${
          show ? "visible " : "invisible"
        }`} onClick={(e) => e.stopPropagation()}
      >
        <ul className="flex flex-col gap-9">
          <li className="flex gap-3 whitespace-nowrap w-full items-center text-left cursor-pointer text-base/4">
            <FaFacebookF /> Share on Facebook
          </li>
          <li className={$list}>
            <FaTwitter /> Share on Twitter
          </li>
          <li className={$list}>
            <MdEmail /> Share by email
          </li>
          <li className={$list}>
            <IoIosCopy /> Copy link
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SharePopUp;
