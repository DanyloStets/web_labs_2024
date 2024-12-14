import './scss/SectionHeader.css'
import {NavLink} from "react-router-dom";
import {CATALOG} from "../../constants/routes"

const SectionHeader = () => {
    return (
        <div className={'air-header'}>
            <h2 className={'best-seller'}> Best Seller </h2>
            <NavLink to={CATALOG} className={'view-all'}>View-All</NavLink>
        </div>
    )
}

export default SectionHeader