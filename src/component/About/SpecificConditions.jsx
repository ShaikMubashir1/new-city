import { LuWallet } from "react-icons/lu";
import { GrStorage } from "react-icons/gr";

function SpecificConditions() {
  const $ul = "list-disc list-inside text-sm text-stone-600 ml-2";
  const $h3 = " flex justify-start items-center text-base font-semibold gap-3";
  const $Icon = " text-purple-600 w-6 h-6 ";
  return (
    <div className=" flex flex-col my-5 md:mt-0 md:mb-14">
      <span className="text-xl font-semibold mb-4 md:mb-8 uppercase">
        Specific Conditions
      </span>
      <div className="flex flex-col space-y-4">
        <div className="flex-col space-y-3">
          <h3 className={$h3}>
            <LuWallet className={$Icon} /> Payment information
          </h3>
          <ul className={$ul}>
            <li>Cash payment is not available in this hotel</li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className={$h3}>
            <GrStorage className={$Icon} /> Deposit information
          </h3>
          <ul className={$ul}>
            <li>There is no deposit requested upon checkin</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SpecificConditions;
