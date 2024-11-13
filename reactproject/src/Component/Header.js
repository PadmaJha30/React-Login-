import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css' ;     // first we have to import this file
function Header()
{
    return(
        <>
                 <nav className="navbar navbar-expand-lg  fixed-top" style={{backgroundColor:'#F5F5F7'}}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active navHover" aria-current="page" href="#" style={{color: 'Black'}}>Login</Link>
        </li>
        <li className="nav-item">
          <Link to='/register' className="nav-link navHover" href="#" style={{color: 'Black'}}>Register</Link>
        </li>

      </ul>

    </div>
  </div>
</nav>   
        </>
    )
}
export default Header