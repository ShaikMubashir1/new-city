function RoomFacilities() {
  const $RoomList = "sr-only lg:not-sr-only text-xs text-stone-500 ";
  const $list = "flex justify-start items-center";
  const $Icons = "w-4 h-4 lg:my-2 mr-2 lg:mr-2";
  return (
    <div className=" hidden lg:max-w-[28rem] lg:flex lg:flex-col lg:bg-white">
      <span className="hidden lg:block mb-2 whitespace-nowrap min-w-40 text-start text-sm font-bold	 ">
        Room facilities
      </span>
      <div className="hidden lg:block">
        <ul className=" flex flex-col gap-2">
          <li className={$list}>
            <img
              src="https://dayuse.twic.pics/equipments/385c6dc49086192d74f3b23ae6f6dc19-acces-a-mobilite-reduite-sur-demande-38.svg"
              alt=""
              className={$Icons}
            />
            <span className={$RoomList}>
              Wheelchair accessibility (on request)
            </span>
          </li>
          <li className={$list}>
            <img
              src="https://dayuse.twic.pics/equipments/ea4fb75f46d476841e0cd6a2f4748b39-wifi-gratuit-36.svg"
              alt=""
              className={$Icons}
            />
            <span className={$RoomList}>Free WiFi</span>
          </li>
          <li className={$list}>
            <img
              src="https://dayuse.twic.pics/equipments/ce0e1a2d918b010b36c31d94d4c5f2f3-bureau-32.svg"
              alt=""
              className={$Icons}
            />
            <span className={$RoomList}>Desk</span>
          </li>
          <li className={$list}>
            <span
              className={`${$RoomList} underline text-violet-600 cursor-pointer`}
            >
              +6 Amenities
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RoomFacilities;
