import Link from "../Link/Link"
import './Tree.css'

function Tree() {
    const links = [
        {
            name: 'Twitter Link',
            url: 'https://twitter.com/Webbie1001',
            id: 'twitter__link'
        },
        {
            name: 'Zuri Team',
            url: 'https://training.zuri.team/',
            id: 'btn__zuri'
        },
        {
            name: 'Zuri Books',
            url: 'https://books.zuri.team/',
            id: 'books'
        },
        {
            name: 'Python Books',
            url: 'https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>',
            id: 'book__python'
        },
        {
            name: 'Background Check for Coders',
            url: 'https://background.zuri.team/',
            id: 'pitch'
        },
        {
            name: 'Design Book',
            url: 'https://books.zuri.team/design-rules',
            id: 'book__design'
        },
    ]
  return (
    <div className="tree">
     {links.map((link, index) => {
        return (
            <Link key={index} url={link.url} name={link.name} id={link.id}/>
        )
     })}
    </div>
  )
}

export default Tree