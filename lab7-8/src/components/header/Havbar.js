import './scss/Havbar.css'

import { NavLink } from 'react-router-dom';
import {HOME, CATALOG, CART} from '../../constants/routes';
const Navbar = () => {
    return (<div>
        <div className={'navbar'}>
            <ul>
                <li>
                    <NavLink className={({isActive}) => (
                        isActive ? 'nav-link active' : 'nav-link'
                    )} to={HOME} end>
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => (
                            isActive ? 'nav-link active' : 'nav-link'
                        )} to={CATALOG} end>
                        Catalog
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (
                        isActive ? 'nav-link active' : 'nav-link'
                    )} to={CART} end>
                        CART
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>)
}

export default Navbar