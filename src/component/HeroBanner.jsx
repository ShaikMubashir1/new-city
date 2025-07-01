export default function HeroBanner() {
  const $img =
    "object-cover m-auto cursor-pointer rounded-2xl h-[213px] w-full";
  return (
    <div className=" flex ">
      <div className="hidden w-full md:block lg:w-2/3 relative h-[450px]">
        <img
          src="https://dayuse.twic.pics/hotels/16035/47bfabad18150d65a6bfc738c14f0829-yotel-new-york-city.jpg?twic=v1/cover=1200/quality=75"
          alt=""
          className={`${$img} h-[450px]`}
        />
      </div>
      <div className="md:w-1/3 hidden lg:block space-y-6 h-[450px] ml-6">
        <img
          src="https://dayuse.twic.pics/hotels/16035/65acdcdd39f9addaf7b2d237b396c894-yotel-new-york-city.jpg?twic=v1/cover=640/quality=75"
          alt=""
          className={$img}
        />
        <img
          src="https://dayuse.twic.pics/hotels/16035/4c9456953094e24921770cdb0a2d2803-yotel-new-york-city.webp?twic=v1/cover=640/quality=75"
          alt=""
          className={$img}
        />
      </div>
    </div>
  );
}
