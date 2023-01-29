import React from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Layout from "../components/Layout";
import Image from "next/image";
import logo from "../public/banner1.png";
import Game1 from "../public/game1.png";
import Game2 from "../public/game4.jpg";
import Game3 from "../public/game5.jpg";
const Billing = () => {
  return (
    <Layout>
      <div>
        <DashboardHeader title="Profile" />
        <div className=" text-primary font-sans">
          <div className="container mx-auto px-0">
            <header className="py-10 flex  space-x-4 justify-between">
              {/* <img className="h-24 w-24 rounded-full mx-auto mb-10" src="../public/Logo.png" alt="Gamezone Logo" /> */}

              <div className="flex flex-col justify-center items-center w-1/3  ">
                <h1 className="text-4xl font-bold text-center tracking-wide">
                  ZANTZAONE
                </h1>
                <p className="text-grey text-center">
                  The ultimate gaming platform
                </p>
              </div>

              <div className="flex justify-center ">
                {/* @ts-ignore  */}
                <img
                  style={{ height: "350px", objectFit: "cover" }}
                  alt="zonemates"
                  src={logo.src}
                />
              </div>
            </header>
            <main className="flex">
              <aside className="w-1/3 p-10">
                <div className="mb-10">
                  <h2 className="text-xl font-bold mb-5">About Gamezone</h2>
                  <p>
                    Gamezone is the leading online platform for all your gaming
                    needs. We offer a wide range of games and gaming
                    accessories, and provide a seamless gaming experience for
                    gamers of all levels.{" "}
                  </p>
                </div>
                <div className="mb-10">
                  <h2 className="text-xl font-bold mb-5">Our Services</h2>
                  <ul className="list-disc">
                    <li>Online gaming</li>
                    <li>Game downloads</li>
                    <li>Gaming accessories</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-5">Contact</h2>
                  <ul className="list-disc">
                    <li>Email: support@gamezone.com</li>
                    <li>Phone: (123) 456-7890</li>
                    <li>Location: Online</li>
                  </ul>
                </div>
              </aside>
              <section className="w-2/3 p-10">
                <h2 className="text-xl font-bold mb-5">Top Games</h2>
                <div className="mb-10">
                  <img
                    src={Game1.src}
                    alt="Game 1"
                    className="w-48 h-32 float-right mb-5 mx-2"
                  />
                  <h3 className="text-lg font-bold mb-3">GTA 5</h3>
                  <p className="mb-3">Genre: Action</p>
                  <p>
                    Grand Theft Auto V is an open-world action-adventure video
                    game developed by Rockstar North. From driving and shooting
                    to flying and scuba diving, GTA V offers a wide range of
                    activities.
                  </p>
                </div>{" "}
                <div className="mb-10">
                  <img
                    src={Game2.src}
                    alt="Game 1"
                    className="w-48 h-32 float-right mb-5 mx-2"
                  />
                  <h3 className="text-lg font-bold mb-3">FORTNITE</h3>
                  <p className="mb-3">Genre: Action</p>
                  <p>
                    Fortnite is a popular online multiplayer battle royale game
                    developed by Epic Games. Fortnite is known for its colorful
                    and cartoonish graphics, as well as its iconic dances and
                    emotes.
                  </p>
                </div>
                <div className="mb-10">
                  <img
                    src={Game3.src}
                    alt="Game 1"
                    className="w-48 h-32 float-right mb-5 mx-2"
                  />
                  <h3 className="text-lg font-bold mb-3">APEX LEGENDS</h3>
                  <p className="mb-3">Genre: Action</p>
                  <p>
                    Apex Legends is a free-to-play battle royale game developed
                    by Respawn Entertainment. Players choose from a roster of
                    unique characters, each with their own abilities, and
                    compete in teams of three.
                  </p>
                </div>
              </section>
            </main>
            <footer className="py-10 text-center text-sm">
              &copy; 2023 Gamezone
            </footer>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Billing;
