import { IoIosArrowBack } from "react-icons/io";
import LikeBtn from "./LikeBtn";
import ShareBtn from "./ShareBtn";

function Carousel() {
  const $Arrow =
    "flex justify-center select-none items-center shadow-3xl bg-white rounded-full hover:bg-stone-50 p-2";
  const $Icon = "w-4 h-4";
  const $Img = [
    "https://dayuse.twic.pics/hotels/16035/47bfabad18150d65a6bfc738c14f0829-yotel-new-york-city.jpg?twic=v1/cover=640/quality=75",
    "https://dayuse.twic.pics/hotels/16035/65acdcdd39f9addaf7b2d237b396c894-yotel-new-york-city.jpg?twic=v1/cover=640/quality=75",
    "https://dayuse.twic.pics/hotels/16035/4c9456953094e24921770cdb0a2d2803-yotel-new-york-city.webp?twic=v1/cover=640/quality=75",
    "https://dayuse.twic.pics/hotels/16035/742a038b9818eb76f6bfdc0ecc0b8e46-yotel-new-york-city.jpg?twic=v1/cover=640/quality=75",
    "https://dayuse.twic.pics/hotels/16035/9ba30db19a20e2c5303bb85dfa2f519b-yotel-new-york-city.jpg?twic=v1/cover=640/quality=75",
  ];
  return (
    <div className="block md:hidden relative overflow-hidden ">
      <div className="flex gap-x-3 md:gap-x-0 absolute top-5 right-5 z-20">
        <ShareBtn />
        <LikeBtn />
      </div>
      <div className=" absolute top-5 left-5 z-20">
        <button className={$Arrow}>
          <a href="">
            <IoIosArrowBack className={$Icon} />
          </a>
        </button>
      </div>
      <div className=" flex duration-300 h-full overflow-x-auto overflow-scroll snap-x snap-mandatory ">
        {$Img.map((Image) => (
          <img
            src={Image}
            alt=""
            className=" w-full object-cover snap-center "
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
