import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <p><small>copyright &copy; Genius Car Services {year}</small></p>
        </footer>
    );
};

export default Footer;