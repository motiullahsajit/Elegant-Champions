import React from 'react';
import banner from '../../images/banner.png'
const TopBanner = () => {
    const bannerStyle = {
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${banner})`,
        height: '22.5em',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
    }
    return (
        <div className='container-fluid d-flex align-items-center justify-content-center' style={bannerStyle}>
            <h1 className='text-warning' style={{ fontSize: '4rem' }}>Elegant Champions</h1>
        </div>
    );
};

export default TopBanner;