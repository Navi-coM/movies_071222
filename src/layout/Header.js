import { NavLink, Link } from 'react-router-dom';

const setActive = ({isActive}) => isActive ? 'active-link' : '';

function Header() {
    return (
        <nav className="indigo darken-4">
            <div className="nav-wrapper container">
                <Link to="/">Movies SPA</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {/* <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About me</a>
                    </li> */}
                    <li>
                        <NavLink to="/" className={setActive}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"  className={setActive}>About me</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export { Header };