import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.setVehiclePanelOpen(false)}
        className="p-1 text-center absolute top-0 w-[93%]"
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-600"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
      <div
        onClick={() => {
          props.setConfirmVehiclePanel(true);
          props.selectVehicle("car");
        }}
        className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between"
      >
        <img
          className="w-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1569012915/assets/4f/599c47-7f5c-4544-a5d2-926babc8e113/original/Lux.png"
          alt=""
        />
        <div className="ml-4 w-1/2">
          <h4 className="font-medium text-base">
            ZippyGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹{props.fare.car}</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmVehiclePanel(true);
          props.selectVehicle("motorcycle");
        }}
        className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between"
      >
        <img
          className="w-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            ZippyMoto{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Motorcycle ride
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹{props.fare.motorcycle}</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmVehiclePanel(true);
          props.selectVehicle("auto");
        }}
        className="flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between"
      >
        <img
          className="w-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            ZippyAuto{" "}
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Auto ride
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹{props.fare.auto}</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
