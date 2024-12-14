import banner from './../../img/boeing.jpg'
import './scss/Banner.css'
import SliderDots from "./SliderDots";

const Banner = () => {
    return (
        <div className={'banner-wrapper'}>
            <div className="banner">
                <img src={banner} alt="" className="banner"/>
                <p className={'on-banner-text'}>
                    <span>Boeing</span> <br/>
                    The best company
                </p>
            </div>
            <SliderDots/>
        </div>
    )
}

export default Banner