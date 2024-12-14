import logo from '../../img/blockchain.png'
import './scss/Title.css'
const Title = () => {
  return (
      <div className={'title-container'}>
          <img src={logo} alt="" className={'logo'}/>
      </div>
  )
}

export default Title