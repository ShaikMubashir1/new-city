function SelectBar() {
  const $list =
    "md:order-1 px-5 md:px-6 pb-3 whitespace-nowrap md:text-sm text-sm/[22px] text-stone-600 font-medium tracking-wider border-b-2";
  return (
    <div className=" cursor-pointer">
      <ul className="flex justify-center items-start mt-10 overflow-x-auto md:mx-auto ">
        <li className={`${$list}`}>Overview</li>
        <li className={`${$list}`}>Offers</li>
        <li className={`${$list}`}>Description</li>
        <li className={`${$list}`}>FAQ</li>
        <li className={`${$list}`}>Location</li>
        <li className={`${$list}`}>Customer Reviews</li>
      </ul>
    </div>
  );
}

export default SelectBar;
