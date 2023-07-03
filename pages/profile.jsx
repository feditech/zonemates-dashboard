import React, { useContext } from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Layout from "../components/Layout";
import logo from "../public/banner1.png";
import { AppContext } from "../Context/AppProvider/AppProvider";
import Image from "next/image";

const Profile = () => {
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
                <h1 className="text-5xl font-bold text-center tracking-wide">
                  {userData?.name}
                </h1>
                <p className="text-grey my-2 text-lg text-center">{userData?.tagLine}</p>
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
              <aside className="w-5/12 p-5">
                <div className="mb-10">
                  <h2 className="text-2xl font-semibold mb-5">About Gamezone</h2>
                  <p>{userData?.aboutGameZone}</p>
                </div>
                <div className="mb-10">
                  <h2 className="text-2xl font-semibold mb-5">Our Services</h2>
                  <ul className="list-disc">
                    {userData?.services?.map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-5">Contact</h2>
                  <ul className="list-disc">
                    <li>Email: {userData?.email}</li>
                    <li>Phone: {userData?.phoneNo}</li>
                  </ul>
                </div>
              </aside>
              <section className="w-7/12 p-5">
                <h2 className="text-2xl font-semibold mb-5">Top Games</h2>
                <div className="grid grid-cols-1 gap-2">
                  {userData?.topGames &&
                    userData?.topGames?.map((game, index) => {
                      return (
                        <div key={index}>
                          <div className="my-4 ">
                            <h2 className="text-xl font-semibold mt-2">{game?.name}</h2>
                            <p className=" mt-1">{game?.genre}</p>
                            <p className=" mt-1">{game?.intro}</p>
                          </div>
                           <div className="h-80 w-full overflow-hidden my-4 bg-black">
                            {game?.image && (
                              <Image
                                src={game.image}
                                alt={game?.name}
                                 className="h-full w-full object-cover "
                                width={720}
                                height={300}
                              />
                            )}
                          </div>

                        </div>
                      )
                    })}
                </div>

            
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

export default Profile;
