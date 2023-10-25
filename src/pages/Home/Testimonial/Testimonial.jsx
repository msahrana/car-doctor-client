import test1 from '../../../../public/assets/images/cusromer/Ellipse1.svg'
import test2 from '../../../../public/assets/images/cusromer/Ellipse2.svg'
import pic from '../../../../public/assets/icons/quote.svg'

const Testimonial = () => {
    return (
        <div className="mb-12">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-[#FF3811]">Testimonial</h2>
                <h1 className="text-5xl font-bold py-5">What Customer Says</h1>
                <p className="">The majority have suffered alteration in some form, 
                by injected humour, or randomized <br /> words which do not look even slightly 
                believable.</p>
            </div>
            <div className="flex gap-6 py-10">
                <div className='card-actions border-2 rounded-lg w-1/2 p-8'>
                    <div className="flex">
                        <img src={test1} alt="" />
                        <div className='ml-4 mr-16'>
                            <h2 className='font-semibold'>Awlad Hossain</h2>
                            <p>Businessman</p>
                        </div>
                        <img className='w-14 h-14 ' src={pic} alt="" />
                    </div>
                    <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, 
                    but the majority have suffered alteration in some form, by injected 
                    humour, or randomized words which do not look even slightly believable.</p>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <div className='card-actions border-2 rounded-lg w-1/2 p-8'>
                    <div className="flex">
                        <img src={test2} alt="" />
                        <div className='ml-4 mr-16'>
                            <h2 className='font-semibold'>Awlad Ali</h2>
                            <p>Doctor</p>
                        </div>
                        <img className='w-14 h-14 ' src={pic} alt="" />
                    </div>
                    <p className='text-justify'>There are many variations of passages of Lorem Ipsum available, 
                    but the majority have suffered alteration in some form, by injected 
                    humour, or randomized words which do not look even slightly believable.</p>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Testimonial;