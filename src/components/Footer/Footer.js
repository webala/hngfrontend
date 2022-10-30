import './Footer.css'
import IngForGood from '../../Assets/ingressive-for-good.webp'


function Footer() {
  return (
    <div className='footer'>
        <h1 className='title'>Zuri <span>.</span> Internship</h1>
        <p className='small'>HNG 9 Internship Frontend Task</p>
        <img className='footer-img' src={IngForGood} alt='ingressive-for-good' />
    </div>
  )
}

export default Footer