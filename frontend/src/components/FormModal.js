import React from 'react';

const FormModal = props => {
    return (
        <div className="fixed w-full h-full top-0 z-10 select-none bg-black bg-opacity-40 ">
            <form className="w-11/12 xl:w-5/12 mt-10 xl:mt-20 mx-auto bg-white rounded-2xl">    
                    <div className="relative rounded-t-2xl bg-teal-600 p-4 flex justify-center">
                        <img src="/vectors/group_add.svg" className="w-10 mr-2"/>
                        <h1 className="mt-1.5 text-2xl text-white"> Adicione um grupo </h1>
                        <img src="/vectors/close.svg" className="absolute w-8 z-50 right-6 top-6 cursor-pointer " onClick={props.onClick}/>
                    </div>

                    <div className="w-4/5 mx-auto">
                        <label className="block mt-7 text-xl"> Nome: </label>
                        <input type="text" maxLength='25' className="w-full p-1 mt-1 border-2 border-black rounded-md text-xl"/>

                        <label className="block text-xl mt-7"> Descrição: </label>
                        <input type="text" maxLength='200' className="w-full p-1 mt-1 border-2 border-black rounded-md text-xl"/>

                        <label className="block text-xl mt-7"> Link do convite: </label>
                        <input type="text" maxLength='48' className="w-full p-1 mt-1 border-2 border-black rounded-md text-xl"/>
                    </div>

                    <div className="flex justify-center mx-auto py-14">
                        <input type="submit" value="Adicionar" className="px-5 py-3 bg-green-500 rounded-xl text-white text-xl cursor-pointer hover:bg-green-600 ease-in duration-100" onClick={props.onClick}/>
                    </div>
            </form>
        </div>
    );
};

export default FormModal;