import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/AppProvider/AppProvider";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Map from "../map";

import { toast } from "react-toastify";
import {
  db,
  doc,
  setDoc,
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "../../Firebase";
import Image from "next/image";



const ProfileSettingTab = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { userData } = useContext(AppContext);
  const [zoneName, setZoneName] = useState(userData?.name);
  const [noOfPcs, setNoOfPcs] = useState(userData?.noOfPcs);
  const [feePerSlot, setFeePerSlot] = useState(userData?.feePerSlot);
  const [phoneNo, setPhoneNo] = useState(userData?.phoneNo);
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
  const [image, setImage] = useState(null);

  const [services, setServices] = useState(
    userData?.services ? userData?.services : []
  );
  const [topGames, setTopGames] = useState(
    userData?.topGames ? userData?.topGames : []
  );

  const handleAddService = (event) => {
    console.log("type of event", typeof event);
    event.preventDefault();
    const serviceInput = event.target.elements.service;
    const newService = serviceInput.value.trim();
    if (newService) {
      setServices([...services, newService]);
      serviceInput.value = "";
    }
  };
  function handleRemoveService(serviceId) {
    console.log("services", services);
    console.log("serviceId", serviceId);
    const updatedServices = services.filter(
      (service, index) => index !== serviceId && service
    );
    console.log("updated", updatedServices);

    setServices(updatedServices);
  }

  const handleAddGame = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.gameName.value;
    const genre = form.elements.gameGenre.value;
    const intro = form.elements.gameIntro.value;
    const image = form.elements.image.files[0]; // access the uploaded file

    setTopGames([...topGames, { name, genre, intro, image }]);
    form.reset();
  };

  const handleRemoveGame = (index) => {
    const updatedGames = [...topGames];
    updatedGames.splice(index, 1);
    setTopGames(updatedGames);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLatLng((prevLatLng) => ({
      ...prevLatLng,
      [name]: value,
    }));
  };
  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = async () => {


    if (!zoneName) {
      toast("Invalid Zone Name");
      return;
    }
    if (!noOfPcs) {
      toast("Invalid No of PCs");
      return;
    }
    if (!feePerSlot) {
      toast("Invalid Fee per Slot");
      return;
    }
    if (!phoneNo) {
      toast("Invalid Phone Number");
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
    if (!services) {
      toast("Add atleast 1 Service");
      return;
    }

    const storage = getStorage();
    const updatedUser = {
      ...userData,
      zoneName,
      noOfPcs,
      tagLine,
      aboutGameZone,
      latLng,
      phoneNo,
      services,
      feePerSlot
    };

    if (topGames) {
      let newTopgames = [];
      for (let i = 0; i < topGames.length; i++) {
        if (typeof topGames[i].image != 'string') {
          const storageRef = ref(
            storage,
            `${userData.id}/topgames/${topGames[i].name}`
          );
          const uploadTask = uploadBytes(storageRef, topGames[i].image);

          try {
            await uploadTask;
            const downloadURL = await getDownloadURL(storageRef);
            let gameObj = {
              name: topGames[i].name,
              genre: topGames[i].genre,
              intro: topGames[i].intro,
              image: downloadURL,
            };
            newTopgames.push(gameObj);
          } catch (error) {
            console.log(error);
            toast("Error uploading image");
            return;
          }
        }
      }
      updatedUser.topGames = newTopgames;
      console.log("updated top games", updatedUser);
    }

    if (image) {
      const storageRef = ref(
        storage,
        `profile_images/${userData.id}/${image.name}`
      );
      const uploadTask = uploadBytes(storageRef, image);

      try {
        await uploadTask;
        const downloadURL = await getDownloadURL(storageRef);
        updatedUser.profileImage = downloadURL;
      } catch (error) {
        console.log(error);
        toast("Error uploading image");
        return;
      }
    }

    try {
      await setDoc(doc(db, "users", userData.id), updatedUser);
      toast("Profile updated successfully");
    } catch (error) {
      console.log(error);
      toast("Error updating profile");
    }
  };

  return (
    <div
      className="tab-pane fade show active"
      id="tabs-homeVertical"
      role="tabpanel"
      aria-labelledby="tabs-home-tabVertical"
    >
      <div className="flex gap-4">
        <div className="mb-6  text-gray-900 border bg-[#F8FBFE]  rounded-lg p-2 w-1/2">
          <label
            htmlFor="large-input"
            className="block text-xs  text-[#84879E] "
          >
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
          <label
            htmlFor="large-input"
            className="block text-xs  text-[#84879E] "
          >
            No # of PCs
          </label>
          <input
            type="number"
            id="large-input"
            className="block w-full outline-none border-0 bg-transparent"
            value={noOfPcs}
            onChange={(e) => {
              setNoOfPcs(e.target.value);
            }}
          />
        </div>
        <div className="mb-6  text-gray-900 border bg-[#F8FBFE]  rounded-lg p-2">
          <label
            htmlFor="large-input"
            className="block text-xs  text-[#84879E] "
          >
            Fees per slot
          </label>
          <input
            type="number"
            id="large-input"
            className="block w-full outline-none border-0 bg-transparent"
            value={feePerSlot}
            onChange={(e) => {
              setFeePerSlot(e.target.value);
            }}
          />
        </div>
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
        <div className="mb-6  text-gray-900 border bg-[#F8FBFE] w-1/3 rounded-lg p-2">
          <label
            htmlFor="large-input"
            className="block text-xs  text-[#84879E] "
          >
            Phone
          </label>
          <input
            type="text"
            id="large-input"
            className="block w-full outline-none border-0 bg-transparent"
            value={phoneNo}
            onChange={(e) => {
              setPhoneNo(e.target.value);
            }}
          />
        </div>
        <div className="mb-6  text-gray-900 border bg-[#F8FBFE] w-1/3 rounded-lg p-2">
          <label
            htmlFor="large-input"
            className="block text-xs  text-[#84879E] "
          >
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e)}
          />
        </div>
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

      <div className="mb-6  text-gray-900 border bg-[#F8FBFE]  rounded-lg p-2">
        <label htmlFor="large-input" className="block text-xs  text-[#84879E] ">
          Services
        </label>
        <form onSubmit={handleAddService} className="flex">
          <input
            type="text"
            id="large-input"
            name="service"
            className="block outline-none border-0 bg-transparent mb-2"
            placeholder="Add a new service"
          />
          <button
            type="submit"
            className="p-1  w-32 mb-2 bg-primary text-white justify-center items-center   text-center rounded-md  shadow-sm shadow-grey"
          >
            Add Service
          </button>
        </form>
        <div className="flex flex-wrap">
          {services?.map((service, index) => (
            <div
              key={index}
              className="border border-[#D2D6DC] rounded-lg py-2 px-4 mr-2 mb-2
              hover:bg-red-600 hover:text-white
              "
              onClick={() => handleRemoveService(index)}
            >
              {service}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6  text-gray-900 border bg-[#F8FBFE]  rounded-lg p-2">
        <label htmlFor="large-input" className="block text-xs  text-[#84879E] ">
          Top Games
        </label>
        <form onSubmit={handleAddGame}>
          <div className="flex gap-4">
            <div className="mb-6  text-gray-900 border bg-[#F8FBFE] w-1/2 rounded-lg p-2">
              <label
                htmlFor="large-input"
                className="block text-xs  text-[#84879E] "
              >
                Game Name:
              </label>
              <input
                type="text"
                id="gameName"
                name="gameName"
                required
                className="block w-full outline-none border-0 bg-transparent mb-2"
              />
            </div>
            <div className="mb-6  text-gray-900 border bg-[#F8FBFE] w-1/2 rounded-lg p-2">
              <label
                htmlFor="large-input"
                className="block text-xs  text-[#84879E] "
              >
                Game Genre:
              </label>
              <input
                type="text"
                id="gameGenre"
                name="gameGenre"
                required
                className="block w-full outline-none border-0 bg-transparent mb-2"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="mb-6  text-gray-900 border bg-[#F8FBFE] w-1/2 rounded-lg p-2">
              <label
                htmlFor="large-input"
                className="block text-xs  text-[#84879E] "
              >
                Game Intro:
              </label>
              <input
                type="text"
                id="gameIntro"
                name="gameIntro"
                required
                className="block w-full outline-none border-0 bg-transparent mb-2"
              />
            </div>
            <div className="mb-6  text-gray-900 border bg-[#F8FBFE] w-1/2 rounded-lg p-2">
              <label
                htmlFor="large-input"
                className="block text-xs  text-[#84879E] "
              >
                Game Image:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="p-2 bg-primary text-white w-1/5 mb-4 rounded-md shadow-sm shadow-grey"
          >
            Add Game
          </button>
        </form>
        <div className="flex gap-4">
          {topGames &&
            topGames.map((game, index) => {
              return (
                <div key={index}>
                  <h2>{game?.name}</h2>
                  <p>{game?.genre}</p>
                  <p>{game?.intro}</p>
                  {/* <Image alt={game?.name} src={game?.image} height={20} width={20} /> */}
                  {game?.image && (
                    <Image
                      src={
                        typeof game.image == "string"
                          ? game.image
                          : URL.createObjectURL(game?.image)
                      }
                      alt={game?.name}
                      className="h-40 w-56"
                      height={720} width={720}
                    />
                  )}
                  <button
                    className="border border-[#D2D6DC] rounded-lg py-2 px-4 mx-auto my-2
              hover:bg-red-600 hover:text-white
              "
                    onClick={() => handleRemoveGame(index)}
                  >
                    Remove Game
                  </button>
                </div>
              )
            })}
        </div>
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
