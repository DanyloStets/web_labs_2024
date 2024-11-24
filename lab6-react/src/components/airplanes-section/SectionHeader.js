import './scss/SectionHeader.css'

const SectionHeader = () => {
    return (
        <div className={'air-header'}>
            <h2 className={'best-seller'}> Best Seller </h2>
            <a  href={'#'} className={'view-all'}>View more</a>
        </div>
    )
}

export default SectionHeader