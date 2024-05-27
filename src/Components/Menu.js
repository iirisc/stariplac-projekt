import Header from './Header';
import Footer from './Footer';

function Menu({d}) {
  return (
    <div className="Menu">
      <Header />
      <div className='svee'>
      <table style={{margin: "5px"}}>
        <tr>
          <th>Banana</th>
          <td>4.1€</td>
        </tr>
        <tr>
          <td>{d.n}, {d.b}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Med i orasi</th>
          <td>4.2€</td>
        </tr>
        <tr>
          <td>{d.m}, {d.o}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Jabučica</th>
          <td>4.4€</td>
        </tr>
        <tr>
          <td>{d.n}, {d.j}, {d.o}, {d.c}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Osvježavajuća</th>
          <td>4.4€</td>
        </tr>
        <tr>
          <td>{d.n}, {d.s}, {d.sl}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Čupava banana</th>
          <td>4.5€</td>
        </tr>
        <tr>
          <td>{d.n}, {d.b}, {d.k}, {d.pu}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Fit</th>
          <td>4.5€</td>
        </tr>
        <tr>
          <td>{d.m}, {d.v}, {d.svj}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Višnjica</th>
          <td>4.5€</td>
        </tr>
        <tr>
          <td>{d.n}, {d.v}, {d.ke}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Čokomanija</th>
          <td>4.7€</td>
        </tr>
        <tr>
          <td>{d.n}, {d.o}, {d.co}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Oreo</th>
          <td>4.7€</td>
        </tr>
        <tr>
          <td>{d.l}, {d.o}, {d.v}, {d.sl}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Snickers</th>
          <td>4.7€</td>
        </tr>
        <tr>
          <td>{d.n}, snickers, {d.ke}, {d.pu}, {d.pre}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Bananko</th>
          <td>4.8€</td>
        </tr>
        <tr>
          <td>{d.n}, {d.b}, {d.ke}, {d.ml}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Nougat</th>
          <td>4.8€</td>
        </tr>
        <tr>
          <td>{d.l}, {d.lj}, {d.sl}, {d.pre}</td>
        </tr>
        <br></br>
        <tr>
          <th>Rafaelo</th>
          <td>4.8€</td>
        </tr>
        <tr>
          <td>{d.l}, {d.ba}, {d.k}, {d.pu}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Čokoladna fantazija</th>
          <td>4.9€</td>
        </tr>
        <tr>
          <td>{d.n}, {d.d}, {d.co}, {d.pu}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Party palačinka</th>
          <td>4.9€</td>
        </tr>
        <tr>
          <td>{d.n}, {d.ke}, {d.mr}, {d.co}, {d.sl}</td>
        </tr>
        <br></br>
        <tr>
          <th>Brownies</th>
          <td>5€</td>
        </tr>
        <tr>
          <td>{d.l}, {d.br}, {d.pu}, {d.sl}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Maxi king</th>
          <td>5€</td>
        </tr>
        <tr>
          <td>{d.n}, maxi king, {d.lj}, {d.pu}, {d.sl}, {d.pre}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Barni</th>
          <td>5.1€</td>
        </tr>
        <tr>
          <td>{d.n}, {d.ke}, {d.ml}, barni, {d.mr}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Happy hippo</th>
          <td>5.1€</td>
        </tr>
        <tr>
          <td>{d.l}, happy hippo, {d.mr}, {d.pre}</td>
        </tr>
        <br></br>
        <tr>
          <th>Kinder bueno</th>
          <td>5.1€</td>
        </tr>
        <tr>
          <td>{d.n}, kinder bueno, {d.ke}, {d.pu}, {d.s}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Kinder country</th>
          <td>5.1€</td>
        </tr>
        <tr>
          <td>{d.l}, kinder country, {d.pa}, {d.pu}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Kit Kat</th>
          <td>5.1€</td>
        </tr>
        <tr>
          <td>{d.n}, kit kat, {d.ke}, {d.pu}, {d.s}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Milch shnitte</th>
          <td>5.1€</td>
        </tr>
        <tr>
          <td>{d.kr}, {d.o}, kinder milch shnitte, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Rapsodija </th>
          <td>5.1€</td>
        </tr>
        <tr>
          <td>{d.l}, {d.v}, mascarpone, {d.pu}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Čoko bombončići</th>
          <td>5.2€</td>
        </tr>
        <tr>
          <td>{d.l}, {d.ba}, {d.co}, {d.pu}, {d.s}</td>
        </tr>
        <br></br>
        <tr>
          <th>Domaćica</th>
          <td>5.2€</td>
        </tr>
        <tr>
          <td>{d.l}, domaćica, {d.vo}, {d.s}, {d.sl}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Ferrero</th>
          <td>5.2€</td>
        </tr>
        <tr>
          <td>{d.l}, ferrero rocher, {d.pu}, {d.sl}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Jagodica bobica</th>
          <td>5.2€</td>
        </tr>
        <tr>
          <td>{d.n}, jagoda, {d.pu}, {d.sl}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Cheesecake</th>
          <td>5.3€</td>
        </tr>
        <tr>
          <td>{d.kr}, {d.ke}, {d.v}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Choco mix</th>
          <td>5.3€</td>
        </tr>
        <tr>
          <td>{d.l}, {d.br}, {d.ke}, {d.pu}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Proteinska</th>
          <td>5.3€</td>
        </tr>
        <tr>
          <td>maslac od kikirikija, {d.b}, {d.c}, {d.m}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Bounty</th>
          <td>5.4€</td>
        </tr>
        <tr>
          <td>{d.l}, {d.k}, bounty, {d.pu}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Kinder čokolada</th>
          <td>5.4€</td>
        </tr>
        <tr>
          <td>{d.l}, kinder čokolada, {d.b}, {d.o}, {d.lj}, {d.pu}, {d.sl}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Monte</th>
          <td>5.5€</td>
        </tr>
        <tr>
          <td>{d.n}, {d.ke}, {d.ba}, monte, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Bezglutenska palačinka</th>
          <td>6.3€</td>
        </tr>
        <tr>
          <td>3 dodatka po izboru</td>
        </tr>
        <br></br>
        <tr>
          <th>Malinica</th>
          <td>6.3€</td>
        </tr>
        <tr>
          <td>{d.n}, malina, {d.pu}, {d.sl}, {d.p}</td>
        </tr>
        <br></br>
        <tr>
          <th>Svježa malinica</th>
          <td>6.4€</td>
        </tr>
        <tr>
          <td>{d.n}, malina, {d.pu}, {d.co}, {d.k}, {d.sl}, {d.pre}</td>
        </tr>
        <br></br>
        <tr>
          <th>Bombastična palačinka</th>
          <td>7€</td>
        </tr>
        <tr>
          <td>{d.n}, {d.l}, kinder pingui, kinder bueno, {d.co}, {d.pu}, {d.s}, {d.sl}, {d.pre}</td>
        </tr>
      </table>
      </div>
      <Footer/>
    </div>
  );
}

export default Menu;
