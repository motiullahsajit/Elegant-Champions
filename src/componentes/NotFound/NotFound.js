import React from 'react';
import errorMeassage from '../../images/404.gif'
const NotFound = () => {
    return (
        <div className='container'>
            <img src={errorMeassage} className='w-100' alt="" />
        </div>
    );
};

export default NotFound;