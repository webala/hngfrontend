import './Link.css'

function Link({url, name, id}) {
    console.log('link: ', name)
  return (
    <a href={url} target='blank' className="link" id={id}>
      <p className="link-text">{name}</p>    
    </a>
  )
}

export default Link