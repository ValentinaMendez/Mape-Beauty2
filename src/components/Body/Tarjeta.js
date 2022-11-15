import Gel from '../../Images/Gel.png';
import Img1 from '../../Images/P-Principal/Img1.png';
import Img2 from '../../Images/P-Principal/Img2.png';
import Img3 from '../../Images/P-Principal/Img3.png';
import Img4 from '../../Images/P-Principal/Img4.png';
import Img5 from '../../Images/P-Principal/Img5.png';
import Img6 from '../../Images/P-Principal/Img6.png';
import Img7 from '../../Images/P-Principal/Img7.png';
import Img8 from '../../Images/P-Principal/Img8.png';

function Tarjeta() {
    return (
      <div className="Tarjeta" >
        <header className="App-tarjeta">
        <br></br>
        <br></br>
        <h1 className='h1'>DISEÑOS</h1>
        <br></br>
        <div class="row row-cols-1 row-cols-md-4 g-4">

  <div class="col1">
  <div class="card bg-danger mb-3 border-dark mb-3">
              
              <div class="card-header  "><blockquote class="text-left"
              >Uñas en gel <h5 class ="text-end" >$ 120.000</h5>
              </blockquote>
              
              </div>
              <img src={Img1} className="App-Gel" alt="Gel" />
                <div class="card-body">

                <div>
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"  aria-controls="collapseOne">
                    Descripción
                  </button>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>LÍNEAS ABSTRACTAS:</strong> Son máxima tendencia los diseños de uñas decorados con líneas abstractas
                      y este en blanco y negro nos parece un acierto seguro.</div>
                  </div>
                </div>
                <br></br>
                <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                   <button type="button" class="btn btn-primary btn-sm">Prueba filtro</button>
                   <button type="button" class="btn btn-primary btn-sm">Sacar cita</button>
                </div>
                </div>
              </div>
        </div> 
  
        <div class="col2">
  <div class="card bg-danger mb-3 border-dark mb-3">
              
              <div class="card-header  "><blockquote class="text-left"
              >Uñas acrilicas <h5 class ="text-end" >$ 115.000</h5>
              </blockquote>
              
              </div>
              <img src={Img3} className="App-Gel" alt="Acrilica" />
                <div class="card-body">

                <div>
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"  aria-controls="collapseTwo">
                    Descripción
                  </button>
                  <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>MIX DE ESTAMPADOS:</strong>Otro diseño muy original es este que combina estampado de flores con print damero en color marrón.  </div>
                  </div>
                </div>
                <br></br>
                <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                   <button type="button" class="btn btn-primary btn-sm">Prueba filtro</button>
                   <button type="button" class="btn btn-primary btn-sm">Sacar cita</button>
                </div>
                </div>
              </div>
        </div> 

        <div class="col3">
  <div class="card bg-danger mb-3 border-dark mb-3">
              
              <div class="card-header  "><blockquote class="text-left"
              >Uñas naturales <h5 class ="text-end" >$ 60.000</h5>
              </blockquote>
              
              </div>
              <img src={Img5} className="App-Gel" alt="natural" />
                <div class="card-body">

                <div>
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"  aria-controls="collapseThree">
                    Descripción
                  </button>
                  <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>TONO CALIDO:</strong>Los colores clásicos y suaves son rosa claro, beige, durazno claro, salmón o arena, los cuales le darán belleza natural a tus manos. Si usas un esmalte en combinación con brillo le darás luminosidad a tu look.</div>
                  </div>
                </div>
                <br></br>
                <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                   <button type="button" class="btn btn-primary btn-sm">Prueba filtro</button>
                   <button type="button" class="btn btn-primary btn-sm">Sacar cita</button>
                </div>
                </div>
              </div>
        </div> 

        <div class="col4">
  <div class="card bg-danger mb-3 border-dark mb-3">
              
              <div class="card-header  "><blockquote class="text-left"
              >Uñas para pies <h5 class ="text-end" >$ 55.000</h5>
              </blockquote>
              
              </div>
              <img src={Img7} className="App-Gel" alt="Pies" />
                <div class="card-body">

                <div>
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour"  aria-controls="collapseFour">
                    Descripción
                  </button>
                  <div id="collapseFour" class="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>FLORES:</strong> Las flores son muy peculiares al momento de realizar los diseños en el decorado de uñas. </div>
                  </div>
                </div>
                <br></br>
                <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                   <button type="button" class="btn btn-primary btn-sm">Prueba filtro</button>
                   <button type="button" class="btn btn-primary btn-sm">Sacar cita</button>
                </div>
                </div>
              </div>
        </div> 

        <div class="col5">
  <div class="card bg-danger mb-3 border-dark mb-3">
              
              <div class="card-header  "><blockquote class="text-left"
              >Uñas para pies <h5 class ="text-end" >$ 50.000</h5>
              </blockquote>
              
              </div>
              <img src={Img8} className="App-Gel" alt="Pies" />
                <div class="card-body">

                <div>
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive"  aria-controls="collapseFive">
                    Descripción
                  </button>
                  <div id="collapseFive" class="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>BRILLO EN DEGRADE:</strong> El degradé va hacia arriba, pero podría ir en el otro sentido.</div>
                  </div>
                </div>
                <br></br>
                <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                   <button type="button" class="btn btn-primary btn-sm">Prueba filtro</button>
                   <button type="button" class="btn btn-primary btn-sm">Sacar cita</button>
                </div>
                </div>
              </div>
        </div> 

        <div class="col6">
  <div class="card bg-danger mb-3 border-dark mb-3">
              
              <div class="card-header  "><blockquote class="text-left"
              >Uñas naturales <h5 class ="text-end" >$ 90.000</h5>
              </blockquote>
              
              </div>
              <img src={Img6} className="App-Gel" alt="Natural" />
                <div class="card-body">

                <div>
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix"  aria-controls="collapseSix">
                    Descripción
                  </button>
                  <div id="collapseSix" class="accordion-collapse collapse show" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>FRANCÉS CON LILA PASTEL:</strong> francés con un decorado en tonos blancos.</div>
                  </div>
                </div>
                <br></br>
                <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                   <button type="button" class="btn btn-primary btn-sm">Prueba filtro</button>
                   <button type="button" class="btn btn-primary btn-sm">Sacar cita</button>
                </div>
                </div>
              </div>
        </div> 

        <div class="col7">
  <div class="card bg-danger mb-3 border-dark mb-3">
              
              <div class="card-header  "><blockquote class="text-left"
              >Uñas en gel <h5 class ="text-end" >$ 125.000</h5>
              </blockquote>
              
              </div>
              <img src={Img2} className="App-Gel" alt="Gel" />
                <div class="card-body">

                <div>
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven"  aria-controls="collapseSeven">
                    Descripción
                  </button>
                  <div id="collapseSeven" class="accordion-collapse collapse show" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>TONOS DEL OTOÑO:</strong> una idea genial es la de combinar en un mismo diseño los colores propios del otoño: granate, verde botella, negro, marrones... Y añadirle algún detalle metalizado en dorado.</div>
                  </div>
                </div>
                <br></br>
                <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                   <button type="button" class="btn btn-primary btn-sm">Prueba filtro</button>
                   <button type="button" class="btn btn-primary btn-sm">Sacar cita</button>
                </div>
                </div>
              </div>
        </div> 

        <div class="col8">
  <div class="card bg-danger mb-3 border-dark mb-3">
              
              <div class="card-header  "><blockquote class="text-left"
              >Uñas acrilicas <h5 class ="text-end" >$ 130.000</h5>
              </blockquote>
              
              </div>
              <img src={Img4} className="App-Gel" alt="Acrilica" />
                <div class="card-body">

                <div>
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight"  aria-controls="collapseEight">
                    Descripción
                  </button>
                  <div id="collapseEight" class="accordion-collapse collapse show" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>DORADAS:</strong> Combina algunas uñas en tono nude con otras en dorado con purpurina y dibujos a mano alzada. </div>
                  </div>
                </div>
                <br></br>
                <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                   <button type="button" class="btn btn-primary btn-sm">Prueba filtro</button>
                   <button type="button" class="btn btn-primary btn-sm">Sacar cita</button>
                </div>
                </div>
              </div>
        </div> 

</div>
        </header>
        </div>
      
    );
  
  
  }
  
  
  
  
  export default Tarjeta;