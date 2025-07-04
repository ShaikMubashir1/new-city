import { useState } from "react";
import { CiWallet } from "react-icons/ci";
import { RiShieldCheckLine } from "react-icons/ri";

function FreeCancellation() {
  const $icon = "h-3 w-3 shrink-0";
  const $text = "md:text-xs/[10px] text-xs/[15px] ";
  const $list = "flex gap-1 items-center text-stone-500 last:text-cyan-600 ";

  const FreeList = [
    {
      key: "01",
      $Icon: <CiWallet />,
      $Text: "Payment at the hotel: US$99",
    },
    {
      key: "02",
      $Icon: <CiWallet />,
      $Text: "Additional service fee to pay online US$5",
    },
    {
      key: "03",
      $Icon: <RiShieldCheckLine />,
      $Text: "Free cancellation (excluding pre-payment)",
    },
  ];
  const [freeList] = useState(FreeList);

  return (
    <div className="flex flex-col justify-between sm:border p-3 rounded-xl md:min-h-[180px] min-h-fit cursor-pointer border-stone-500 md:col-start-3 ">
      <span className="hidden lg:block mb-2 whitespace-nowrap min-w-40 text-start text-sm font-bold">
        Free cancellation
      </span>
      <ul className=" flex flex-col text-start md:gap-2 gap-3 ">
        {freeList.map((Detail) => (
          <li className={$list}>
            {Detail.$Icon}
            <span className={$text}>{Detail.$Text}</span>
          </li>
        ))}
      </ul>
      <span className=" hidden md:block text-right justify-self-end text-2xl font-bold whitespace-nowrap">
        US$99
      </span>
    </div>
  );
}

export default FreeCancellation;
