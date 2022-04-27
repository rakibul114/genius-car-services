import React from 'react';
import notFoundBanner from '../../../images/notFound.png';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-primary text-center'>The page your are looking for is not found</h1>
        <img className='w-100 fluid' src={notFoundBanner} alt="" />
      </div>
    );
};

export default NotFound;
