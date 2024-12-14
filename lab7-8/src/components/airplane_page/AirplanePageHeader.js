import './css/AirplanePageHeader.css'
import arrow from './../../img/Arrowarrow.png'
import {Link} from "react-router-dom";
import {CATALOG} from "../../constants/routes";

const AirplanePageHeader = () => {
    return (
        <div className={'Airplane-page-header'}>
            <Link to={CATALOG}>
                <img src={arrow} alt={'arrow'}/>
            </Link>
            <h2> Airplane Details </h2>
        </div>
    )
}

export default AirplanePageHeader;