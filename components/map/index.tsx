import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const Map = ({setLatLng, setCenter, latLng, center,onClose}:any) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBQ8rPKQV_V5dl8FK-9jFHwSWiLZ5DGsaA",
  });

  const handleMapClick = (event: any) => {
    setLatLng({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };
  const handleUseCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("pos", { position });
        setLatLng({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        alert("Unable to retrieve your location");
      }
    );
  };

  if (loadError) return <p>Error loading maps </p>;
  if (!isLoaded) return <p>Loading maps</p>;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center || undefined}
        onClick={handleMapClick}
      >
        {latLng && <Marker position={latLng} />}
      </GoogleMap>

      <div className=" mt-6 flex gap-3">
        <button
          type="submit"
          onClick={handleUseCurrentLocation}
          className="bg-primary p-3 text-white w-full mt-2 rounded shadow-md shadow-primary"
        >
          Use Current Location
        </button>
        <button
          type="submit"
          onClick={onClose}
          className="bg-primary p-3 text-white w-full mt-2 rounded shadow-md shadow-primary"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Map;
