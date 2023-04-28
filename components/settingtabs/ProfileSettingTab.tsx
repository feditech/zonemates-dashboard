import React, { useContext, useState } from "react";
import { AppContext } from "../../store/AppProvider/AppProvider";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Map from "../map";

import { toast } from "react-toastify";
import { db, doc, setDoc } from "../../Firebase";
const ProfileSettingTab = () => {
  const { userData } = useContext(AppContext);
  const [zoneName, setZoneName] = useState(userData?.name);
  const [tagLine, setTagLine] = useState(userData?.tagLine || "");
  const [aboutGameZone, setAboutGameZone] = useState(
    userData?.aboutGameZone || ""
  );

  const [latLng, setLatLng] = useState(
    userData?.latLng || { lat: 24.8607, lng: 67.0011 }
  );
  const [center, setCenter] = useState(
    userData?.center || { lat: 24.8607, lng: 67.0011 }
  );

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setLatLng((prevLatLng: any) => ({
      ...prevLatLng,
      [name]: value,
    }));
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    if (!zoneName) {
      toast("Invalid Zone Name");
      return;
    }
    if (!tagLine) {
      toast("Invalid Tag line");
      return;
    }
    if (!aboutGameZone) {
      toast("Invalid About");
      return;
    }
    if (!latLng.lat) {
      toast("Invalid Latitude");
      return;
    }
    if (!latLng.lng) {
      toast("Invalid Longitude");
      return;
    }

    const updatedUser = {
      ...userData,
      zoneName,
      tagLine,
      aboutGameZone,
      latLng,
    };

    console.log("this is user data", updatedUser);
    setDoc(doc(db, "users", userData.id), updatedUser)
      .then((e: any) => {
        toast("success");
      })
      .catch((error: any) => {
        toast("error");
      });
  };

  return (
    <div
      className="tab-pane fade show active"
      id="tabs-homeVertical"
      role="tabpanel"
      aria-labelledby="tabs-home-tabVertical"
    >
      <div className="mb-6  text-gray-900 border bg-[#F8FBFE]  rounded-lg p-2">
        <label htmlFor="large-input" className="block text-xs  text-[#84879E] ">
          Zone Name
        </label>
        <input
          type="text"
          id="large-input"
          className="block w-full outline-none border-0 bg-transparent"
          value={zoneName}
          onChange={(e) => {
            setZoneName(e.target.value);
          }}
        />
      </div>
      <div className="mb-6  text-gray-900 border bg-[#F8FBFE]  rounded-lg p-2">
        <label htmlFor="large-input" className="block text-xs  text-[#84879E] ">
          Tag Line
        </label>
        <input
          type="text"
          id="large-input"
          className="block w-full outline-none border-0 bg-transparent"
          value={tagLine}
          onChange={(e) => {
            setTagLine(e.target.value);
          }}
        />
      </div>
      <div className="mb-6  text-gray-900 border bg-[#F8FBFE]  rounded-lg p-2">
        <label htmlFor="large-input" className="block text-xs  text-[#84879E] ">
          About
        </label>
        <textarea
          id="large-input"
          className="block w-full outline-none border-0 bg-transparent"
          value={aboutGameZone}
          onChange={(e) => {
            setAboutGameZone(e.target.value);
          }}
        />
      </div>
      <div className="flex gap-4">
        <div className="mb-6 w-1/3 text-gray-900 border bg-[#F8FBFE]  rounded-lg p-2">
          <label
            htmlFor="large-input"
            className="block text-xs  text-[#84879E] "
          >
            Latitude
          </label>
          <input
            name="lat"
            type="text"
            id="large-input"
            className="block w-full outline-none border-0 bg-transparent"
            value={latLng.lat}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
        <div className="mb-6 w-1/3 text-gray-900 border bg-[#F8FBFE]  rounded-lg p-2">
          <label
            htmlFor="large-input"
            className="block text-xs  text-[#84879E] "
          >
            Longitude
          </label>
          <input
            name="lng"
            type="text"
            id="large-input"
            className="block w-full outline-none border-0 bg-transparent"
            value={latLng.lng}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
        <button
          onClick={handleOpen}
          className="mb-6 w-1/3 bg-primary text-white  rounded-md shadow-sm shadow-grey"
        >
          Pick Location From Map
        </button>
      </div>

      <div className="mb-6 flex justify-end">
        <button
          onClick={handleSubmit}
          className="p-2 bg-primary text-white w-1/3 rounded-md shadow-sm shadow-grey"
        >
          Save
        </button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 bg-white border-2 border-black shadow-lg p-4">
          <Map
            setLatLng={setLatLng}
            latLng={latLng}
            setCenter={setCenter}
            center={center}
            onClose={handleClose}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ProfileSettingTab;
