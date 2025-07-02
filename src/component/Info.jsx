import { MdHomeFilled } from "react-icons/md";
import { BiSolidMessageRoundedCheck } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";

function Info() {
  const $div = "rounded-lg shadow-3xl w-full p-6";
  const $title = "mb-4 text-lg font-semibold";
  const $text =
    "text-sm/[22px] text-stone-600 font-medium tracking-wider text-start";
  const $img = "w-4 h-4 mt-1";
  const $list = " flex justify-between md:justify-start gap-5";
  return (
    <div className=" flex my-6 lg:flex-row flex-col text-start gap-6">
      <div className={$div}>
        <h2 className={$title}>We're liking this</h2>
        <ul className=" flex flex-col gap-3">
          <li className={$list}>
            <img
              src="https://dayuse.twic.pics/new-brand-hotel-highlight-icon/room.png?twic=v1/cover=48/quality=75"
              alt=""
              className={$img}
            />
            <p className={$text}>
              Get cozy in your super comfy room with the ability to play music
              in your soothing Monsoon shower, a heated shower rack and a
              snuggly bed to relax.
            </p>
          </li>
          <li className={$list}>
            <img
              src="https://dayuse.twic.pics/new-brand-hotel-highlight-icon/bar.png?twic=v1/cover=48/quality=75"
              alt=""
              className={$img}
            />
            <p className={$text}>
              Head up high to one of the city’s largest hotel rooftop spaces
              shaking up crafty cocktails and delicious meals.
            </p>
          </li>
          <li className={$list}>
            <img
              src="https://dayuse.twic.pics/new-brand-hotel-highlight-icon/wow.png?twic=v1/cover=48/quality=75"
              alt=""
              className={$img}
            />
            <p className={$text}>
              YOBOT is the handy helper during your stay as the world’s first
              robotic luggage concierge.
            </p>
          </li>
        </ul>
      </div>
      <div className={$div}>
        <h2 className={$title}>Information</h2>
        <div className=" flex">
          <ul className="flex flex-col items-start md:items-stretch h-full gap-6 pr-4 flex-1 text-sm/[22px]">
            <li className="flex gap-2">
              <MdHomeFilled className="h-5 w-5 mt-1" />
              <p className={$text}>570 10th Avenue, New York, NY, USA</p>
            </li>
            <li className="flex gap-2">
              <BiSolidMessageRoundedCheck className="w-5 h-5 mt-1" />
              <p className={`${$text} flex gap-2`}>
                4.3/5 <span className="text-stone-300">|</span>{" "}
                <span className="flex gap-2 cursor-pointer">
                  137 Reviews <MdKeyboardArrowRight className="h-4 mt-1 " />
                </span>
              </p>
            </li>
          </ul>
          <div className="md:w-[300px] md:h-[155px]">
            <div className=" flex justify-center rounded-xl m-auto h-full items-center align-middle md:bg-[url('https://dayuse.twic.pics/map/map-sunrise-brand.jpg')] bg-cover bg-no-repeat bg-center ">
              <button className=" bg-white shadow-3xl py-3 px-5 rounded-full text-xs/[12px] h-fit font-medium hover:bg-slate-50">
                View map
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
