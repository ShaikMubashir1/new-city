import LikeThis from "./LikeThis";
import Information from "./Information";

function Info() {
  
  return (
    <div className=" flex my-6 lg:flex-row flex-col text-start gap-6">
      <div className="hidden md:block">
        <LikeThis />
      </div>
      <Information />
    </div>
  );
}

export default Info;
