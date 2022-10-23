import './Link.css'

function Link({url, name}) {
    console.log('link: ', name)
  return (
    <a href={url} target='blank' className="link">
        <button className="link-btn">
            <p className="link-text">{name}</p>
        </button>
    </a>
  )
}

export default Link