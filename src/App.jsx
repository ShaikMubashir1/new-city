import "./App.css";
import Booking from "./component/StandardbookingSection/Booking";
import HeroBanner from "./component/HeroBanner";
import SelectBar from "./component/SelectBar";
import SelectDate from "./component/SelectDate";
import Title from "./component/Title";
import About from "./component/About/About";
import Carousel from "./component/carousel";
import Info from "./component/Information/Info";

function App() {
  return (
    <>
      <article id="Overview" className="mb-6">
        <Carousel />
        <Title />
        <HeroBanner />
        <Info />
      </article>
      <main className=" relative">
        <SelectBar />
        <section className=" px-4 md:px-0">
          <SelectDate />
          <Booking />
        </section>
        <section className="md:mt-20 mt-8 px-4 md:px-0">
          <About />
        </section>
      </main>
    </>
  );
}
export default App;
