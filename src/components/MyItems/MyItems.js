import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

//  
useEffect( () => {
        
    const getItems = async() =>{
       const email = user?.email;
       // const url = `https://thawing-mountain-91486.herokuapp.com/order?email=${email}`;
        const url = `http://localhost:5000/myitems?email=${email}`;
        try {
            const {data} = await axiosPrivate.get(url);
            setItems(data);
        } catch (error) {
            console.log(error.message);
            if(error.response.status === 401 || error.response.status === 403){
                        signOut(auth);
                        navigate('/login')
                    }
        }
        // try{
        //     const {data} = await axiosPrivate.get(url);
        //     setOrders(data);
        // }
        // catch(error){
        //     console.log(error.message);
        //     if(error.response.status === 401 || error.response.status === 403){
        //         signOut(auth);
        //         navigate('/login')
        //     }
        // }
    }
    getItems();

}, [user])

  return (
    <div className='w-50 mx-auto'>
    <h2>Your orders: {items.length}</h2>
    {/* {
        orders.map(order =><div key={order._id}>
            <p>{order.email} : {order.inventory}</p>
        </div>)
    } */}
</div>
  );
};

export default MyItems;
