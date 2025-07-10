
import Header from './Header';
import HeplUs_WhyUs from './HeplUs_WhyUs';
import Slider from './Slider/Slider';
import SliderCategory from './Slider/SliderCategory';

const Home = () =>{
    return(
        <>
            <Slider />
                {/* why eventplanner and help us section */}
                <HeplUs_WhyUs/>
                <SliderCategory/>
        </>
    )
}
export default Home