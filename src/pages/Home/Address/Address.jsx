import pic1 from "../../../../public/assets/images/address/Group33.svg";
import pic2 from "../../../../public/assets/images/address/Group34.svg";
import pic3 from "../../../../public/assets/images/address/Group35.svg";



const Address = () => {
    return (
        <div className="h-[250px] bg-[#151515] flex text-white rounded-lg justify-evenly items-center mb-20">
            <div className="flex">
                <div>
                 <img className="mr-5 pt-2" src={pic1} alt="" />
                </div>
                <div>
                    <p className="text-xl">We are open monday-friday</p>
                    <p className="text-2xl font-semibold">7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className="flex">
                <div>
                    <img className="mr-5 pt-2" src={pic2} alt="" />
                </div>
                <div>
                    <p className="text-xl">Have a question?</p> 
                    <p className="text-2xl font-semibold">+880 1722 445288</p>
                </div>
            </div>
            <div className="flex">
                <div>
                    <img className="mr-5 pt-2" src={pic3} alt="" />
                </div>
                <div>
                    <p className="text-xl">Need a repair? our address</p> 
                    <p className="text-2xl font-semibold">Rangpur, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default Address;