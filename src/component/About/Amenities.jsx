import { useState } from "react";

function Amenities() {
  const amenitiesList = [
    {
      id: 1,
      $img: "https://dayuse.twic.pics/equipments/077dddbfaf1e8f71d7b9380527b5a6d4-chambres-familiales-disponibles-2996.svg",
      $text: "Family rooms (Dayuse subject to availability)",
    },
    {
      id: 2,
      $img: "https://dayuse.twic.pics/equipments/89601461c4714bf10aefa60e74e7d3d2-restaurant-14.svg",
      $text: "Restaurant",
    },
    {
      id: 3,
      $img: "https://dayuse.twic.pics/equipments/246523e431db30c57e643812b5d810b7-bar-15.svg",
      $text: "Bar / Café",
    },
    {
      id: 4,
      $img: "https://dayuse.twic.pics/equipments/1cef6a8f6d2b6f1c82e00852df02ffd5-free-grab-and-go-breakfast-2992.svg",
      $text: "Breakfast Area",
    },
    {
      id: 5,
      $img: "https://dayuse.twic.pics/equipments/81654cd2c26e5ecf497c8015ba3353b1-terrasse-18.svg",
      $text: "Terrace",
    },
    {
      id: 6,
      $img: "https://dayuse.twic.pics/equipments/c90ccaac634af6300e30babf82def2af-business-center-29.svg",
      $text: "Business center",
    },
    {
      id: 7,
      $img: "https://dayuse.twic.pics/equipments/55524ba50d85f30ebc330aba263a766c-salle-de-reunion-30.svg",
      $text: "Meeting room",
    },
    {
      id: 8,
      $img: "https://dayuse.twic.pics/equipments/dc31fe66e6374df6e9d9f2c4d7b11f08-wifi-gratuit-28.svg",
      $text: "Free WiFi",
    },
    {
      id: 9,
      $img: "https://dayuse.twic.pics/equipments/a5e969aa94a8685d14aea10773ca511f-parking-payant-24.svg",
      $text: (
        <span>
          Parking (fees apply) <span className="text-red-600">(US$50)</span>
        </span>
      ),
    },
    {
      id: 10,
      $img: "https://dayuse.twic.pics/equipments/4aa33f5e2fc9a59b4263207b063ea77d-salle-de-sport-38.svg",
      $text: "Fitness room",
    },
  ];
  const [lists] = useState(amenitiesList);
  // console.log(list[0])
  return (
    <div className="flex flex-col items-start space-y-4 md:space-y-8 mb-5 md:mb-14">
      <span className="text-xl font-semibold uppercase">Amenities</span>
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {lists.map((list) => (
          <div className="flex">
            <div className="shrink-0 pt-1">
              <img src={list.$img} alt="" className=" h-4 w-4 " />
            </div>
            <p className="ml-2 text-sm/[22px] text-stone-500">{list.$text}</p>
          </div>
        ))}
      </div>
      <div className="flex md:justify-start justify-center w-full">
        <button className="w-fit text-black rounded-full px-7 cursor-pointer h-[52px] border border-black hover:bg-stone-100">
          More information
        </button>
      </div>
    </div>
  );
}

export default Amenities;
