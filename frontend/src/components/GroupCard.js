import React from 'react';

const GroupCard = props => {
    const whatsappLink = 'https://chat.whatsapp.com/' + props.link_code;

    return (
        <div className="relative w-[26rem] h-[26rem] mt-12 bg-teal-600 rounded-2xl shadow-md">
            <img alt="logo do whatsapp" className="w-12 mx-auto pt-8 select-none text-center" src="/vectors/whatsapp_logo.svg"/>
             
            <h1 className="mt-4 text-white text-center text-3xl break-all"> {props.title} </h1>

            <p className="w-4/5 mt-5 mx-auto text-white text-lg leading-6 break-all">
                {props.description}
            </p>
            
            <div className="absolute w-full flex justify-center bottom-10">
                <a href={whatsappLink} className="px-1 py-2 bg-white rounded-xl text-xs hover:text-blue-600 ease-in duration-200" target="_blank">
                    {whatsappLink}
                </a>
                <img 
                    alt="copiar" src="/vectors/copy.svg" className="w-6 ml-1.5 select-none cursor-pointer hover:mb-2 ease-in duration-100"
                    onClick={() => navigator.clipboard.writeText(whatsappLink)}
                />
            </div>
        </div>
    );
};

export default GroupCard;