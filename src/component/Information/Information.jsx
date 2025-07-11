import { MdHomeFilled } from "react-icons/md";
import { BiSolidMessageRoundedCheck } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";

function Information() {
  const $div = "rounded-lg md:shadow-3xl w-full px-6 md:p-6";
  const $title = "mb-4 text-lg font-semibold";
  const $text =
    "text-sm/[22px] text-stone-600 font-medium tracking-wider text-start";

  return (
    <div className={$div}>
      <h2 className={`${$title} md:block hidden`}>Information</h2>
      <div className=" flex">
        <ul className="flex flex-col items-start md:items-stretch h-full gap-6 pr-4 flex-1 text-sm/[22px]">
          <li className="flex gap-2">
            <MdHomeFilled className="h-5 w-5 mt-1" />
            <p className={$text}>570 10th Avenue, New York, NY, USA</p>
          </li>
          <li className="flex gap-2">
            <BiSolidMessageRoundedCheck className="w-5 h-5 mt-1" />
            <p className={`${$text} flex gap-2`}>
              4.3/5 <span className="text-stone-300">|</span>
              <span className="flex gap-2 cursor-pointer">
                137 Reviews <MdKeyboardArrowRight className="h-4 mt-1 " />
              </span>
            </p>
          </li>
        </ul>
        <div className="md:w-[300px] md:h-[155px]">
          <div className=" flex md:justify-center rounded-xl m-auto h-full md:items-center align-middle md:bg-[url('https://dayuse.twic.pics/map/map-sunrise-brand.jpg')] bg-cover bg-no-repeat bg-center ">
            <button className=" bg-white border border-black md:border-none md:shadow-3xl py-3 px-5 rounded-full text-xs/[12px] h-fit font-medium hover:bg-slate-50 ">
              View map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
