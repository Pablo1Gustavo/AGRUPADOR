import React from 'react';

const Header = () => {
    return (
        <div className="w-full h-28 bg-teal-600 flex justify-center items-center">
            <div className="">
                <img src="/icon.svg" className="h-8 mr-2 float-left"/>
                <span className="text-white text-3xl">A.GRUPA.DOR</span>
            </div>
        </div>
    );
};

export default Header;