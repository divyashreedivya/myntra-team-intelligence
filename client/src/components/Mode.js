import React from 'react'
import Game from './Game';
import { Modal,Button } from 'react-bootstrap';

export default function Mode() {
    const [modalShow, setModalShow] = React.useState(false);
    function GameModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="game-modal">
              <Game/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
    return (
      <>
      
            {/* <button  type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}
            {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                <Game/>
                       <div className="modal-body">
                       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                           
                        </div> */}
                        
{/*                     
                </div>
            </div> */}
             <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <GameModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </>
    )
}

