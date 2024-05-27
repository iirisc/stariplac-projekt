import Header from './Header';
import Footer from './Footer';

function Location() {
    return (
      <div className="Location">
        <Header/>
        <div className='svee'>
        <h2>Stari plac</h2>
        <br></br>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11574.176483788535!2d16.42640537875976!3d43.511844892264726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355dfc5e745723%3A0xce584b438f13bc81!2sStari%20plac%20-%20Cr%C3%AApes%20%26%20Waffles!5e0!3m2!1shr!2shr!4v1716734908147!5m2!1shr!2shr" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <br></br><br></br><hr></hr>
        <h2>Stari plac 2</h2>
        <br></br>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11574.559765229984!2d16.461340634633157!3d43.50984628024213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355e2216696c99%3A0x247887941023f2e7!2sStari%20plac%202!5e0!3m2!1shr!2shr!4v1716734848335!5m2!1shr!2shr" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default Location;
  