import { Link } from "react-router-dom"

const HeaderMenu = () => {
    return(
        <div className="header-menu">
            <Link to=''>about</Link>
            <Link to='/blog'>blog</Link>
            <Link to=''>portfolio</Link>
            <Link to=''>contact</Link>
        </div>
    )
}

export default HeaderMenu