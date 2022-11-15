import P1 from '../../Images/P1.png';
import P2 from '../../Images/P2.png';
import P3 from '../../Images/P3.png';


function Carrusel() {
    return (
      <div className="Carrusel">
        <header className="App-body">
         
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={P1} className="Img-carrusel" alt="P1" />
                </div>
                <div class="carousel-item">
                <img src={P2} className="Img-carrusel" alt="P2" />
                </div>
                <div class="carousel-item">
                <img src={P3} className="Img-carrusel" alt="P3" />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
         
           

        </header>
      </div>
  
      
    );
  }

  export default Carrusel;