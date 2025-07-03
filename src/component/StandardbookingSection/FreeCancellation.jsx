import { CiWallet } from "react-icons/ci";
import { RiShieldCheckLine } from "react-icons/ri";

function FreeCancellation() {
  return (
    <div className="flex flex-col justify-between border p-3 rounded-xl min-h-[180px] cursor-pointer border-stone-500 col-start-3">
      <span className="hidden lg:block mb-2 whitespace-nowrap min-w-40 text-start text-sm font-bold">
        Free cancellation
      </span>
      <ul className=" flex flex-col gap-2">
        <li className="flex gap-1 items-center ">
          <CiWallet className="h-3 w-3 shrink-0" />
          <span className="text-xs/[10px] text-stone-500">
            Payment at the hotel: US$99
          </span>
        </li>
        <li className="flex gap-1 items-center ">
          <CiWallet className="h-3 w-3 shrink-0" />
          <span className="text-xs/[10px] text-stone-500">
            Additional service fee to pay online US$5
          </span>
        </li>
        <li className="flex gap-1 items-center ">
          <RiShieldCheckLine className="h-3 w-3 shrink-0 text-cyan-600" />
          <span className="text-xs/[10px] text-cyan-600">
            Free cancellation (excluding pre-payment)
          </span>
        </li>
      </ul>
      <span className="text-right justify-self-end text-2xl font-bold whitespace-nowrap">
        US$99
      </span>
    </div>
  );
}

export default FreeCancellation;
