import "../css/Navbar.css";
import { Link } from "react-router-dom";
import newput_logo_hi_res from "../assets/newput_logo_hi_res.png"

function Navbar() {
    return (
        <div className="mainNavHeader">
            <div className="leftSide">
                <img className="headerIcon" src={newput_logo_hi_res} alt="logo" />
                <div className="headerNav">
                    <Link to="/" className="routes">Home</Link>
                    <Link to="/contact" className="routes">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;