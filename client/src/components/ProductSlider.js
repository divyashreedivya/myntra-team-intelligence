// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import imgurl from "../images/pimg.jpeg";
// var React = require('react');
// var ReactDOM = require('react-dom');
// var Carousel = require('react-responsive-carousel').Carousel;



// const ProductSlider = ()=>{
//         const onChange = ()=>{

//         }
//         return (
//             <Carousel showArrows={true} onChange={onChange} width={500} axis='vertical' verticalSwipe='standard'>
//                 <div>
//                     <img src={imgurl} />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src={imgurl} />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src={imgurl} />
//                     <p className="legend">Legend 3</p>
//                 </div>
//                 <div>
//                     <img src={imgurl} />
//                     <p className="legend">Legend 4</p>
//                 </div>
//                 <div>
//                     <img src={imgurl} />
//                     <p className="legend">Legend 5</p>
//                 </div>
//                 <div>
//                     <img src={imgurl} />
//                     <p className="legend">Legend 6</p>
//                 </div>
//             </Carousel>
//         );
//     }

// export default ProductSlider;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import Slider from "react-slick";
import imgurl from "../images/pimg.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getProductGroups } from "../actions/shop";
import {Form} from "react-bootstrap";

export default function ProductSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  const {productgroups, productgroup} = useSelector((state)=>state.shop);
  const dispatch = useDispatch();

  const getGroups = ()=>{
    dispatch(getProductGroups())
    .then(()=>{
      console.log('Product groups');
    })
    .catch((err)=>{
      console.log(err);
    })
  }

useEffect(()=>{
  getGroups();
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
      </div>
      <div>
      <img width="100%" src={imgurl}/>
      </div>
    </Slider>
    </>
  );
}