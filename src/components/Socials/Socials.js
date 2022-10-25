import {BsSlack, BsGithub} from 'react-icons/bs'
import './Socials.css'

function Socials() {
  return (
    <div className="socials">
        <a href='https://slack.com'><BsSlack className='social-icon' /></a>
        <a href='https://github.com/webala'><BsGithub className='social-icon' /></a>
    </div>
  )
}

export default Socials