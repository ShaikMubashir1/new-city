function SelectBar() {
  const $list =
    "md:order-1 px-5 md:px-6 pb-3 whitespace-nowrap md:text-sm text-sm/[22px] text-stone-600 font-medium tracking-wider border-b-2 ";
  return (
    <div className=" cursor-pointer sticky -top-8 pt-1 bg-white z-20 ">
      <ul className="flex md:justify-center justify-start items-start mt-10 overflow-x-auto md:mx-auto ">
        <li className={`${$list} border-black text-stone-900`}><a href="#Overview">Overview</a></li>
        <li className={`${$list}`}><a href="#Offers">Offers</a></li>
        <li className={`${$list}`}><a href="#Description">Description</a></li>
        <li className={`${$list}`}>FAQ</li>
        <li className={`${$list}`}>Location</li>
        <li className={`${$list}`}>Customer Reviews</li>
      </ul>
    </div>
  );
}

export default SelectBar;
