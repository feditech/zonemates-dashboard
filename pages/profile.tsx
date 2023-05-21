import React, { useContext } from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Layout from "../components/Layout";
import Image from "next/image";
import logo from "../public/banner1.png";
import Game1 from "../public/game1.png";
import Game2 from "../public/game4.jpg";
import Game3 from "../public/game5.jpg";
import { AppContext } from "../store/AppProvider/AppProvider";
const Billing = () => {
  const { userData } = useContext(AppContext);
  console.log("USEr data", userData);
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
                  {userData?.name}
                </h1>
                <p className="text-grey text-center">{userData?.tagLine}</p>
              </div>

              <div className="flex justify-center ">
                {/* @ts-ignore  */}
                <img
                  style={{ height: "350px", objectFit: "cover" }}
                  alt="zonemates"
                  src={userData?.profileImage || logo.src}
                />
              </div>
            </header>
            <main className="flex">
              <aside className="w-1/3 p-10">
                <div className="mb-10">
                  <h2 className="text-xl font-bold mb-5">About Gamezone</h2>
                  <p>{userData?.aboutGameZone}</p>
                </div>
                <div className="mb-10">
                  <h2 className="text-xl font-bold mb-5">Our Services</h2>
                  <ul className="list-disc">
                    {userData?.services?.map((e: any, i: any) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-5">Contact</h2>
                  <ul className="list-disc">
                    <li>Email: {userData?.email}</li>
                    <li>Phone: {userData?.phoneNo}</li>
                  </ul>
                </div>
              </aside>
              <section className="w-2/3 p-10">
                <h2 className="text-xl font-bold mb-5">Top Games</h2>
                {userData?.topGames.map((e: any, i: number) => (
                  <div className="mb-10" key={i}>
                    <img
                      src={e.image}
                      alt="Game 1"
                      className="w-48 h-32 float-right mb-5 mx-2"
                    />
                    <h3 className="text-lg font-bold mb-3">{e.name}</h3>
                    <p className="mb-3">Genre: {e.genre}</p>
                    <p>{e.intro}</p>
                  </div>
                ))}
              </section>
            </main>
            <footer className="py-10 text-center text-sm">
              &copy; 2023 Zone Mates
            </footer>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Billing;
