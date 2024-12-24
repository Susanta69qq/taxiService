import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import LocationPanel from "../components/LocationPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedVehiclePanel from "../components/ConfirmedVehiclePanel";
import LookingForDriver from "../components/LookingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmVehiclePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmVehiclePanel, setConfirmVehiclePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        opacity: 1,
        padding: 24,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        opacity: 0,
        padding: 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanelOpen]);

  useGSAP(() => {
    if (confirmVehiclePanel) {
      gsap.to(confirmVehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmVehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmVehiclePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-[16vw] absolute left-5 top-5"
        src="/logo/zippy.png"
        alt=""
      />
      <div className="h-screen w-screen">
        {/* image for temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <h5
          ref={panelCloseRef}
          onClick={() => {
            setPanelOpen(false);
          }}
          className="opacity-0"
        >
          <i className="ri-arrow-down-wide-line absolute z-[2] right-8 top-8 text-2xl"></i>
        </h5>
        <div className="h-[30%] bg-white p-6 relative">
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              className="bg-[#eeeeee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
            <input
              onClick={() => setPanelOpen(true)}
              className="bg-[#eeeeee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </form>
        </div>
        <div ref={panelRef} className="opacity-0 bg-white h-[0%]">
          <LocationPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
      >
        <VehiclePanel
          setConfirmVehiclePanel={setConfirmVehiclePanel}
          setVehiclePanelOpen={setVehiclePanelOpen}
        />
      </div>
      <div
        ref={confirmVehiclePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <ConfirmedVehiclePanel
          setConfirmVehiclePanel={setConfirmVehiclePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div ref={vehicleFoundRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
        <LookingForDriver />
      </div>
    </div>
  );
};

export default Home;
