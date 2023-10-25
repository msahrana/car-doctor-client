import AboutUs from "./About Us/AboutUs";
import Address from "./Address/Address";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import Products from "./Products/Products";
import Services from "./Services/Services";
import Team from "./Team/Team";
import Testimonial from "./Testimonial/Testimonial";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <Address></Address>
            <Products></Products>
            <Team></Team>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;