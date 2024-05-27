import {Link} from 'react-router-dom';

function Footer() {
    return (
      <div className="Footer">
        <table>
          <tr>
            <td style={{textAlign: "right", padding: "5px"}}>
              <ul>
            O nama
            <li><Link to="/" style={{textDecoration: 'none', fontWeight: "bold"}}>Naslovna</Link></li>
            <li><Link to="/menu" style={{textDecoration: 'none', fontWeight: "bold"}}>Jelovnik</Link></li>
            <li><Link to="/location" style={{textDecoration: 'none', fontWeight: "bold"}}>Lokacija</Link></li>
            <li><Link to="/contact" style={{textDecoration: 'none', fontWeight: "bold"}}>Kontakt</Link></li>
        </ul>
        </td>
        <td style={{paddingLeft: "5px"}}>
        <b>Radno vrijeme:</b><br></br>
Pon - Ned: 08:00 - 22:00
</td>
</tr>
</table>
      </div>
    );
  }
  
  export default Footer;
  