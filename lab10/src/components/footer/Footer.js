import './scss/Footer.css'
import logo from './../../img/blockchain.png'
import SocialNetworks from "./SocialNetworks";

const Footer = () => {
    return (
        <footer className={'footer-container'}>
            <div className={'footer-content'}>
                <div className={'top-content'}>
                    <div className={'website-inform'}>
                        <h3>Boeing Company</h3>
                        <p>The best airplanes company in the world!
                        </p>
                    </div>
                    <img className={'logo'} src={logo} alt={'Logo'}/>
                    <SocialNetworks/>
                </div>
                <hr/>
                <p className={'copyright'}>
                    2025 © Copyright all rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer