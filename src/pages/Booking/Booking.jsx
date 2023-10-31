import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import BookingCard from './BookingCard';
import axios from 'axios';


  const Booking = () => {
  const {user} = useContext(AuthContext)

  const [booking, setBooking] = useState([])
    const [reface, setReface] = useState(true)

  useEffect(()=>{
    axios.get(`http://localhost:5000/booking?email=${user?.email}`, {withCredentials: true})
    .then(res=> {
      setBooking(res.data)
    })
    // fetch(`http://localhost:5000/booking?email=${user?.email}`)
    // .then(res => res.json())
    // .then(data => setBooking(data))
},[user, reface])


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
              booking.map(booking=> <BookingCard key={booking._id} booking={booking} reface={reface} setReface={setReface}></BookingCard>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
