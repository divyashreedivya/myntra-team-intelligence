import {useState,useEffect} from "react";
import { Container,Card,Col,Row,Button } from "react-bootstrap";
import {useSelector,useDispatch} from "react-redux";
import {Link} from 'react-router-dom';
import { getCartGroups } from "../actions/cart";
import CreateCartGroupForm from "./CreateCartGroup";
import Jitsi from "./Jitsi";

const CartGroups = ()=>{
    const {cartgroups,cartgroup} = useSelector((state)=>state.cart);
    const dispatch = useDispatch();

    const getAllCartGroups = async()=>{
        await dispatch(getCartGroups());
    }

    // const openCart = (id)=>{
    //     <Link to="/"
    // }

    useEffect(async()=>{
        await getAllCartGroups();
        console.log(cartgroups);
    },[])
    

    return(
       
        <Container>
             <Jitsi/>

            <h1>My Cart Groups</h1>
            <Row>
                <CreateCartGroupForm/>
            </Row>
            <Row>
                {cartgroups.map((cartg,i)=>{
                    return(
                        <Col sm={6}>
                           <Link to={`/cart-groups/${cartg._id}`} ><Card>
                                <Card.Title>{cartg.name}</Card.Title>
                            </Card></Link>
                        </Col>
                    )
                })}
            </Row>
            <Button className="chat-btn">Chat Bot</Button>
        </Container>
    )
}

export default CartGroups;