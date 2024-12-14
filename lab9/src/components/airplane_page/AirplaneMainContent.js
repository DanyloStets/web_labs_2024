import './css/AirplaneMainContent.css'
import {SUMMARY} from '../../constants/contentConstants'

import image777 from "../../img/777.jpeg"
import image747 from "../../img/747.jpg"
import image737 from "../../img/737.jpg"
import image787 from "../../img/787.jpg"

/*let initialAirplanes = [
    {
        id: 1,
        countOfPass: 400,
        author: "USA",
        title: "Boeing 777",
        description: "400",
        priceInUah: 75000,
        image: image777,
    },
    {
        id: 2,
        countOfPass: 300,
        author: "USA",
        title: "Boeing 737",
        description: "",
        priceInUah: 45000,
        image: image737
    },
    {
        id: 3,
        countOfPass: 320,
        author: "USA",
        title: "Boeing 747",
        description: "",
        priceInUah: 50000,
        image: image747
    },
    {
        id: 4,
        countOfPass: 450,
        author: "USA",
        title: "Boeing 787",
        description: "",
        priceInUah: 90000,
        image: image787
    }
];*/

const AirplaneMainContent = (props) => {
    return (
        <div className={'content-wrapper'}>
            <div className={'img-wrapper'}>
                <div className={'airplane-img-back'}>
                    <img src={props.image} alt={'Airplane'}/>
                </div>
            </div>
            <div className={'information-wrapper'}>
                <div className={'information-header'}>
                    <div className={'author-title'}>
                        <h1>{props.title}</h1>
                        <h2>{props.author}</h2>
                    </div>
                </div>
                <div className={'description'}>
                    <h3> Summary </h3>
                    <p>
                        {props.description + SUMMARY}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AirplaneMainContent