import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import BookingCard from './BookingCard';

// import { useLoaderData } from "react-router-dom";

  const Booking = () => {
  const {user} = useContext(AuthContext)

  const [booking, setBooking] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:5000/booking?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setBooking(data))
},[])

    // const data = useLoaderData()
    // console.log(data)

  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-6">My Booking: {booking.length}</h2>
      {/* <h2>user: {user}</h2> */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th><label><input type="checkbox" className="checkbox" /></label></th>
              <th className='text-xl font-bold'>Image</th>
              <th className='text-xl font-bold'>Service</th>
              <th className='text-xl font-bold'>Date</th>
              <th className='text-xl font-bold'>Price</th>
              <th className='text-xl font-bold'>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              booking.map(booking=> <BookingCard key={booking._id} booking={booking}></BookingCard>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
