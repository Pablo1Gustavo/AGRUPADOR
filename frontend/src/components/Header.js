import React from 'react';

const Header = () => {
    return (
        <div className="w-full h-16 flex justify-center items-center select-none bg-teal-600">
            <img src="/vectors/icon.svg" className="h-6 mr-2 float-left"/>
            <span className="text-2xl text-white">A.GRUPA.DOR</span>
        </div>
    );
};

export default Header;