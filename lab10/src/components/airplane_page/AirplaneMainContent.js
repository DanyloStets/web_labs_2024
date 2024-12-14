import './css/AirplaneMainContent.css'
import {SUMMARY} from '../../constants/contentConstants'

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