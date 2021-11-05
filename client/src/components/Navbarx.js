import {Navbar, NavDropdown, Nav, Container} from 'react-bootstrap';

function Navbarx()
{
    return(
      
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
           <form className="d-flex"> 
            <ul class="nav">
              <a class="nav-link active" aria-current="page" href="">Myntra</a>
            </ul>
           </form>
          </div>
        </div>
      </nav>
     
    )
};

export default Navbarx;