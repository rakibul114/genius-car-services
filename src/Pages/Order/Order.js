import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/order?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user]);

    return (
        <div>
            <h2>Your orders: {orders.length}</h2>
        </div>
    );
};

export default Order;