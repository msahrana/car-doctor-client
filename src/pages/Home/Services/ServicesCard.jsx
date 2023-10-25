// import { CgArrowRight } from "react-icons/fa";

const ServicesCard = ({service}) => {
    const { img, title, price } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl mx-5 h-[210px]"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-2xl">{title}</h2>
        <p className="text-[#FF3811] text-xl font-semibold">Price: ${price}</p>
        <div className="card-actions">
          {/* <button className="btn btn-primary"><CgArrowRight/></button> */}
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
