import React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { db, doc, setDoc, getDoc, updateDoc } from "../../Firebase"; // assuming you have imported and initialized your Firebase app as `db`
import { toast } from "react-toastify";

const ITEM_HEIGHT = 48;

function LongMenu({ userId, bookings, bookingId }: any) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleBooking = async (status: any) => {
    try {
      // Save data to Firebase
      const docRef = doc(db, "users", userId); // Update document reference to use collection "users" and document ID from `userData.id`
      const bookingIndexToUpdate = bookings.findIndex(
        (booking: { bookingId: any }) => booking.bookingId === bookingId
      );
      if (bookingIndexToUpdate >= 0) {
        // Update the status of the booking with the specified ID
        const updatedBookings = [...bookings];
        updatedBookings[bookingIndexToUpdate].status = status;
        // Update the Firestore document with the new bookings array
        await updateDoc(docRef, { bookings: updatedBookings });
      }
      setAnchorEl(null);
      toast("Booking updated");
    } catch (error) {
      console.error("Error saving opening hours to Firebase: ", error);
      setAnchorEl(null);
    }
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem onClick={() => handleBooking("confirmed")}>
          Confirm Booking
        </MenuItem>
        <MenuItem onClick={() => handleBooking("rejected")}>
          Reject Booking
        </MenuItem>
      </Menu>
    </div>
  );
}

const TableHead = ({ HeaderValues }: any) => {
  // console.log("HeaderValues", HeaderValues);

  return (
    <div className="text-black p-2">
      <ul className="flex justify-between  items-center ">
        {HeaderValues?.map((el: any, index: React.Key) => (
          <li className="w-28 text-center" key={index}>
            {el.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
const TableRow = ({
  index,
  date,
  name,
  day,
  userId,
  bookingId,
  slot,
}: any) => {
  const timestamp = date?.seconds + date?.nanoseconds / 1e9;
  const dateObj = new Date(timestamp * 1000); // convert seconds to milliseconds
  const dateString = dateObj.toLocaleString("en-US", {
    timeZone: "Asia/Karachi",
  });

  return (
    <div className="text-black p-2 my-3 rounded-lg border-2 border-lightgrey shadow">
      <ul className="flex justify-between items-center ">
        <li className="w-28 text-center">{index + 1}</li>

        {/* <li className="w-28 text-center">{dateString && dateString}</li> */}

        <li className="w-28 text-center">
          <div className="bg-[#FF9D9D] bg-opacity-20 h-10 w-full rounded-3xl p-2 flex justify-center items-center text-xs">
            {name}
          </div>
        </li>
        <li className="w-28 text-center">{day}</li>
        <li className="w-28 text-center">{slot}</li>
        {/* <li className="w-28 text-center">
          <LongMenu userId={userId} bookings={bookings} bookingId={bookingId} />
        </li> */}
      </ul>
    </div>
  );
};
const Table = (props: any) => {
  return (
    <div className="p-4 rounded-lg border border-lightgrey  w-full shadow-md">
      {/* table header */}
      <TableHead HeaderValues={props.HeaderValues} />
      {/* table row */}

      {props.data?.bookings?.map((el: any, index: React.Key) => {
        return (
          <TableRow
            key={index}
            index={index}
            date={el.date}
            name={el.name}
            day={el.day}
            slot={el.slot}
            status={el.status}
            bookingId={el.bookingId}
            userId={props.data.id}
            bookings={props.data.bookings}
          />
        );
      })}
    </div>
  );
};

export default Table;
