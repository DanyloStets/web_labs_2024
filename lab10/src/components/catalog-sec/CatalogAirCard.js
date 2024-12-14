import styles from './css/CatalogAirCard.module.css'
import {Link} from "react-router-dom";
import {AIRPLANE} from "../../constants/routes";

const CatalogAirplaneCard = (props) => {
    return (
        <div className={styles['catalog-Airplane']}>
            <Link to={AIRPLANE + `?id=${props.id}`}>
                <img src={props.image} alt={'Airplane-image'}/>
            </Link>
            <div className={styles['Airplane-content']}>
                <div className={'left-'}>
                    <h3 className={styles['Airplane-title']}>{props.title}</h3>
                    <p className={styles['Airplane-author']}>{props.author}</p>
                    <p className={styles['Airplane-pass']}>{props.countOfPass}</p>
                </div>
                <div className={'right-'}>
                    <h3 className={styles['Airplane-price']}>{props.priceInUah + ' $'}</h3>
                </div>
            </div>
        </div>
    )
}

export default CatalogAirplaneCard