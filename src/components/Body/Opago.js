import React from "react";
import {Modal, Button} from 'react-bootstrap';

class Opago extends React.Component {

  constructor(){
    super()
      this.state ={showModal: false}
      this.state ={showModal1: false}
  }

    handleModal(){this.setState({showModal: !this.state.showModal})}
    handleModal1(){this.setState({showModal1: !this.state.showModal1})}
    
      render(){
        return (
          <div className="Opago">
            <header className="App-Opago">

              {/* MODAL DE DAVIPLATA */}
              <header>
                <i className="bi bi-bank"></i>
                  <header>
                    <Button className="bton" onClick={()=> this.handleModal()}>DaviPlata</Button>
                      <Modal show ={this.state.showModal} onHide={()=>this.handleModal()}>

                        <Modal.Body className="Modal">
                          <p>CODIGO QR</p>
                        </Modal.Body>

                        <Modal.Footer className="footer">
                          <Button className="boton1" onClick={()=> this.handleModal()}>Salir</Button>
                        </Modal.Footer>
                        
                      </Modal>
                  </header>
              </header>
            
              {/* MODAL DE NEQUI */}
              <header>
              <i class="bi bi-piggy-bank"></i>
                  <header>
                    <Button className="bton" onClick={()=> this.handleModal1()}>Nequi</Button>
                      <Modal show ={this.state.showModal1} onHide={()=>this.handleModal1()}>

                        <Modal.Body className="Modal">
                          <p>CODIGO QR...</p>
                        </Modal.Body>

                        <Modal.Footer className="footer">
                          <Button className="boton1" onClick={()=> this.handleModal1()}>Salir</Button>
                        </Modal.Footer>
                        
                      </Modal>
                  </header>
              </header>
            </header>
          </div>
        );
      }
}
   
export default Opago;