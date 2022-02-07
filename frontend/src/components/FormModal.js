import React from 'react';

const FormModal = props => {
    return (
        <div className="fixed top-0 bg-black bg-opacity-40 z-10 h-full w-full">
            <form className="bg-white w-11/12 xl:w-5/12 mx-auto mt-10 xl:mt-20 rounded-2xl">    
                    <div className="rounded-t-2xl bg-teal-600 p-4 flex justify-center">
                        <img src="/group_add.svg" className="w-10 mr-2"/>
                        <h1 className="text-white text-2xl mt-1.5"> Adicione um grupo </h1>
                        <img src="/close.svg" className="z-50 w-8 cursor-pointer" onClick={props.onClick}/>
                    </div>

                    <div className="w-4/5 mx-auto">
                        <label className="block text-xl mt-7"> Nome: </label>
                        <input type="text" maxLength='25' className="w-full border-2 border-black rounded-md text-xl p-1 mt-1"/>

                        <label className="block text-xl mt-7"> Descrição: </label>
                        <input type="text" maxLength='200' className="w-full border-2 border-black rounded-md text-xl p-1 mt-1"/>

                        <label className="block text-xl mt-7"> Link do convite: </label>
                        <input type="text" maxLength='48' className="w-full border-2 border-black rounded-md text-xl p-1 mt-1"/>
                    </div>

                    <div className="py-14 mx-auto flex justify-center">
                        <input type="submit" value="Adicionar" className="bg-green-500 text-white text-xl rounded-xl px-5 py-3 cursor-pointer hover:bg-green-600 ease-in duration-100" onClick={props.onClick}/>
                    </div>
            </form>
        </div>
    );
};

export default FormModal;