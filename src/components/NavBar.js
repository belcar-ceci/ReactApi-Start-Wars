import { Link } from "react-router-dom";
import { Fragment } from "react";
import StartWars from "../assets/img/StartWars.png";
import '../assets/style/navbar.css';

function NavBar() {
  return (
    <Fragment>
      <nav>
        <div className="containerNav">
          <div className="containerStartWars">
            <img  
              className="StarWarsLogo"
              src={StartWars}
              alt="Logo"
            />
          </div>
          <div className="entryUser">
            <button className="LoginUser">LOGIN</button>
            <button>
              <Link to="/SignUp">SIGN UP</Link>
            </button>
          </div>
        </div>
        <div className="menuHome">
          <button>
            <Link to="/">HOME</Link>
          </button>
          <button>
            <Link to="/ShowShips">INTERACTIVE SHIPS</Link>
          </button>
          <button>
            <Link to="/">STARTSHIPS</Link>
          </button>
        </div>
      </nav>
    </Fragment>
  );
}
export default NavBar;
