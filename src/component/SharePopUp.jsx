import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosCopy } from "react-icons/io";

function SharePopUp({show}) {
  const $list =
    "flex gap-3 whitespace-nowrap w-full items-center text-left cursor-pointer text-base/4";
  return (
    <div
      className={`absolute flex flex-col w-fit shadow-3xl top-0 right-0 px-8 bg-white rounded-3xl mt-12 space-y-9 py-8 z-10 hover:text-black text-black ${
        show ? "visible " : "invisible"
      }`}
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
  );
}

export default SharePopUp;
