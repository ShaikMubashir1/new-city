import "./App.css";
import Booking from "./component/Booking";
import HeroBanner from "./component/HeroBanner";
import Info from "./component/Info";
import SelectBar from "./component/SelectBar";
import SelectDate from "./component/SelectDate";
import Title from "./component/Title";

function App() {
  return (
    <>
      <article className="mb-6">
        <Title />
        <HeroBanner />
        <Info />
        <SelectBar />
      </article>
      <section>
        <SelectDate />
        <Booking />
      </section>
    </>
  );
}
export default App;
