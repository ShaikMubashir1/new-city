function ReserveButton() {
  return (
    <div className=" flex flex-col px-5">
      <button className="flex justify-center items-center text-black rounded-full px-7 cursor-pointer h-[52px] bg-yellow-400 hover:bg-yellow-500 ">
        Reserve
      </button>
      <span className=" text-stone-500 text-xs pt-2 pb-4 md:py-2">
        *Excluding taxes and fees
      </span>
    </div>
  );
}

export default ReserveButton;
