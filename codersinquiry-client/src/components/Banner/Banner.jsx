import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner text-center'>
            <div className='row'>
                <div className='col'>
                    <h1>প্রোগ্রামিং সম্পর্কিত যেকোন সমস্যার জন্য প্রশ্ন করুন</h1>
                </div>
                <div className='col'>
                    <img height="100px" width="400px" src="http://2.bp.blogspot.com/-BbKTOFDGquw/XE0rqJY2LDI/AAAAAAAADaI/8q-Q8T9LvY0zULgL2VKMjG8xT7DaBO3ZwCK4BGAYYCw/s1600/wow.gif" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
