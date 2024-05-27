import {Link} from 'react-router-dom';
import Slika from './logo.PNG';

function Header() {
    return (
      <div className="Header">
        <table>
            <tr>
                <td><Link to="/" style={{textDecoration: 'none', fontWeight: "bold"}}><img src={Slika} style={{width: "80px", height: "70px", padding: "0px"}}></img></Link></td>
                <td><Link to="/menu" style={{textDecoration: 'none', fontWeight: "bold", float: "left"}}>Palačinke</Link></td>
                <td><Link to="/location" style={{textDecoration: 'none', fontWeight: "bold", float: "left"}}>Lokacija</Link></td>
                <td><Link to="/contact" style={{textDecoration: 'none', fontWeight: "bold",   float: "left"}}>Kontakt</Link></td>
                <td>Stari Plac | Iris Capan</td>
            </tr>
        </table>
      </div>
    );
  }
  
  export default Header;
  