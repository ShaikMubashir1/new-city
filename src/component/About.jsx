import Amenities from "./Amenities";
import Description from "./Description";
import FloatingSection from "./FloatingSection";
import SpecificConditions from "./SpecificConditions";

function About() {
  return (
    <div className=" pt-2 m-auto lg:grid lg:grid-cols-5 lg:gap-10 ">
      <div className="lg:col-span-3 text-start ">
        <SpecificConditions />
        <hr className="mb-5 md:mb-14" />
        <Description />
        <hr className="mb-5 md:mb-14" />
        <Amenities />
      </div>
      <div className="lg:col-span-2 text-start relative">
        <FloatingSection />
      </div>
    </div>
  );
}

export default About;
