// import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
// import { AuthContext } from "../../provider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  // const {user} = useContext(AuthContext)

  const { _id, price, title, img } = service;

  const handleBooking = e => {
    e.preventDefault()
    const form = e.target; 
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const booking = {
      customerName: name,
      email, 
      date,
      img,
      phone,
      service: title,
      service_id: _id, 
      price: price
    }
    console.log(booking)

    fetch('http://localhost:5000/booking',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res=> res.json())
    .then(data=>{
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Service Booking Successfully',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-5">Book Service: {title}</h1>
            <form onSubmit={handleBooking}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input type="date" name="date" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered" required />
                </div>
              </div>
              <div className="form-control mt-6">
                <input className="btn bg-[#FF3811] text-white mb-6" type="submit" value="Order Confirm" />
              </div>
            </form>
          </div>
  );
};

export default CheckOut;
