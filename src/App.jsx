import "./App.css";
import Booking from "./component/StandardbookingSection/Booking";
import HeroBanner from "./component/HeroBanner";
import Info from "./component/Info";
import SelectBar from "./component/SelectBar";
import SelectDate from "./component/SelectDate";
import Title from "./component/Title";
import About from "./component/About";

function App() {
  return (
    <>
      <article className="mb-6">
        <Title />
        <HeroBanner />
        <Info />
      </article>
      <main className=" relative">
          <SelectBar />
        <section>
          <SelectDate />
          <Booking />
        </section>
        <section className="mt-20 ">
          <About />
        </section>
      </main>
    </>
  );
}
export default App;
