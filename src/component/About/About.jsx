import Amenities from "./Amenities";
import Description from "./Description";
import FloatingSection from "./FloatingSection";
import LikeThis from "../Information/LikeThis";
import SpecificConditions from "./SpecificConditions";

function About() {
  return (
    <div className=" pt-2 m-auto lg:grid lg:grid-cols-5 lg:gap-10 ">
      <div className="lg:col-span-3 text-start ">
        <SpecificConditions />
        <hr className="mb-5 md:mb-14" />
        <div className="block md:hidden">
          <LikeThis />
        </div>
        <hr className="mb-5 md:mb-14 block md:hidden" />
        <Description />
        <hr className="mb-5 md:mb-14" />
        <Amenities />
      </div>
      <div className="lg:col-span-2 text-start hidden md:block relative">
        <FloatingSection />
      </div>
    </div>
  );
}

export default About;
