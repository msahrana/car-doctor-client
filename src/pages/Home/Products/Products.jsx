import prod from "../../../../public/assets/images/products/frame.png";
import prod1 from "../../../../public/assets/images/products/1.png";
import prod2 from "../../../../public/assets/images/products/2.png";
import prod3 from "../../../../public/assets/images/products/3.png";
import prod4 from "../../../../public/assets/images/products/4.png";
import prod5 from "../../../../public/assets/images/products/5.png";
import prod6 from "../../../../public/assets/images/products/6.png";

const Products = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#FF3811]">Popular Products</h2>
        <h1 className="text-5xl font-bold py-5">Browse Our Products</h1>
        <p className="">
          The majority have suffered alteration in some form, by injected
          humour, or randomized <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card w-[350px] shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={prod1}
              alt="Shoes"
              className="rounded-xl bg-slate-100 w-full h-[200px]"
            />
          </figure>
          <div className="rating mx-auto mt-6">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cools Led Light</h2>
            <p className="text-[#FF3811] font-bold">$20.00</p>
          </div>
        </div>
        <div className="card w-[350px] shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={prod2}
              alt="Shoes"
              className="rounded-xl bg-slate-100 w-full h-[200px]"
            />
            
          </figure> 
          <div><img className="bg-white w-10 h-10 ml-60 -mt-40 p-2 rounded-lg" src={prod} alt=""/></div>
          <div className="rating mx-auto mt-6">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  checked/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cools Led Light</h2>
            <p className="text-[#FF3811] font-bold">$20.00</p>
          </div>
        </div>
        <div className="card w-[350px] shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={prod3}
              alt="Shoes"
              className="rounded-xl bg-slate-100 w-full h-[200px]"
            />
          </figure>
          <div className="rating mx-auto mt-6">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Air Filter</h2>
            <p className="text-[#FF3811] font-bold">$20.00</p>
          </div>
        </div>
        <div className="card w-[350px] shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={prod4}
              alt="Shoes"
              className="rounded-xl bg-slate-100 w-full h-[200px]"
            />
          </figure>
          <div className="rating mx-auto mt-6">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cools Led Light</h2>
            <p className="text-[#FF3811] font-bold">$20.00</p>
          </div>
        </div>
        <div className="card w-[350px] shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={prod5}
              alt="Shoes"
              className="rounded-xl bg-slate-100 w-full h-[200px]"
            />
          </figure>
          <div className="rating mx-auto mt-6">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cools Led Light</h2>
            <p className="text-[#FF3811] font-bold">$20.00</p>
          </div>
        </div>
        <div className="card w-[350px] shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={prod6}
              alt="Shoes"
              className="rounded-xl bg-slate-100 w-full h-[200px]"
            />
          </figure>
          <div className="rating mx-auto mt-6">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p className="text-[#FF3811] font-bold">$20.00</p>
          </div>
        </div>
      </div>
      <div className="card-actions justify-center">
        <button className="btn btn-outline btn-secondary my-12">
          More Products
        </button>
      </div>
    </div>
  );
};

export default Products;
