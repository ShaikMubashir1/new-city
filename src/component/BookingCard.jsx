import { IoIosArrowForward } from "react-icons/io";

function BookingCard() {
  return (
    <div className=" flex flex-col md:mt-[42px] items-start">
      <div>5:00 AM - 11:00 AM</div>
      <section className=" flex mt-6 ">
        <div className=" relative pr-3 px-5 py-6 lg:px-6 w-full lg:w-[400px] shadow-3xl lg:rounded-l-3xl bg-stone-50">
          <h3 className="text-start">Standard Queen Room</h3>
          <div className=" flex flex-wrap md:mt-2 mb-2 items-center">
            170 sq. ft • Queen bed • x2
          </div>
          <button className=" uppercase tracking-[.17em] cursor-pointer hover:underline text-xs leading-6 [&:hover>svg:last-child]:translate-x-2 pr-4 items-center hidden absolute bottom-0 mb-5 lg:flex ">
            See more details{" "}
            <IoIosArrowForward className="ml-2 duration-150 shrink-0 h-[10px] w-[10px]" />
          </button>
        </div>
        <section className="flex flex-col w-full">
          <div className="flex justify-between w-full bg-white pt-5 px-5 py-3 gap-6 rounded-3xl">
            <div className=" hidden lg:max-w-[28rem] lg:flex lg:flex-col lg:bg-white">
              <span className="hidden lg:block mb-2 whitespace-nowrap min-w-40">
                Room facilities
              </span>
              <div className="hidden lg:block">
                <ul>
                  <li className="flex justify-start items-center">
                    <img
                      src="https://dayuse.twic.pics/equipments/385c6dc49086192d74f3b23ae6f6dc19-acces-a-mobilite-reduite-sur-demande-38.svg"
                      alt=""
                      className="w-4 h-4 lg:my-2 mr-2 lg:mr-2"
                    />
                    <span className="sr-only lg:not-sr-only ">
                      Wheelchair accessibility (on request)
                    </span>
                  </li>
                  <li className="flex justify-start items-center">
                    <img
                      src="https://dayuse.twic.pics/equipments/ea4fb75f46d476841e0cd6a2f4748b39-wifi-gratuit-36.svg"
                      alt=""
                      className="w-4 h-4 lg:my-2 mr-2 lg:mr-2"
                    />
                    <span>Free WiFi</span>
                  </li>
                  <li className="flex justify-start items-center">
                    <img
                      src="https://dayuse.twic.pics/equipments/ce0e1a2d918b010b36c31d94d4c5f2f3-bureau-32.svg"
                      alt=""
                      className="w-4 h-4 lg:my-2 mr-2 lg:mr-2"
                    />
                    <span>Desk</span>
                  </li>
                  <li className="flex justify-start items-center">
                    <span>+6 Amenities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default BookingCard;
