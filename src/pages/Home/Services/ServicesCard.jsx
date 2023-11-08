import { Link } from "react-router-dom";


const ServicesCard = ({service}) => {
    const { _id, img, title, price } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="img"
          className="rounded-xl mx-5 h-[210px]"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-2xl">{title}</h2>
        <p className="text-[#FF3811] text-xl font-semibold">Price: ${price}</p>
        <div className="card-actions">
          <Link to={`/checkout/${_id}`}>
            <button className="btn bg-[#FF3811]">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
