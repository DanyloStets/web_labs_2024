import './scss/AirCard.css'

const AirCard = (props) => {
    return (
        <div className={'airplanes-card'}>
            <img src={props.image} alt={props.title}/>
            <div className={'airplanes-information'}>
                <div className={'airplanes-top'}>
                    <h3 className={'airplanes-title'}>{props.title}</h3>
                    <p className={'airplanes-author'}>{props.author}</p>
                </div>
                <h3 className={'airplanes-price'}>{props.priceInUah + ' $'}</h3>
            </div>
        </div>
    )
}

export default AirCard