import './Link.css'
import {Link as Ln} from 'react-router-dom'

function Link({url, name, id, subText, target}) {

  if (name === 'Contact') {
    return (
      <Ln to={url} className='link' id={id}>
        <h2 className="link-text">{name}</h2>    
        <sub className='sub-text my-2'>{subText}</sub>
      </Ln>
    )
  } else {
  return (
    <a href={url} target={target} className="link" id={id}>
      <h2 className="link-text">{name}</h2>    
      <sub className='sub-text my-2'>{subText}</sub>
    </a>
  )
  }
}

export default Link