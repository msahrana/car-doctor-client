import Swal from "sweetalert2";

const BookingCard = ({ booking, reface, setReface }) => {
  const { _id, service, date, img, price, status } = booking;

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

        fetch(`https://car-doctor-server-wine-theta.vercel.app/booking/${_id}`,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if (data.deletedCount>0) {
                Swal.fire("Deleted!", "Your booking has been deleted.", "success");
                setReface(!reface)
            }
        })
      }
    });
  };

  // const update2 = _id =>{
  //   fetch(`http://localhost:5000/booking/${_id}`,{
  //     method: 'PATCH',
  //     headers: {
  //       'content-type':'application/json'
  //     },
  //     body: JSON.stringify({status: 'confirm'})
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     if (data.modifiedCount > 0){
  //       setReface(!reface)
  //     }
  //   })  
  // }

  const handleUpdate = _id =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, confirm it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://car-doctor-server-wine-theta.vercel.app/booking/${_id}`,{
      method: 'PATCH',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.modifiedCount > 0){
        Swal.fire('Updated!','Your booking has been updated.','success')
        setReface(!reface)
      }
    })  
      }
    })
  }
  

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle ">
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
        { status === 'confirm' ? <span className="font-bold text-green-400">Confirmed</span> :
          <button onClick={()=> handleUpdate (_id)} className="btn btn-ghost rounded-lg">Please Confirm</button>
        }
      </th>
    </tr>
  );
};

export default BookingCard;
