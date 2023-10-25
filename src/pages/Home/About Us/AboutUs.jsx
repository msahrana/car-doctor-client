import person from "../../../../public/assets/images/about_us/person.jpg";
import parts from "../../../../public/assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div className="hero my-20 bg-base-100">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
        <img src={person} className="w-3/4 rounded-lg shadow-2xl"/>
        <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl"/>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold text-[#FF3811] py-6">About Us</h2>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-6">There are many variations of passages of Lorem Ipsum available, 
          but the majority have suffered alteration in some form, by injected humour, or 
          randomized words which do not look even slightly believable. 
          </p> <br />
          <p>The majority have suffered alteration in some form, by injected humour, or randomized 
            words which do not look even slightly believable. </p>
          <button className="btn bg-[#FF3811] mt-10 text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
