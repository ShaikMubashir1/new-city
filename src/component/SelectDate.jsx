import { LuCalendarDays } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function SelectDate() {
  const $Arrow =
    "flex justify-center select-none items-center shadow-3xl bg-white rounded-full hover:bg-stone-50 h-[52px] w-[52px]";
  const $Icon = "w-5 h-5";
  const date = new Date();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div id="Offers" className=" mt-8 mb-8 rounded-2xl bg-stone-50">
      <div className="bg-gradient-to-r from-amber-400 from-20% via-orange-500 via-40% to-teal-200 to-60% rounded-t-2xl h-[54px] md:h-[46px] flex justify-center items-center">
        <p className=" uppercase tracking-widest text-sm">Select your day</p>
      </div>
      <div className="py-8 flex justify-center">
        <button className={$Arrow}>
          <IoIosArrowBack className={$Icon} />
        </button>
        <button className="flex justify-center select-none items-center shadow-3xl bg-white rounded-3xl hover:bg-stone-50 h-[52px] px-7 w-[166px] md:w-[220px] mx-3 md:mx-5 gap-2">
          <LuCalendarDays className={$Icon} />
          {`${day} ${month}`}
        </button>
        <button className={$Arrow}>
          <IoIosArrowForward className={$Icon} />
        </button>
      </div>
    </div>
  );
}

export default SelectDate;
