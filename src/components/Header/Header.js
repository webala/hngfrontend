import dp from '../../Assets/dp.jpg'
import './Header.css'
import { TiArrowForwardOutline } from 'react-icons/ti'

function Header() {
  return (
    <div className="header">
        <div className='nav'>
            <div className='nav-button'>
                <TiArrowForwardOutline className='nav-button'/>
            </div>
        </div>
        <img className='dp' src={dp} />
        <p className='header-text'>Daniel Webala</p>
    </div>
  )
}

export default Header