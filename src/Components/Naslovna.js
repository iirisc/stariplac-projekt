import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import Slika from './pal1.png';

function Naslovna() {
    return (
      <div className="Naslovna">
        <Header/>
        <div className='svee'>
        <h1>O nama</h1>
        <br></br>
        <div className="sve">
        <h3 style={{fontSize: "20px", textAlign: "center"}}>Palačinke</h3><br></br><p style={{textAlign: "center", width: "60%"}}>Stari Plac najpoznatija je palačinkarnica u gradu Splitu. Ime smo dobili po najljepšem stadionu na svijetu, splitskom Starom placu. Prvi objekt smo otvorili upravo tamo, preko puta Starog placa 2014. godine i odmah napravili palačinke jednako slatke kao pobjede voljenog Hajduka. Ubrzo zatim, otvoren je Stari Plac na Splitu 3.
                U srcu Splita, među uskim kaletama i kamenim zidinama koje pričaju priče starih vremena, Stari Plac nije samo još jedna slatka stanica – ono je simbol tradicije, domaćinske topline i neodoljivih okusa. Interijer je jednostavan i funkcionalan, bez pretjeranih ukrasa i vintage elemenata, ali s naglaskom na čistoću i udobnost. Fokus je na onome što je doista važno – izvrsnoj hrani i ugodnoj atmosferi.
                Palačinke na Starom Placu nisu obične palačinke – one su prava umjetnička djela. Pripremljene po tradicionalnim receptima, s dodatkom moderne kreativnosti, nude širok spektar okusa. Bilo da ste ljubitelj klasičnih kombinacija poput čokolade i oraha, ili ste skloniji egzotičnim punjenjima s voćem i kremom, ovdje će svatko pronaći nešto za sebe.
                Osim slatkih varijanti, Stari Plac nudi i slane palačinke koje su jednako ukusne. Punjene sirom, šunkom, povrćem i raznim začinima, ove palačinke su savršene za one koji preferiraju nešto konkretnije. Svaka palačinka je pripremljena s pažnjom, koristeći svježe i kvalitetne sastojke, što se osjeti u svakom zalogaju.
                Već smo godinama omiljeno mjesto Splićanima koji obožavaju tradicionalni okus palačinki s punjenima koje obožavaju i djeca i odrasli. Šarm Starog Placa leži i u ljubaznosti osoblja. Vlasnici i zaposlenici uvijek su spremni s osmijehom dočekati goste, preporučiti najbolje kombinacije i podijeliti priče o povijesti ovog mjesta. Njihova strast prema onome što rade vidljiva je u svakom detalju, od savršeno pečene palačinke do tople atmosfere koja vlada cijelim prostorom.
                Stari Plac nije samo palačinkarnica – to je mjesto susreta, uživanja i stvaranja uspomena. Bilo da ste u prolazu kroz Split, ili ste stanovnik ovog predivnog grada, posjet Starom Placu je poput povratka kući, gdje su okusi, mirisi i osmijesi uvijek dobrodošli. Posjetite nas!</p>
        <br></br>
        <table>
            <tr>
                <td style={{width: "50%"}}><img src={Slika} style={{height: "370px", float: "left"}}></img></td>
                <td><h3 style={{textAlign: "center"}}>Jede ti se nešto <Link to="/menu" style={{color: "rgb(82, 50, 0)", backgroundColor: "rgba(255,255,255,0.7", padding: "2px", textDecoration: "none"}}>slatko?</Link></h3>
        <br></br>
        <p>Dobrodošli u Stari plac! Najfinije palačinke od najkvalitetnijih sastojaka čekaju na vas! Naše ljubazno osoblje pomoći će vam odabrati najbolje kombinacije sastojaka, a naše kuharice vaše će iskustvo u Starom placu učiniti nezaboravnim! Stari plac je savršeno mjesto za obiteljski izlazak uz palačinke, kao i mjesto najslađih sastanaka i prijateljskih druženja.</p></td>
            </tr>
        </table>
        </div> 
        <br></br>
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default Naslovna;
  