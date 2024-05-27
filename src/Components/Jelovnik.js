import Menu from './Menu';

function Jelovnik() {
    let dodaci = {n: "nutella", b: "banana", p: "preljev čokolada", m: "med", o: "orasi", s: "sladoled", sl: "šlag", j: "jabuka", c: "cimet", k: "kokos", pu: "puding čokolada", v: "višnja", ke: "keks", svj: "svježi sir", pre: "preljev karamela", o: "oreo", l: "lino-lada", lj: "lješnjaci", ba: "bademi", ml: "mlijeko", b:"bananko", mr: "šarene mrvice", d: "domaćica", co: "čoko kuglice", br: "brownie", kr: "krema", pa: "pahuljice", vo: "voće"};
    return (
      <div className="App">
        <Menu d={dodaci} />
      </div>
    );
  }
  
  export default Jelovnik;