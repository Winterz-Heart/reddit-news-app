import { useState } from "react";
import { NavbarData } from "./NavabarData";
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

    return(
        <>
            <div className="navbar" >
                <p className="menu-button" onClick={showSidebar} >Show</p>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar} >
                    <li className="menu-button" >Hide</li>
                    {NavbarData.map((item, index) => {
                        return (
                            <li key={index} className={item.className} >
                                <Link to={item.path} >
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar