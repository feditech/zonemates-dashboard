import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../Context/AppProvider/AppProvider";
import { db, doc, setDoc, getDoc, updateDoc } from "../../Firebase";
import { toast } from "react-toastify";
import { boolean } from "yup";

const SchedulerTab = () => {
  const { userData } = useContext(AppContext);
  const [openingHours, setOpeningHours] = useState({
    Monday: { opening: "10:00", closing: "15:00", closed: false },
    Tuesday: { opening: "10:00", closing: "15:00", closed: false },
    Wednesday: { opening: "10:00", closing: "15:00", closed: false },
    Thursday: { opening: "10:00", closing: "15:00", closed: false },
    Friday: { opening: "10:00", closing: "15:00", closed: false },
    Saturday: { opening: "10:00", closing: "15:00", closed: false },
    Sunday: { opening: "10:00", closing: "15:00", closed: false },

  });
  //    console.log(" userData?", userData)
  // console.log(" userData?.openingHours", userData?.openingHours)
  // console.log("openingHours", openingHours)

  useEffect(() => {
    const fetchOpeningHours = async () => {
      try {
        const docRef = doc(db, "users", userData.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists() && docSnap?.data()?.openingHours) {
          const openingHourFromFirebase = docSnap?.data()?.openingHours;
          const formattedOpeningHours = Object.keys(openingHours).reduce(
            (acc, day) => {
              acc[day] = {
                opening: openingHourFromFirebase[day].opening,
                closing: openingHourFromFirebase[day].closing,
                closed: openingHourFromFirebase[day].closed,
              };
              return acc;
            },
            {}
          );
          setOpeningHours(formattedOpeningHours);
        } else {
          setOpeningHours({
            Monday: { opening: "10:00", closing: "15:00", closed: false },
            Tuesday: { opening: "10:00", closing: "15:00", closed: false },
            Wednesday: { opening: "10:00", closing: "15:00", closed: false },
            Thursday: { opening: "10:00", closing: "15:00", closed: false },
            Friday: { opening: "10:00", closing: "15:00", closed: false },
            Saturday: { opening: "10:00", closing: "15:00", closed: false },
            Sunday: { opening: "10:00", closing: "15:00", closed: false },
          });
        }
      } catch (error) {
        console.error("Error fetching opening hours from Firebase: ", error);
      }
    };

    fetchOpeningHours();
  }, []);

  const handleHourChange = (day, field, value) => {
    console.log("TYPE OF VALUE", typeof value)
    let fieldValue;
    if (typeof value != 'boolean') {
      fieldValue = value?.slice(0, 2) + ":00"; // Extract only the hours and set minutes to 00
    } else {
      fieldValue = value;
    }
    setOpeningHours((prevOpeningHours) => ({
      ...prevOpeningHours,
      [day]: {
        ...prevOpeningHours[day],
        [field]: fieldValue,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    try {
      const docRef = doc(db, "users", userData.id);
      const slots = [];
      Object.keys(openingHours).forEach((day) => {
        const { opening, closing, closed } = openingHours[day];
        if (!closed && opening && closing) {
          const [openingHour, openingMin] = opening.split(":");
          const [closingHour, closingMin] = closing.split(":");
          const startTime = new Date();
          startTime.setHours(Number(openingHour), Number(openingMin), 0, 0);
          const endTime = new Date();
          endTime.setHours(Number(closingHour), Number(closingMin), 0, 0);
          const daySlots = [];
          while (startTime < endTime) {
            const startSlotTime = startTime.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              timeZone: "Asia/Karachi",
            });
            startTime.setHours(startTime.getHours() + 1); // Increase the hour by 1
            const endSlotTime = startTime.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              timeZone: "Asia/Karachi",
            });
            const slotId = `${day}${startSlotTime.replace(/[:\s]/g, "")}`;
            daySlots.push({
              id: slotId,
              time: `${startSlotTime} - ${endSlotTime}`,
              remainingSlots: userData.noOfPcs,
              day: day, // Add the day property to the slot object
            });
          }
          slots.push({ day, slots: daySlots });
        }
      });
      await updateDoc(docRef, {
        openingHours: openingHours,
        slots: slots,
      });

      toast("Opening hours and slots saved to Firebase!");
    } catch (error) {
      toast("Error saving opening hours and slots to Firebase: ")
      console.error("Error saving opening hours and slots to Firebase: ", error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">GameZone Scheduler</h1>
      <form onSubmit={handleSubmit}>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="w-1/4 py-2 px-4 text-left font-semibold">Day</th>
              <th className="w-1/4 py-2 px-4 text-left font-semibold">
                Opening Time
              </th>
              <th className="w-1/4 py-2 px-4 text-left font-semibold">
                Closing Time
              </th>
              {/* <th className="w-1/4 py-2 px-4 text-left font-semibold">
                Closed
              </th> */}
            </tr>
          </thead>
          <tbody>
            {Object.keys(openingHours).map((day) => {
              return (
                <tr key={day}>
                  <td className="py-2 px-4">{day}</td>
                  <td className="py-2 px-4">
                    <input
                      type="time"
                      value={openingHours[day].opening}
                      onChange={(e) =>
                        handleHourChange(day, "opening", e.target.value)
                      }
                    />
                  </td>
                  <td className="py-2 px-4">
                    <input
                      type="time"
                      value={openingHours[day].closing}
                      onChange={(e) =>
                        handleHourChange(day, "closing", e.target.value)
                      }
                    />
                  </td>
                  {/* <td className="py-2 px-4">
                    <input
                      type="checkbox"
                      checked={openingHours[day].closed}
                      onChange={(e) =>
                        handleHourChange(day, "closed", e.target.checked)
                      }
                    />
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          className="mt-4 py-2 px-4 bg-primary text-white font-bold rounded hover:bg-primary-dark"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default SchedulerTab;
