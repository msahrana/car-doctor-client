import pic1 from '../../../../public/assets/icons/group.svg'
import pic2 from '../../../../public/assets/icons/group.svg'
import pic3 from '../../../../public/assets/icons/Wrench.svg'
import pic4 from '../../../../public/assets/icons/person.svg'
import pic5 from '../../../../public/assets/icons/check.svg'
import pic6 from '../../../../public/assets/icons/deliveryt.svg'

const Features = () => {
    return (
        <div className="mb-12">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-[#FF3811]">Core Features</h2>
                <h1 className="text-5xl font-bold py-5">Why Choose Us</h1>
                <p className="">the majority have suffered alteration in some form, 
                by injected humour, or randomized <br /> words which do not look even slightly 
                believable.</p>
            </div>
            <div className="flex justify-center items-center mx-auto gap-6">
                <div className='border-2 rounded-lg my-12'>
                    <img className='p-4 h-[75px] mx-auto' src={pic1} alt="" />
                    <p className='px-2 pb-2 font-bold'>Expert Team</p>
                </div>
                <div className='border-2 rounded-lg my-12'>
                    <img className='p-4 h-[75px] mx-auto' src={pic2} alt="" />
                    <p className='px-2 pb-2 font-bold'>Expert Team</p>
                </div>
                <div className='border-2 rounded-lg my-12'>
                    <img className='p-4 h-[75px] mx-auto' src={pic3} alt="" />
                    <p className='px-2 pb-2 font-bold'>24/7 Support</p>
                </div>
                <div className='border-2 rounded-lg my-12'>
                    <img className='p-4 h-[75px] mx-auto' src={pic4} alt="" />
                    <p className='px-2 pb-2 font-bold'>Best Equipment</p>
                </div>
                <div className='border-2 rounded-lg my-12'>
                    <img className='p-4 h-[75px] mx-auto' src={pic5} alt="" />
                    <p className='px-2 pb-2 font-bold'>100% Guranty</p>
                </div>
                <div className='border-2 rounded-lg my-12'>
                    <img className='p-4 h-[75px] mx-auto' src={pic6} alt="" />
                    <p className='px-2 pb-2 font-bold'>Timely Delivery</p>
                </div>
            </div>
        </div>
    );
};

export default Features;