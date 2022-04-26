import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const {name, img, description, price } = service;
    return (
        <div>
            <img src={img} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default Service;