import React from "react";
import Logo from "../../Images/Logo.png";
import Logo2 from "../../Images/Logo2.png";
import Prof from "../../Images/Prof.png";
import {FormGroup, Input, Label} from 'reactstrap';
import {Modal, Button} from 'react-bootstrap';
import ImgA1 from '../../Images/Acrilica/ImgA1.png';
import ImgA2 from '../../Images/Acrilica/ImgA2.png';
import ImgA3 from '../../Images/Acrilica/ImgA3.png';
import ImgA4 from '../../Images/Acrilica/ImgA4.png';
import ImgA5 from '../../Images/Acrilica/ImgA5.png';
import ImgA6 from '../../Images/Acrilica/ImgA6.png';
import ImgA7 from '../../Images/Acrilica/ImgA7.png';
import ImgA8 from '../../Images/Acrilica/ImgA8.png';
import ImgN1 from '../../Images/Natural/ImgN1.png';
import ImgN2 from '../../Images/Natural/ImgN2.png';
import ImgN3 from '../../Images/Natural/ImgN3.png';
import ImgN4 from '../../Images/Natural/ImgN4.png';
import ImgN5 from '../../Images/Natural/ImgN5.png';
import ImgN6 from '../../Images/Natural/ImgN6.png';
import ImgN7 from '../../Images/Natural/ImgN7.png';
import ImgN8 from '../../Images/Natural/ImgN8.png';
import ImgG1 from '../../Images/Gel/ImgG1.png';
import ImgG2 from '../../Images/Gel/ImgG2.png';
import ImgG3 from '../../Images/Gel/ImgG3.png';
import ImgG4 from '../../Images/Gel/ImgG4.png';
import ImgG5 from '../../Images/Gel/ImgG5.png';
import ImgG6 from '../../Images/Gel/ImgG6.png';
import ImgG7 from '../../Images/Gel/ImgG7.png';
import ImgG8 from '../../Images/Gel/ImgG8.png';
import ImgP1 from '../../Images/Pedicure/ImgP1.png'
import ImgP2 from '../../Images/Pedicure/ImgP2.png';
import ImgP3 from '../../Images/Pedicure/ImgP3.png';
import ImgP4 from '../../Images/Pedicure/ImgP4.png';
import ImgP5 from '../../Images/Pedicure/ImgP5.png';
import ImgP6 from '../../Images/Pedicure/ImgP6.png';
import ImgP7 from '../../Images/Pedicure/ImgP7.png';
import ImgP8 from '../../Images/Pedicure/ImgP8.png';
import ImgP9 from '../../Images/Pedicure/ImgP9.png';
import ImgP10 from '../../Images/Pedicure/ImgP10.png';
import ImgP11 from '../../Images/Pedicure/ImgP11.png';
import ImgP12 from '../../Images/Pedicure/ImgP12.png';
import ImgP13 from '../../Images/Pedicure/ImgP13.png';
import ImgP14 from '../../Images/Pedicure/ImgP14.png';
import ImgP15 from '../../Images/Pedicure/ImgP15.png';
import ImgP16 from '../../Images/Pedicure/ImgP16.png';

class Navbar extends React.Component {

  constructor(){
    super()
      this.state ={showModal: false}
      this.state ={showModal1: false}
      this.state ={showModal0: false}
      this.state ={showModal2: false}
      this.state ={showModal3: false}
      this.state ={showModal4: false}
      this.state ={showModal5: false}
      this.state ={showModal6: false}
      this.state ={showModal7: false}
      this.state ={showModal8: false}
      this.state ={showModal9: false}
      this.state ={showModal10: false}
      this.state ={showModal11: false}
      this.state ={showModal12: false}
      this.state ={showModal13: false}
      this.state ={showModal14: false}
      this.state ={showModal15: false}
      this.state ={showModal16: false}
      this.state ={showModal17: false}
      this.state ={showModal18: false}
      this.state ={showModal19: false}
      this.state ={showModal20: false}
      this.state ={showModal21: false}
      this.state ={showModal22: false}
      this.state ={showModal23: false}
      this.state ={showModal24: false}
      this.state ={showModal25: false}
      this.state ={showModal26: false}
      this.state ={showModal27: false}
      this.state ={showModal28: false}
      this.state ={showModal29: false}
      this.state ={showModal30: false}
      this.state ={showModal31: false}
      this.state ={showModal32: false}
      this.state ={showModal33: false}
      this.state ={showModal34: false}
      this.state ={showModal35: false}
      this.state ={showModal36: false}
      this.state ={showModal37: false}
      this.state ={showModal38: false}
      this.state ={showModal39: false}
      this.state ={showModal40: false}
      this.state ={showModal41: false}
      this.state ={showModal42: false}
      this.state ={showModal43: false}
      this.state ={showModal44: false}
  }

    handleModal(){this.setState({showModal: !this.state.showModal})}
    handleModal1(){this.setState({showModal1: !this.state.showModal1})}
    handleModal0(){this.setState({showModal0: !this.state.showModal0})}
    handleModal2(){this.setState({showModal2: !this.state.showModal2})}
    handleModal3(){this.setState({showModal3: !this.state.showModal3})}
    handleModal4(){this.setState({showModal4: !this.state.showModal4})}
    handleModal5(){this.setState({showModal5: !this.state.showModal5})}
    handleModal6(){this.setState({showModal6: !this.state.showModal6})}
    handleModal7(){this.setState({showModal7: !this.state.showModal7})}
    handleModal8(){this.setState({showModal8: !this.state.showModal8})}
    handleModal9(){this.setState({showModal9: !this.state.showModal9})}
    handleModal10(){this.setState({showModal10: !this.state.showModal10})}
    handleModal11(){this.setState({showModal11: !this.state.showModal11})}
    handleModal12(){this.setState({showModal12: !this.state.showModal12})}
    handleModal13(){this.setState({showModal13: !this.state.showModal13})}
    handleModal14(){this.setState({showModal14: !this.state.showModal14})}
    handleModal15(){this.setState({showModal15: !this.state.showModal15})}
    handleModal16(){this.setState({showModal16: !this.state.showModal16})}
    handleModal17(){this.setState({showModal17: !this.state.showModal17})}
    handleModal18(){this.setState({showModal18: !this.state.showModal18})}
    handleModal19(){this.setState({showModal19: !this.state.showModal19})}
    handleModal20(){this.setState({showModal20: !this.state.showModal20})}
    handleModal21(){this.setState({showModal21: !this.state.showModal21})}
    handleModal22(){this.setState({showModal22: !this.state.showModal22})}
    handleModal23(){this.setState({showModal23: !this.state.showModal23})}
    handleModal24(){this.setState({showModal24: !this.state.showModal24})}
    handleModal25(){this.setState({showModal25: !this.state.showModal25})}
    handleModal26(){this.setState({showModal26: !this.state.showModal26})}
    handleModal27(){this.setState({showModal27: !this.state.showModal27})}
    handleModal28(){this.setState({showModal28: !this.state.showModal28})}
    handleModal29(){this.setState({showModal29: !this.state.showModal29})}
    handleModal30(){this.setState({showModal30: !this.state.showModal30})}
    handleModal31(){this.setState({showModal31: !this.state.showModal31})}
    handleModal32(){this.setState({showModal32: !this.state.showModal32})}
    handleModal33(){this.setState({showModal33: !this.state.showModal33})}
    handleModal34(){this.setState({showModal34: !this.state.showModal34})}
    handleModal35(){this.setState({showModal35: !this.state.showModal35})}
    handleModal36(){this.setState({showModal36: !this.state.showModal36})}
    handleModal37(){this.setState({showModal37: !this.state.showModal37})}
    handleModal38(){this.setState({showModal38: !this.state.showModal38})}
    handleModal39(){this.setState({showModal39: !this.state.showModal39})}
    handleModal40(){this.setState({showModal40: !this.state.showModal40})}
    handleModal41(){this.setState({showModal41: !this.state.showModal41})}
    handleModal42(){this.setState({showModal42: !this.state.showModal42})}
    handleModal43(){this.setState({showModal43: !this.state.showModal43})}
    handleModal44(){this.setState({showModal44: !this.state.showModal44})}
    
      render(){

        return (
          
          <div className="Navbar">
            <header className="App-footer">
              <div>  
                <nav class="navbar navbar-expand-lg navbar-light">
                  <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={Logo} className="App-logo" alt="Logo" /> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav mx-auto">

                        {/* MODAL GLOBAL DE LA VISTA SERVICIOS */}
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Servicios
                            </a>
                            <ul class="dropdown-menu">

                              {/*MODAL DE LA VISTA MANICURE*/}
                              <li>
                                <Button className="btnSM" on onClick={()=>this.handleModal0()}>Manicure</Button>

                                  <Modal show ={this.state.showModal0} onHide={()=>this.handleModal0()}>

                                    <Modal.Header className="Cabecera1" closeButton>
                                      <img src={Logo2} className="App-logo2" alt="Logo2" />
                                      <h3>Mape Beauty</h3>
                                    </Modal.Header>
                                    
                                    <Modal.Body className="Titulo">
                                      <b>UÑAS EN GEL</b>
                                    </Modal.Body>

                                    <Modal.Body className="B-gel-normal">
                      
                                      <div className="tarjeta2"> <p ></p>
                                        <img src={ImgG1} className="Img-Manicure" alt="ImgG1" />
                                        <p class ="text-left" >$ 115.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal5()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button> 
                                        </div>
                                      </div>

                                      <div className="tarjeta2"> <p ></p>
                                        <img src={ImgG2} className="Img-Manicure" alt="ImgG2" />
                                        <p class ="text-left" >$ 100.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal6()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                        </div>
                                      </div>

                                      <div className="tarjeta2"> <p ></p>
                                        <img src={ImgG3} className="Img-Manicure" alt="ImgG3" />
                                        <p class ="text-left" >$ 105.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal7()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button> 
                                        </div>
                                      </div>

                                      <div className="tarjeta2"> <p ></p>
                                        <img src={ImgG4 } className="Img-Manicure" alt="ImgG4" />
                                        <p class ="text-left" >$ 80.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal8()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                        </div>
                                      </div>

                                      <div className="tarjeta2"> <p ></p>
                                        <img src={ImgG5} className="Img-Manicure" alt="ImgG5" />
                                        <p class ="text-left" >$ 98.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal9()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                        </div>
                                      </div>

                                      <div className="tarjeta2"> <p ></p>
                                        <img src={ImgG6} className="Img-Manicure" alt="ImgG46" />
                                        <p class ="text-left" >$ 110.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal10()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                        </div>
                                      </div>

                                      <div className="tarjeta2"> <p ></p>
                                        <img src={ImgG7} className="Img-Manicure" alt="ImgG7" />
                                        <p class ="text-left" >$ 85.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal11()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                        </div>
                                      </div>

                                      <div className="tarjeta2"> <p ></p>
                                        <img src={ImgG8} className="Img-Manicure" alt="ImgG8" />
                                        <p class ="text-left" >$ 120.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal12()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                        </div>
                                      </div>
                                      
                                    </Modal.Body> 

                                    <Modal.Body className="Titulo">
                                      <b>UÑAS ACRILICAS</b>
                                    </Modal.Body>

                                    <Modal.Body className="B-acrilica">
                                      
                                      <div className="tarjeta3"> <p ></p>
                                        <img src={ImgA1} className="Img-Manicure" alt="ImgA1" />
                                        <p class ="text-left" >$ 80.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal13()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                        </div>
                                      </div>
                                      
                                      <div className="tarjeta3"> <p ></p>
                                        <img src={ImgA2} className="Img-Manicure" alt="ImgA2" />
                                        <p class ="text-left" >$ 100.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal14()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                        </div>
                                      </div>

                                      <div className="tarjeta3"> <p ></p>
                                        <img src={ImgA3} className="Img-Manicure" alt="ImgA3" />
                                        <p class ="text-left" >$ 115.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal15()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                        </div>
                                      </div>

                                      <div className="tarjeta3"> <p ></p>
                                        <img src={ImgA4} className="Img-Manicure" alt="ImgA4" />
                                        <p class ="text-left" >$ 100.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal16()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                        </div>
                                      </div>

                                      <div className="tarjeta3"> <p ></p>
                                        <img src={ImgA5} className="Img-Manicure" alt="ImgA5" />
                                        <p class ="text-left" >$ 110.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal17()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                        </div>
                                      </div>

                                      <div className="tarjeta3"> <p ></p>
                                        <img src={ImgA6} className="Img-Manicure" alt="ImgA6" />
                                        <p class ="text-left" >$ 110.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal18()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                        </div>
                                      </div>

                                      <div className="tarjeta3"> <p ></p>
                                        <img src={ImgA7} className="Img-Manicure" alt="ImgA7" />
                                        <p class ="text-left" >$ 75.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal19()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                        </div>
                                      </div>

                                      <div className="tarjeta3"> <p ></p>
                                        <img src={ImgA8} className="Img-Manicure" alt="ImgA8" />
                                        <p class ="text-left" >$ 120.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal20()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                        </div>
                                      </div>
                                      
                                    </Modal.Body>

                                    <Modal.Body className="Titulo">
                                      <b>UÑAS NATURALES</b>
                                    </Modal.Body>

                                    <Modal.Body className="B-gel-normal">

                                      <div className="tarjeta4"> <p ></p>
                                        <img src={ImgN1} className="Img-Manicure" alt="ImgN1" />
                                        <p class ="text-left" >$ 100.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal21()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                        </div>
                                      </div>

                                      <div className="tarjeta4"> <p ></p>
                                        <img src={ImgN2} className="Img-Manicure" alt="ImgN2" />
                                        <p class ="text-left" >$ 120.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal22()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                        </div>
                                      </div>

                                      <div className="tarjeta4"> <p ></p>
                                        <img src={ImgN3} className="Img-Manicure" alt="ImgN3" />
                                        <p class ="text-left" >$ 95.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal23()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                        </div>
                                      </div>

                                      <div className="tarjeta4"> <p ></p>
                                        <img src={ImgN4} className="Img-Manicure" alt="ImgN4" />
                                        <p class ="text-left" >$ 85.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal24()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                        </div>
                                      </div>

                                      <div className="tarjeta4"> <p ></p>
                                        <img src={ImgN5} className="Img-Manicure" alt="ImgN5" />
                                        <p class ="text-left" >$ 90.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal25()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                        </div>
                                      </div>

                                      <div className="tarjeta4"> <p ></p>
                                        <img src={ImgN6} className="Img-Manicure" alt="ImgN6" />
                                        <p class ="text-left" >$ 105.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal26()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                        </div>
                                      </div>

                                      <div className="tarjeta4"> <p ></p>
                                        <img src={ImgN7} className="Img-Manicure" alt="ImgN7" />
                                        <p class ="text-left" >$ 122.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal27()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                        </div>
                                      </div>

                                      <div className="tarjeta4"> <p ></p>
                                        <img src={ImgN8} className="Img-Manicure" alt="ImgN8" />
                                        <p class ="text-left" >$ 110.000</p>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                          <Button className="btnt" onClick={()=> this.handleModal28()}>Ver</Button>
                                          <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                        </div>
                                      </div>

                                        
                                    </Modal.Body>
                      
                                    <Modal.Footer className="Footr-Mani">
                                      <Button className="btn3" onClick={()=> this.handleModal0()}>Volver</Button>
                                    </Modal.Footer>

                                  </Modal>
                              </li>

                              <li><hr class="dropdown-divider"></hr></li>
                              
                              {/*MODAL DE LA VISTA PEDICURE*/}
                              <li>

                                <Button className="btnSP" on onClick={()=>this.handleModal2()}>Pedicure</Button>

                                    <Modal show ={this.state.showModal2} onHide={()=>this.handleModal2()}>

                                      <Modal.Header className="Cabecera2" closeButton>
                                        <img src={Logo2} className="App-logo2" alt="Logo2" />
                                        <h3>Mape Beauty</h3>
                                      </Modal.Header>
                                      
                                      <Modal.Body className="B-Pedicure">
                                        <div className="tarjeta5"> <p ></p>
                                          <img src={ImgP1} className="Img-Pedicure" alt="ImgP1" />
                                          <p class ="text-left" >$ 120.000</p>
                                          <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                            <Button className="btnt" onClick={()=> this.handleModal29()}>Ver</Button>
                                            <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                          </div>
                                        </div>

                                        <div className="tarjeta6"> <p ></p>
                                          <img src={ImgP2} className="Img-Pedicure" alt="ImgP2" />
                                          <p class ="text-left" >$ 100.000</p>
                                          <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                            <Button className="btnt" onClick={()=> this.handleModal30()}>Ver</Button>
                                            <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                          </div>
                                        </div>

                                        <div className="tarjeta5"> <p ></p>
                                          <img src={ImgP3} className="Img-Pedicure" alt="ImgP3" />
                                          <p class ="text-left" >$ 85.000</p>
                                          <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                            <Button className="btnt" onClick={()=> this.handleModal31()}>Ver</Button>
                                            <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                          </div>
                                        </div>

                                        <div className="tarjeta6"> <p ></p>
                                          <img src={ImgP4} className="Img-Pedicure" alt="ImgP4" />
                                          <p class ="text-left" >$ 125.000</p>
                                          <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                            <Button className="btnt" onClick={()=> this.handleModal32()}>Ver</Button>
                                            <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                          </div>
                                        </div>

                                        <div className="tarjeta5"> <p ></p>
                                          <img src={ImgP5} className="Img-Pedicure" alt="ImgP5" />
                                          <p class ="text-left" >$ 115.000</p>
                                          <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                            <Button className="btnt" onClick={()=> this.handleModal33()}>Ver</Button>
                                            <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                          </div>
                                        </div>

                                        <div className="tarjeta6"> <p ></p>
                                          <img src={ImgP6} className="Img-Pedicure" alt="ImgP6" />
                                          <p class ="text-left" >$ 120.000</p>
                                          <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                            <Button className="btnt" onClick={()=> this.handleModal34()}>Ver</Button>
                                            <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                          </div>
                                        </div>

                                        <div className="tarjeta5"> <p ></p>
                                          <img src={ImgP7} className="Img-Pedicure" alt="ImgP7" />
                                          <p class ="text-left" >$ 90.000</p>
                                          <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                            <Button className="btnt" onClick={()=> this.handleModal35()}>Ver</Button>
                                            <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                          </div>
                                        </div>

                                        <div className="tarjeta6"> <p ></p>
                                          <img src={ImgP8} className="Img-Pedicure" alt="ImgP8" />
                                          <p class ="text-left" >$ 130.000</p>
                                          <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                            <Button className="btnt" onClick={()=> this.handleModal36()}>Ver</Button>
                                            <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                          </div>
                                        </div>
                                      </Modal.Body>

                                      <Modal.Body className="B-Pedicure2">
                                        <div className="tarjeta6"> <p ></p>
                                          <img src={ImgP9} className="Img-Pedicure" alt="ImgP9" />
                                          <p class ="text-left" >$ 100.000</p>
                                          <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                            <Button className="btnt" onClick={()=> this.handleModal37()}>Ver</Button>
                                            <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                          </div>
                                        </div>

                                        <div className="tarjeta5"> <p ></p>
                                          <img src={ImgP10} className="Img-Pedicure" alt="ImgP10" />
                                          <p class ="text-left" >$ 105.000</p>
                                          <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                            <Button className="btnt" onClick={()=> this.handleModal38()}>Ver</Button>
                                            <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                          </div>
                                        </div>

                                        <div className="tarjeta6"> <p ></p>
                                          <img src={ImgP11} className="Img-Pedicure" alt="ImgP11" />
                                          <p class ="text-left" >$ 95.000</p>
                                          <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                            <Button className="btnt" onClick={()=> this.handleModal39()}>Ver</Button>
                                            <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                          </div>
                                        </div>

                                        <div className="tarjeta5"> <p ></p>
                                          <img src={ImgP12} className="Img-Pedicure" alt="ImgP12" />
                                          <p class ="text-left" >$ 112.000</p>
                                          <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                            <Button className="btnt" onClick={()=> this.handleModal40()}>Ver</Button>
                                            <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                          </div>
                                        </div>

                                        <div className="tarjeta6"> <p ></p>
                                          <img src={ImgP13} className="Img-Pedicure" alt="ImgP1" />
                                          <p class ="text-left" >$ 89.000</p>
                                          <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                            <Button className="btnt" onClick={()=> this.handleModal41()}>Ver</Button>
                                            <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                          </div>
                                        </div>

                                        <div className="tarjeta5"> <p ></p>
                                          <img src={ImgP14} className="Img-Pedicure" alt="ImgP14" />
                                          <p class ="text-left" >$ 100.000</p>
                                          <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                            <Button className="btnt" onClick={()=> this.handleModal42()}>Ver</Button>
                                            <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                          </div>
                                        </div>

                                        <div className="tarjeta6"> <p ></p>
                                          <img src={ImgP15} className="Img-Pedicure" alt="ImgP15" />
                                          <p class ="text-left" >$ 90.000</p>
                                          <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                            <Button className="btnt" onClick={()=> this.handleModal43()}>Ver</Button>
                                            <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                          </div>
                                        </div>

                                        <div className="tarjeta5"> <p ></p>
                                          <img src={ImgP16} className="Img-Pedicure" alt="ImgP16" />
                                          <p class ="text-left" >$ 110.000</p>
                                          <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                            <Button className="btnt" onClick={()=> this.handleModal44()}>Ver</Button>
                                            <Button className="btnt" onClick={()=> this.handleModal3()}>Cita</Button>
                                          </div>
                                        </div>
                                    
                                      </Modal.Body>

                                      <Modal.Footer className="Footr-Pedi">
                                        <Button className="btn3" onClick={()=> this.handleModal2()}>Volver</Button>
                                      </Modal.Footer>
                                    </Modal>
                              </li>
                            </ul>
                        </li>


                        {/* MODAL DE LA VISTA CITA */}
                        <li class="nav-item">
                          
                            <Button className="btn1" on onClick={()=>this.handleModal3()}>Cita</Button>

                              <Modal show ={this.state.showModal3} onHide={()=>this.handleModal3()}>

                                <Modal.Header className="hed2" closeButton>
                                  
                                  <img src={Logo2} className="App-logo2" alt="Logo2" />
                                  <h3>Mape Beauty</h3>
                                
                                </Modal.Header>
                                
                                <Modal.Body className="bd2">
                                  <p>DENTRO DE ESTA ETIQUETA MODAL EMPIEZA A DESARROLLAR</p>
                                </Modal.Body>

                                <Modal.Footer className="fod1">
                                  <Button className="botn1" onClick={()=> this.handleModal3()}>Volver</Button>
                                </Modal.Footer>
                              </Modal>
                        </li>
                          

                        {/* MODAL DE LA VISTA EQUIPO TRABAJO */}
                        <li class="nav-item1">
                        
                          <Button className="btn1" on onClick={()=>this.handleModal1()}>Equipo de trabajo</Button>

                            <Modal show ={this.state.showModal1} onHide={()=>this.handleModal1()}>

                              <Modal.Header className="hed" closeButton>
                                
                                <img src={Logo2} className="App-logo2" alt="Logo2" />
                                <h3>Mape Beauty</h3>
                              
                              </Modal.Header>
                              
                              <Modal.Body className="bd1">
                                <div className="p1">
                                  <img src={Prof} className="App-Prof" alt="Prof" />
                                  <p>Nombre Completo</p>
                                  <p>Profesion</p>
                                </div>

                                <div className="p1">
                                  <img src={Prof} className="App-Prof" alt="Prof" />
                                  <p>Nombre Completo</p>
                                  <p>Profesion</p>
                                </div>

                                <div className="p1">
                                  <img src={Prof} className="App-Prof" alt="Prof" />
                                  <p>Nombre Completo</p>
                                  <p>Profesion</p>
                                </div>
                            </Modal.Body>

                            <Modal.Footer className="fd1">
                              <Button className="btn1" onClick={()=> this.handleModal1()}>Volver</Button>
                            </Modal.Footer>
                          </Modal>
                        </li>
                          

                        {/* MODAL DE LA VISTA CONTACTO */}
                        <li class="nav-item">
                            
                          <Button className="btn1" on onClick={()=>this.handleModal4()}>Contacto</Button>

                            <Modal show ={this.state.showModal4} onHide={()=>this.handleModal4()}>

                              <Modal.Header className="hed3" closeButton>
                                
                                <img src={Logo2} className="App-logo2" alt="Logo2" />
                                <h3>Mape Beauty</h3>
                              
                              </Modal.Header>
                              
                              <Modal.Body className="bd3">
                                <p>ACA VA EL QR</p>
                              </Modal.Body>

                              <Modal.Footer className="fod2">
                                <Button className="botn2" onClick={()=> this.handleModal4()}>Volver</Button>
                              </Modal.Footer>
                            </Modal>
                        </li>
                          

                        {/* MODAL DE LA VISTA REGISTRO */}
                        {/* <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="./nosotros">Registrarse</a>
                        </li> */}


                        {/* MODAL DE LA VISTA LOGIN */}
                        {/* <li class="nav-item">
                            <Button className="btn1" on onClick={()=>this.handleModal()}>Iniciar sesión</Button>

                              <Modal show ={this.state.showModal} onHide={()=>this.handleModal()}>

                                <Modal.Header className="hed1" closeButton>
                                  <img src={Logo2} className="App-logo2" alt="Logo2" />
                                  <h3>Mape Beauty</h3>
                                </Modal.Header>

                                <Modal.Body className="bdy45">

                                  <Modal.Body className="bd56">
                                    <h5 text="center">inicio de sesión</h5>
                                    <FormGroup>
                                      <Label for="usuario">Usuario</Label>
                                      <Input type="text" placeholder="Usuario" id="usuario"/> 
                                    </FormGroup>

                                    <FormGroup>
                                      <Label for="password">Contraseña</Label>
                                      <Input type="text" placeholder="Contraseña" id="password"/> 
                                      <p>¿No tienes cuenta?</p>
                                      <Button className="btn2">Crear una</Button>
                                    </FormGroup>
                                    <Button className="botn" on onClick={()=>this.handleModal()}>Iniciar sesión</Button>
                                    <Button className="botn" onClick={()=> this.handleModal()}>Volver</Button>
                                  </Modal.Body>                
                                </Modal.Body>

                                <Modal.Footer className="f1">
                                </Modal.Footer>
                              </Modal>
                        </li>  */}
                          

                        <li class="nav-item"><a href="http://localhost:3001/register" target="_blank">
                        <Button
                          variant="contained"
                          className="btn1">
                            <i className="ri-upload-2-line pe-2"></i> Registrarse
                        </Button>
                        
                            </a>
                        </li>

                        <li class="nav-item"><a href="http://localhost:3001" target="_blank">
                        <Button
                          variant="contained"
                          className="btn1">
                            <i className="ri-upload-2-line pe-2"></i> Login
                        </Button>
                            </a>
                        </li>

              

                        {/* MODALES DE SOLO IMAGENES (BTN-VER)*/}
                        <li class="nav-item">
                          
                          {/* MODALES DE MANICURE GEL*/}
                          <Modal show ={this.state.showModal5} onHide={()=>this.handleModal5()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgG1} className="Img-ver" alt="ImgG1" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal5()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>
                        
                          <Modal show ={this.state.showModal6} onHide={()=>this.handleModal6()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgG2} className="Img-ver" alt="ImgG2" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal6()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                          <Modal show ={this.state.showModal7} onHide={()=>this.handleModal7()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgG3} className="Img-ver" alt="ImgG3" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal7()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>
                        
                          <Modal show ={this.state.showModal8} onHide={()=>this.handleModal8()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgG4} className="Img-ver" alt="ImgG4" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal8()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                          <Modal show ={this.state.showModal9} onHide={()=>this.handleModal9()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgG5} className="Img-ver" alt="ImgG5" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal9()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>
                        
                          <Modal show ={this.state.showModal10} onHide={()=>this.handleModal10()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgG6} className="Img-ver" alt="ImgG6" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal10()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                          <Modal show ={this.state.showModal11} onHide={()=>this.handleModal11()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgG7} className="Img-ver" alt="ImgG7" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal11()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>
                        
                          <Modal show ={this.state.showModal12} onHide={()=>this.handleModal12()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgG8} className="Img-ver" alt="ImgG8" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal12()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                           {/* MODALES DE MANICURE ACRILICAS*/}
                           <Modal show ={this.state.showModal13} onHide={()=>this.handleModal13()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgA1} className="Img-ver" alt="ImgA1" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal13()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>
                        
                          <Modal show ={this.state.showModal14} onHide={()=>this.handleModal14()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgA2} className="Img-ver" alt="ImgA2" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal14()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                          <Modal show ={this.state.showModal15} onHide={()=>this.handleModal15()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgA3} className="Img-ver" alt="ImgA3" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal15()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>
                        
                          <Modal show ={this.state.showModal16} onHide={()=>this.handleModal16()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgA4} className="Img-ver" alt="ImgA4" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal16()}>Probar</Button>
                           </Modal.Footer>
                          </Modal>

                          <Modal show ={this.state.showModal17} onHide={()=>this.handleModal17()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgA5} className="Img-ver" alt="ImgA5" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal17()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>
                        
                          <Modal show ={this.state.showModal18} onHide={()=>this.handleModal18()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgA6} className="Img-ver" alt="ImgA6" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal18()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                          <Modal show ={this.state.showModal19} onHide={()=>this.handleModal19()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgA7} className="Img-ver" alt="ImgA7" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal19()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>
                        
                          <Modal show ={this.state.showModal20} onHide={()=>this.handleModal20()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgA8} className="Img-ver" alt="ImgA8" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal20()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                           {/* MODALES DE MANICURE NATURAL*/}
                           <Modal show ={this.state.showModal21} onHide={()=>this.handleModal21()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgN1} className="Img-ver" alt="ImgN1" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal21()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>
                        
                          <Modal show ={this.state.showModal22} onHide={()=>this.handleModal22()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgN2} className="Img-ver" alt="ImgN2" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal22()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                          <Modal show ={this.state.showModal23} onHide={()=>this.handleModal23()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgN3} className="Img-ver" alt="ImgN3" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal23()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>
                        
                          <Modal show ={this.state.showModal24} onHide={()=>this.handleModal24()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgN4} className="Img-ver" alt="ImgN4" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal24()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                          <Modal show ={this.state.showModal25} onHide={()=>this.handleModal25()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgN5} className="Img-ver" alt="Img255" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal25()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>
                        
                          <Modal show ={this.state.showModal26} onHide={()=>this.handleModal26()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgN6} className="Img-ver" alt="ImgN6" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal26()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                          <Modal show ={this.state.showModal27} onHide={()=>this.handleModal27()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgN7} className="Img-ver" alt="ImgN7" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal27()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>
                        
                          <Modal show ={this.state.showModal28} onHide={()=>this.handleModal28()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgN8} className="Img-ver" alt="ImgN8" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal28()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                          {/* MODALES DE PEDICURE*/}
                          <Modal show ={this.state.showModal29} onHide={()=>this.handleModal29()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgP1} className="Img-ver" alt="ImgP1" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal29()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>
                        
                          <Modal show ={this.state.showModal30} onHide={()=>this.handleModal30()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgP2} className="Img-ver" alt="ImgP2" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal30()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                          <Modal show ={this.state.showModal31} onHide={()=>this.handleModal31()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgP3} className="Img-ver" alt="ImgP3" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal31()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>
                        
                          <Modal show ={this.state.showModal32} onHide={()=>this.handleModal32()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgP4} className="Img-ver" alt="ImgP4" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal32()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                          <Modal show ={this.state.showModal33} onHide={()=>this.handleModal33()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgP5} className="Img-ver" alt="ImgP5" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal33()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>
                        
                          <Modal show ={this.state.showModal34} onHide={()=>this.handleModal34()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgP6} className="Img-ver" alt="ImgN6" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal34()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                          <Modal show ={this.state.showModal35} onHide={()=>this.handleModal35()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgP7} className="Img-ver" alt="ImgP7" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal35()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>
                        
                          <Modal show ={this.state.showModal36} onHide={()=>this.handleModal36()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgP8} className="Img-ver" alt="ImgP8" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal36()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                          <Modal show ={this.state.showModal37} onHide={()=>this.handleModal37()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgP9} className="Img-ver" alt="ImgP9" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal37()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                          <Modal show ={this.state.showModal38} onHide={()=>this.handleModal38()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgP10} className="Img-ver" alt="ImgP10" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal38()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                          <Modal show ={this.state.showModal39} onHide={()=>this.handleModal39()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgP11} className="Img-ver" alt="ImgP11" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal39()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                          <Modal show ={this.state.showModal40} onHide={()=>this.handleModal40()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgP12} className="Img-ver" alt="ImgP12" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal40()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                          <Modal show ={this.state.showModal41} onHide={()=>this.handleModal41()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgP13} className="Img-ver" alt="ImgP13" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal41()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                          <Modal show ={this.state.showModal42} onHide={()=>this.handleModal42()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgP14} className="Img-ver" alt="ImgP14" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal42()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                          <Modal show ={this.state.showModal43} onHide={()=>this.handleModal43()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgP15} className="Img-ver" alt="ImgP15" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal43()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                          <Modal show ={this.state.showModal44} onHide={()=>this.handleModal44()}>
                            <Modal.Body className="body-ver">
                              <img src={ImgP16} className="Img-ver" alt="ImgP16" />
                            </Modal.Body>

                            <Modal.Footer className="footer">
                              <Button className="boton1" onClick={()=> this.handleModal44()}>Probar</Button>
                            </Modal.Footer>
                          </Modal>

                        </li>
                      </ul>
                        {/* BARRA DE BUSQUEDA */}
                        <form class="d-flex" role="search">
                          <input class="form-control me-2" type="search" placeholder="Buscador" aria-label="Search"></input>
                          <button class=" btn-warning " type="submit">Buscar</button>
                        </form>
                    </div>
                  </div>
                </nav>   
              </div> 
            </header>
          </div>
        );
      }
}

export default Navbar;
  


