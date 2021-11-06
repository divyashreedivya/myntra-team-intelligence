import {useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { Container,Col,Row, Card ,Modal,Button} from 'react-bootstrap';
import { getProducts ,getProduct} from "../actions/shop";

const Shop = ()=>{
    const {product,products} = useSelector((state)=>{
        return state.shop});
    const dispatch = useDispatch();

    const [modalShow, setModalShow] = useState(false);

    const getProductData = async(id)=>{
       
        await dispatch(getProduct(id))
        .then(()=>{
            console.log(product);
        })
        .catch((err)=>{
            console.log(err);
        })
        setModalShow(true)
        
    }

    const getAllProducts = async()=>{
        await dispatch(getProducts())
        // .then(()=>{
        //     console.log(products);
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })
    }

    function ProductModal(props) {
        console.log(product);
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {product.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Category : {product.category}</p>
              <p>Details:
                {product.details}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Add</Button>
            </Modal.Footer>
          </Modal>
        );
      }

    useEffect(async()=>{
        await getAllProducts();
    },[dispatch])

    return(
        <Container>
            <h1>Products page</h1>
            <Row>
                
                {products.map((prod,i)=>{
                    return(
                        <Col sm={4}>
                        <Card  key={i} onClick={()=>getProductData(prod._id)}>
                            <Card.Body>
                            <Card.Title>{prod.name}</Card.Title>
                            <Card.Text>
                                <p>Category: {prod.category}</p>
                                <p>Price : {prod.price}</p>
                                {/* <p>Details: {p.details}</p> */}
                            </Card.Text>
                            </Card.Body>
                        </Card>

                        <ProductModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                       </Col> 
                    )

                    
                })}
           </Row>
        </Container>
    )
}

export default Shop;