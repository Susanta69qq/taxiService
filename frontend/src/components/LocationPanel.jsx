import React from "react";

const LocationPanel = (props) => {
  console.log(props);
  // sample array for locations
  const locations = [
    "24B, Near Kapoor's cafe, Sheriyan's Coding School, Bhopal",
    "22C, Near Malhotra's cafe, Sheriyan's Coding School, Bhopal",
    "209B, Near Zen's cafe, Sheriyan's Coding School, Bhopal",
    "18A, Near Zudio's cafe, Sheriyan's Coding School, Bhopal",
  ];
  return (
    <div>
      {/* this is justsample data */}
      {locations.map((location, index) => {
        return (
          <div
            onClick={() => {
              props.setVehiclePanelOpen(true);
              props.setPanelOpen(false);
            }}
            key={index}
            className="flex items-center border-2 p-3 rounded-xl border-gray-50 active:border-black  justify-start my-2 gap-4"
          >
            <h2 className="bg-[#eeeeee] h-8 w-12 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationPanel;
