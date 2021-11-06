import React from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../actions/user";
import { useEffect } from "react";
import ProductSlider from "./ProductSlider";

const Profile = () => {
  const { user: currentUser,isLoggedIn } = useSelector((state) => state.auth);
  const {userData} = useSelector((state)=>state.user);

  const dispatch = useDispatch();

//   if (!currentUser) {
//     return <Redirect to="/login" />;
//   }
  const getUserData = ()=>{
    if(isLoggedIn){
        dispatch(getUser()).then(()=>{
            console.log('Successful');
            console.log(userData);
        })
        .catch(()=>{
            console.log('No profile data');
        })
    }
    else{
        return <Redirect to="/login" />;
    }
  }

  useEffect(()=>{
    console.log(localStorage.getItem("user"));
        getUserData();
  },[])

  return (
    <div className="container">
      <header className="jumbotron">
        {/* <button onClick={refresh}>Refresh</button> */}
        <h3>
          Profile
        </h3>
      </header>
 
      <p>
        <strong>Name:</strong> {userData.name}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
<ProductSlider/>
    </div>
  );
};

export default Profile;
