import dp from '../../Assets/dp.jpg'
import './Header.css'
import { TiArrowForwardOutline } from 'react-icons/ti'

function Header() {
  return (
    <div className="header">
        <div className='nav'>
            <div className='nav-button'>
                <TiArrowForwardOutline />
            </div>
        </div>
        <img className='dp' id='profile__img' src={dp} alt='profile'/>
        <p id='twitter' className='header-text'>Webbie1001</p>
        <p id='slack' className='header-text'>webala</p>
    </div>
  )
}

export default Header