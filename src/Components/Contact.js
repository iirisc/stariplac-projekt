import Header from './Header';
import Footer from './Footer';
import Slika from './pal3.png';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export class Contact extends Component{
  state={
    ime: '',
    prezime: '',
    email: '',
  }
  onSubmit=()=>{ console.log(this.state)}
    render()
    {
      return(
        <div>
          <Header/>
          <div className='svee'>
          <h2>Kako biste nas kontaktirali upišite podatke:</h2>
          <br></br>
        <form> 
          <input placeholder='Ime' value={this.state.ime} onChange={e=>this.setState({ime: e.target.value})}/>
          <br></br>
          <input placeholder='Prezime' value={this.state.prezime} onChange={e=>this.setState({prezime: e.target.value})} />
          <br></br>
          <input placeholder='Email' value={this.state.email} onChange={e=>this.setState({email: e.target.value})} />
          <br></br>
          <button onClick={()=>this.onSubmit()} style={{backgroundColor: "rgb(153, 100, 14)"}}>Potvrdi</button>
        </form>
        <br></br>
        <hr></hr>
        <p>Ime: {this.state.ime}</p>
        <p>Prezime: {this.state.prezime}</p>
        <p>Email: {this.state.email}</p>
        <hr></hr>
        <br></br><br></br>
        <div>
        <h3>Kontaktirajte nas - Stari Plac</h3>
<br></br>
<p>Hvala vam što ste posjetili našu web stranicu! Stari Plac s ponosom služi najbolje palačinke u Splitu, a želimo osigurati da svaki vaš posjet bude poseban. Ako imate pitanja, prijedloge ili jednostavno želite podijeliti svoje iskustvo, slobodno nas kontaktirajte.
</p>
<br></br>
<ul>Lokacije:

<li>Stari Plac - Centar</li>

<li>Stari Plac - Split 3</li>
</ul>
<br></br>
<b>Radno vrijeme:</b>
<br></br>
Pon - Ned: 08:00 - 22:00
<br></br>
<br></br>
<b>Pratite nas:</b>
<br></br>
<b>Facebook:</b> @stariplac
<br></br>
<b>Instagram:</b> @stariplac
<br></br>
<br></br>
<b>Kako nas pronaći:</b>
<br></br>
Naše <Link to="/location" style={{textDecoration: "none"}}><b>lokacije</b></Link> lako su dostupne i smještene u srcu Splita. Posjetite nas i uživajte u neodoljivim okusima naših palačinki. Radujemo se vašem dolasku!


        </div>
        <img src={Slika} style={{height: "560px"}}></img>
        </div>
        <Footer/>
        </div>
      );
    }
  }
  
  export default Contact;
  