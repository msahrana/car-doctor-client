import Swal from "sweetalert2";

const BookingCard = ({ booking, bookings, setBookings }) => {
  const { _id, service, date, img, price } = booking;

  const handleDelete = _id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/booking/${_id}`,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if (data.deletedCount>0) {
                Swal.fire("Deleted!", "Your booking has been deleted.", "success");
                const remaining = bookings.filter(book => book._id !== _id)
                setBookings(remaining)
            }
        })
      }
    });
  };

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle bg-[#FF3811]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
        <button className="btn bg-[#FF3811] rounded-lg">Please Confirm</button>
      </th>
    </tr>
  );
};

export default BookingCard;
