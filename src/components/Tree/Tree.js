import Link from "../Link/Link"
import './Tree.css'

function Tree() {
    const links = [
        {
            name: 'Twitter Link',
            url: 'https://twitter.com/Webbie1001',
            id: 'twitter__link',
            subText: ''
        },
        {
            name: 'Zuri Team',
            url: 'https://training.zuri.team/',
            id: 'btn__zuri',
            subText: 'Join The Zuri Team'
        },
        {
            name: 'Zuri Books',
            url: 'https://books.zuri.team/',
            id: 'books',
            subText: 'Get the Best Design And Coding Books'
        },
        {
            name: 'Python For Beginners',
            url: 'https://books.zuri.team/python-for-beginners?ref_id=webala',
            id: 'book__python',
            subText: 'Get started with python'
        },
        {
            name: 'Coders Background Check',
            url: 'https://background.zuri.team/',
            id: 'pitch',
            subText: 'We do background checks for coders'
        },
        {
            name: 'Design Book',
            url: 'https://books.zuri.team/design-rules',
            id: 'book__design',
            subText: 'Get our free design book'
        },
    ]
  return (
    <div className="tree">
     {links.map((link, index) => {
        return (
            <Link key={index} url={link.url} name={link.name} id={link.id} subText={link.subText}/>
        )
     })}
    </div>
  )
}

export default Tree