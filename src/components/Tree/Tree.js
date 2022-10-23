import Link from "../Link/Link"
import './Tree.css'

function Tree() {
    const links = [
        {
            name: 'Twitter Link',
            url: ''
        },
        {
            name: 'Zuri Team',
            url: 'https://training.zuri.team/'
        },
        {
            name: 'Zuri Books',
            url: 'https://books.zuri.team/'
        },
        {
            name: 'Python Books',
            url: 'https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>'
        },
        {
            name: 'Background Check for Coders',
            url: 'https://background.zuri.team/'
        },
        {
            name: 'Design Book',
            url: 'https://books.zuri.team/design-rules'
        },
    ]
  return (
    <div className="tree">
     {links.map((link) => {
        return (
            <Link url={link.url} name={link.name} />
        )
     })}
    </div>
  )
}

export default Tree