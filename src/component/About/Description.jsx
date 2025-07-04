import { useState } from "react";

function Description() {
  const [show, setShow] = useState(false);
  return (
    <div
      id="Description"
      className="flex flex-col space-y-4 md:space-y-8 mb-5 md:mb-14"
    >
      <span className="text-xl font-semibold uppercase">Description</span>
      <div className="md:space-y-8 mb-5 md:mb-14 tracking-wide font-medium text-stone-500">
        <div
          className={`flex flex-col transition-all text-sm/[22px] gap-5 ${show ? "h-fit" : "max-h-28" } overflow-hidden`}
        >
          <p>
            Located less than a kilometer from Times Square, YOTEL New York
            Times Square offers complimentary WiFi and meeting and event spaces.
            YOBOT, the onsite luggage-storing robot, helps to keep your luggage
            secured, and self-service kiosks speed up check-in process.
          </p>
          <p>
            All rooms are designed to maximize available space and feature a
            work desk and a laptop safe. Guests will have access to purified
            water and ice 24 hours a day. An iron with an ironing board and a
            hair dryer are also available. The tubs are out of order in any
            cabin until further notice.
          </p>
          <p>
            Guest services at the property include airport transfers,
            sightseeing tours and show tickets.
          </p>
          <p>
            The Green Fig Restaurant is a Mediterranean fusion eatery that
            offers breakfast, weekend brunches, dinner and pre-theater dining
            options. The outdoor roof terrace is available for guests looking to
            relax in the evenings with a drink while enjoying a view of the
            skyline.
          </p>
          <p>
            Madame Tussauds is 645 m away and Bryant Park is 0.7 mi from the
            property. Guests will find 3 subway stations within 805 m of the
            property.
          </p>
        </div>
        <button
          className="text-xs/5 text-rose-500"
          onClick={() => setShow(!show)}
        >
          View more
        </button>
      </div>
    </div>
  );
}

export default Description;
