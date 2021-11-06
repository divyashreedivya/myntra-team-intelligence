import React from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../actions/user";
import { useState,useEffect } from "react";
import { Form,Button,Col } from "react-bootstrap";

const Admin = () => {
  const { user: currentUser,isLoggedIn } = useSelector((state) => state.auth);
  const {userData,isAdmin} = useSelector((state)=>state.user);
  const [field, setField] = useState([]);
  const {products}= useSelector((state)=>state.shop);

  const dispatch = useDispatch();

//   if (!currentUser) {
//     return <Redirect to="/login" />;
//   }
//   const getUserData = ()=>{
//     if(isLoggedIn){
//         dispatch(getUser()).then(()=>{
//             console.log('Successful');
//             console.log(userData);
//         })
//         .catch(()=>{
//             console.log('No profile data');
//         })
//     }
//     else{
//         return <Redirect to="/login" />;
//     }
//   }
const handleSubmit  = ()=>{
    
}

  useEffect(()=>{
    
  },[])

  return (
    <div className="container">
      <header className="jumbotron">
        {/* <button onClick={refresh}>Refresh</button> */}
      </header>
      <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Group name</Form.Label>
    <Form.Control type="text" placeholder="Enter Group name" />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group as={Col} controlId="my_multiselect_field">
      <Form.Label>My multiselect</Form.Label>
      <Form.Control as="select" multiple value={field} onChange={e => setField([].slice.call(e.target.selectedOptions).map(item => item.value))}>
        {/* <option value="field1">Field 1</option>
        <option value="field2">Field 2</option>
        <option value="field3">Field 3</option> */}
        {products.map((prod,i)=>{
            <option value={prod._id}>{prod.name}</option>
        })}
      </Form.Control>
    </Form.Group>
  <Button variant="primary" type="submit">
   Add
  </Button>
</Form>
    </div>
  );
};

export default Admin;
