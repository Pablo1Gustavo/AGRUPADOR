import React from 'react';

const Presentation = () => {
    return (
        <div className="relative w-10/12 lg:flex lg:justify-center lg:items-center mt-14 mx-auto shadow-lg">
            <p className="w-10/12 lg:w-2/5 p-8 mx-auto lg:mx-0 text-2xl">
                Passou em um curso e quer entrar no grupo da sua turma? Localize os grupos do Whatsapp da sua região.
            </p>      
            <img src="/vectors/smartphone_presentation.svg" className="w-80 p-10 mx-auto lg:mx-0 lg:ml-20 select-none"/> 
        </div>
    );
};

export default Presentation;