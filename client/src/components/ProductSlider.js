import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect,useState } from "react";
import { getProducts ,getProduct} from "../actions/shop";
import Slider from "react-slick";
import imgurl from "../images/pimg.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getProductGroups } from "../actions/shop";
import {Form} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import prod1 from "./images/prod1.jpeg";
import prod2 from "./images/prod2.jpeg";
import prod3 from "./images/prod3.jpeg";
import prod4 from "./images/prod4.jpeg";
import { Container,Col,Row,Card,Modal,Button } from "react-bootstrap";

export default function ProductSlider() {
  var settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const {productgroups, productgroup,products,product} = useSelector((state)=>state.shop);
  const dispatch = useDispatch();

  // const getGroups = ()=>{
  //   dispatch(getProductGroups())
  //   .then(()=>{
  //     console.log('Product groups');
  //   })
  //   .catch((err)=>{
  //     console.log(err);
  //   })
  // }
  const getAllProducts = async()=>{
    await dispatch(getProducts());
}

const prods = [
  {
    "name":"White top",
    "imgurl":prod1,
    "category":"Tops",
    
  },
  {
    "name":"Layered necklace",
    "imgurl":prod2,
    "category":"Accessories"
  },
  {
    "name":"Flared Jeans",
    "imgurl":prod3,
    "category":"Jeans"
  },
  {
    "name":"Shades",
    "imgurl":prod4,
    "category":"Accessories",
    
  },
  // {
  //   "name":"Layered necklace",
  //   "imgurl":prod2,
  //   "category":"Accessories"
  // },
  // {
  //   "name":"Flared Jeans",
  //   "imgurl":prod3,
  //   "category":"Jeans"
  // },
]


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

// function ProductModal(props) {
//   // console.log(product);
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           {product.name}<button className="btn"><FaShoppingCart/></button>
//         </Modal.Title>
      
//       </Modal.Header>
      
//       <Modal.Body>
//         <p>Category : {product.category}</p>
//         <p>Details:
//           {product.details}
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Add</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }


useEffect(()=>{
  getAllProducts();
},[])


  return (
    <>
{/* <Form>
  <Form.Label>Choose a product Group</Form.Label>
<Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
</Form> */}
    <Slider {...settings}>
      {/* <div>
      <img width="100%" src={imgurl}/>
      </div>
      <div>
      <img width="100%" src={imgurl}/>
      </div>
      <div>
      <img width="100%" src={imgurl}/>
      </div>
      <div>
      <img width="100%" src={imgurl}/>
      </div>
      <div>
      <img width="100%" src={imgurl}/>
      </div>
      <div>
      <img width="100%" src={imgurl}/>
      </div> */}

      {prods.map((prod,i)=>{
                    return(
                      
                        <Col sm={4}>
                        <Card  key={i}>
                            <Card.Body>
                            <Card.Title>{prod.name}</Card.Title>
                            <button className="btn cart-btn"><FaShoppingCart/></button>
                            <Card.Text>
                                <img className="prod-img" src={prod.imgurl}/>
                                <p>Category:{prod.category}</p>
                            </Card.Text>
                            </Card.Body>
                        </Card>
{/* 
                        <ProductModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        /> */}
                       </Col> 
                    )

                    
                })}
    </Slider>
    </>
  );
}