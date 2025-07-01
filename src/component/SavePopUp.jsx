import { TfiClose } from "react-icons/tfi";

function SavePopUp({ open, onClose }) {
  const $btn =
    "flex justify-center items-center text-black rounded-full px-7 cursor-pointer h-[52px] ";
  return (
    <div
      className={`flex justify-center items-center fixed inset-0 w-full z-10 transition-colors ${
        open ? "visible bg-black/50" : "invisible"
      }`}
      onClick={onClose}
    >
      <section
        className=" absolute bg-white w-1/2 rounded-2xl px-10 py-10 shadow-3xl text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <TfiClose
          className=" absolute right-5 top-5 cursor-pointer"
          onClick={onClose}
        />
        <div></div>
        <div className="text-lg font-semibold mb-8">
          Added to your favourites
        </div>
        <div className="mb-3">
          <a href="#" className="text-xs uppercase underline">
            YOTEL New York Times Square
          </a>
        </div>
        <div>
          <p className="mb-8 lg:w-72 m-auto">
            Access all your favourites in one click and enjoy our best offers
          </p>
        </div>
        <div className="w-full flex gap-6 justify-center">
          <a href="#" className={`${$btn} bg-yellow-300 hover:bg-yellow-400 `}>
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
