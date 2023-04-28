import React, { useState, useEffect, useContext } from "react";

import { AppContext } from "../../store/AppProvider/AppProvider";
import { db, doc, setDoc, getDoc, updateDoc } from "../../Firebase"; // assuming you have imported and initialized your Firebase app as `db`
import { toast } from "react-toastify";
const SchedulerTab = () => {
  const { userData } = useContext(AppContext);
  // State for storing the opening and closing hours for each day of the week
  const [openingHours, setOpeningHours] = useState({
    Monday: { opening: "", closing: "", closed: false },
    Tuesday: { opening: "", closing: "", closed: false },
    Wednesday: { opening: "", closing: "", closed: false },
    Thursday: { opening: "", closing: "", closed: false },
    Friday: { opening: "", closing: "", closed: false },
    Saturday: { opening: "", closing: "", closed: false },
    Sunday: { opening: "", closing: "", closed: false },
  });

  // Fetch existing opening hours from Firebase on component mount
  useEffect(() => {
    const fetchOpeningHours = async () => {
      try {
        // Fetch data from Firebase
        const docRef = doc(db, "users", userData.id); // Update document reference to use collection "users" and document ID from `userData.id`
        const docSnap = await getDoc(docRef);

        // Update state with fetched data or set default opening hours if data is undefined
        if (docSnap.exists() && docSnap?.data()?.openingHours) {
          const openingHourFromFIrebase = docSnap?.data()?.openingHours;
          const formattedOpeningHours = Object.keys(openingHours).reduce(
            (acc, day) => {
              acc[day] = {
                opening: openingHourFromFIrebase[day].opening,
                closing: openingHourFromFIrebase[day].closing,
                closed: openingHourFromFIrebase[day].closed,
              };
              return acc;
            },
            {}
          );
          setOpeningHours(formattedOpeningHours);
        } else {
          setOpeningHours({
            Monday: { opening: "", closing: "", closed: false },
            Tuesday: { opening: "", closing: "", closed: false },
            Wednesday: { opening: "", closing: "", closed: false },
            Thursday: { opening: "", closing: "", closed: false },
            Friday: { opening: "", closing: "", closed: false },
            Saturday: { opening: "", closing: "", closed: false },
            Sunday: { opening: "", closing: "", closed: false },
          });
        }
      } catch (error) {
        console.error("Error fetching opening hours from Firebase: ", error);
      }
    };

    fetchOpeningHours();
  }, []);

  // Event handler for handling changes in the opening and closing hours
  const handleHourChange = (day, field, value) => {
    setOpeningHours((prevOpeningHours) => ({
      ...prevOpeningHours,
      [day]: {
        ...prevOpeningHours[day],
        [field]: value,
      },
    }));
  };

  // Event handler for submitting form and saving opening hours to Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save data to Firebase
      const docRef = doc(db, "users", userData.id); // Update document reference to use collection "users" and document ID from `userData.id`

      await updateDoc(docRef, {
        openingHours: openingHours,
      });
      toast("Opening hours saved to Firebase!");
    } catch (error) {
      console.error("Error saving opening hours to Firebase: ", error);
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
              <th className="w-1/4 py-2 px-4 text-left font-semibold">Opening Time</th>
              <th className="w-1/4 py-2 px-4 text-left font-semibold">Closing Time</th>
              <th className="w-1/4 py-2 px-4 text-left font-semibold">Closed</th>
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
                  <td className="py-2 px-4">
                    <input
                      type="checkbox"
                      checked={openingHours[day].closed}
                      onChange={(e) =>
                        handleHourChange(day, "closed", e.target.checked)
                      }
                    />
                  </td>
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
