import './Link.css'

function Link({url, name, id, subText}) {
  return (
    <a href={url} target='blank' className="link" id={id}>
      <h2 className="link-text">{name}</h2>    
      <sub className='sub-text'>{subText}</sub>
    </a>
  )
}

export default Link