import React, {useState} from 'react';
import { NavList } from './NavList';
import { NavLink } from 'react-router-dom';

const Navbar = props => {

    const Navigation = NavList.map(({title, url}, i) => {
      return (
        <li className="nav-item" key={i}>
          <NavLink exact to={url} activeClassName="active" className="nav-link" aria-current="page">{title}</NavLink>
       </li>
      )
    }) 

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
       
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <h1 className="text-light px-4" style={{userSelect:"none"}}>Stockr.</h1>
            
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>  
                <span className="navbar-toggler-icon"></span>
              </button>

            
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end m-3 `} id="navbarDropDown">
              <ul className="navbar-nav px-2">
                {Navigation}
              </ul>
              </div>
         

          </div>
        </nav>
    )
 }
 export default Navbar;