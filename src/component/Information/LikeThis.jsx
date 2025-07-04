import { useState } from "react";

function LikeThis() {
  const $div = "rounded-lg md:shadow-3xl w-full md:px-6 md:p-6";
  const $img = "w-4 h-4 mt-1";
  const $title = "mb-4 text-lg font-semibold uppercase md:normal-case";
  const $list = " flex justify-start gap-5";
  const $text =
    "text-sm/[22px] text-stone-600 font-medium tracking-wider text-start";
  const $Details = [
    {
      key: 1,
      $Img: "https://dayuse.twic.pics/new-brand-hotel-highlight-icon/room.png?twic=v1/cover=48/quality=75",
      $Title: "Comfy room",
      $Text:
        "Get cozy in your super comfy room with the ability to play music in your soothing Monsoon shower, a heated shower rack and a snuggly bed to relax.",
    },
    {
      key: 2,
      $Img: "https://dayuse.twic.pics/new-brand-hotel-highlight-icon/bar.png?twic=v1/cover=48/quality=75",
      $Title: "Upmost friendliness",
      $Text:
        "Head up high to one of the city’s largest hotel rooftop spaces shaking up crafty cocktails and delicious meals.",
    },
    {
      key: 3,
      $Img: "https://dayuse.twic.pics/new-brand-hotel-highlight-icon/wow.png?twic=v1/cover=48/quality=75",
      $Title: "Must-see",
      $Text:
        "YOBOT is the handy helper during your stay as the world’s first robotic luggage concierge.",
    },
  ];

  const [Details] = useState($Details);

  return (
    <div className={$div}>
      <h2 className={$title}>We're liking this</h2>
      <ul className=" flex flex-col gap-3 ">
        {Details.map((Detail) => (
          <li className={$list}>
            <img src={Detail.$Img} alt="" className={$img} />
            <div>
              <span className="block md:hidden text-sm/[18px] font-semibold">
                {Detail.$Title}
              </span>
              <p className={$text}>{Detail.$Text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LikeThis;
