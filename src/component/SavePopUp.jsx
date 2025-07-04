import LogoImg from "../assets/SavePopUp.png";
import { TfiClose } from "react-icons/tfi";

function SavePopUp({ open, onClose }) {
  const $btn =
    "flex justify-center items-center text-black rounded-full px-14 cursor-pointer h-[52px] ";
  return (
    <div
      className={`flex justify-center items-center fixed inset-0 w-full z-30 transition-colors ${
        open ? "visible bg-black/50" : "invisible"
      }`}
      onClick={onClose}
    >
      <section
        className=" flex flex-col absolute bg-white rounded-2xl px-10 py-10 shadow-3xl text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <TfiClose
          className=" absolute right-5 top-5 cursor-pointer"
          onClick={onClose}
        />
        <div className=" flex justify-center ">
          <img src={LogoImg} alt="LogoImg" className="h-[190px] w-[190px]" />
        </div>
        <div className="text-lg font-semibold mb-8 text-black">
          Added to your favourites
        </div>
        <div className="mb-3">
          <a href="#" className="text-xs/5 uppercase underline text-stone-500">
            YOTEL New York Times Square
          </a>
        </div>
        <div>
          <p className="mb-8 lg:w-72 m-auto text-sm text-stone-600">
            Access all your favourites in one click and enjoy our best offers
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-6 justify-center self-stretch">
          <a href="#" className={`${$btn} bg-yellow-400 hover:bg-yellow-500`}>
            View my favourites
          </a>
          <button
            className={`${$btn} border border-black hover:bg-stone-100`}
            onClick={onClose}
          >
            Continue browsing
          </button>
        </div>
      </section>
    </div>
  );
}

export default SavePopUp;
