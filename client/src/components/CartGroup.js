import "./Cart.css";
import {useState,useEffect} from "react";
import { Card, Container,Col,Row ,Modal,Button} from "react-bootstrap";
import {useSelector,useDispatch} from "react-redux";
import {Link, useParams} from 'react-router-dom';

import { getCartGroup,addUserCartGroup } from "../actions/cart";

const CartGroup = ()=>{
    const {cartgroup,cartgroupproducts,cartgroupusers} = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
    const {id} = useParams();
    const [modalShow, setModalShow] = useState(false);
    const [userEmail,setUserEmail] = useState("");

    const onChangeUserEmail = (e)=>{
        e.preventDefault();
        const userEmail = e.target.value;
        setUserEmail(userEmail);
    }
const handleAddUser = async()=>{
    await dispatch(addUserCartGroup(id,userEmail));
    setModalShow(false);
    await getCartGroupData();
}

    const getCartGroupData = async(id)=>{
        await dispatch(getCartGroup(id));
        console.log(cartgroup);
    }
    function UserModal(props) {
        
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header  closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Add user
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
             <label htmlFor="useremail">Enter User email</label>
             <input type="text" value={userEmail} onChange={onChangeUserEmail} className="form-control" id="useremail"></input>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={()=>handleAddUser()}>Add</Button>
            </Modal.Footer>
          </Modal>
        );
      }

    useEffect(async()=>{
        await getCartGroupData(id);
    },[])

    return(
        <Container>
            <Row>
                <Card>
                    <Card.Title>{cartgroup.name}</Card.Title>
                    <Card.Body>
                        <Row>
                            <Col sm={6}>
                                <Button onClick={()=>setModalShow(true)}>Add Friend</Button>
                                <UserModal show={modalShow} onHide={()=>setModalShow(false)}></UserModal>
                            </Col>
                        </Row>
                    <hr/>
                        <Row>
                           
                        {cartgroupproducts.map((prod,i)=>{
                            return(
                               <Col sm={4}>
                                   <Card>
                                       <Card.Title>Product:{prod.name}</Card.Title>
                                       <Card.Body>
                                           <p>Price: {prod.price}</p>
                                           <p>Category:{prod.category}</p>
                                       </Card.Body>
                                   </Card>
                               </Col> 
                            )
                        })}
                        </Row>
                        <hr/>
                        <Row>
                            <h5>Members</h5>
                            {cartgroupusers.map((userg,i)=>{
                                return(
                                    <div className="user-g">
                                        <p>{userg.name}</p>
                                        <p>{userg.email}</p>
                                    </div>
                                )
                            })}
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default CartGroup;