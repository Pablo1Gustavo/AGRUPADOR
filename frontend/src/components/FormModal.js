import React from 'react';
import {useState} from 'react';
import api from '../services/api';

const FormModal = props => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [linkCode, setLinkCode] = useState("");

    const submit = e => {
        e.preventDefault();
        const data = {
            name: name,
            description: description,
            linkCode: linkCode,
            latitude: props.location.latitude,
            longitude: props.location.longitude
        };
        
        api.post('/groups', data).then(response => {
            props.close();
          });
    };

    return (
        <div className="fixed w-full h-full top-0 z-10 select-none bg-black bg-opacity-40" >
            <form className="w-11/12 xl:w-5/12 mt-10 xl:mt-20 mx-auto bg-white rounded-2xl" onSubmit={submit} autoComplete="off">    
                    <div className="relative rounded-t-2xl bg-teal-600 p-4 flex justify-center">
                        <img src="/vectors/group_add.svg" className="w-10 mr-2"/>
                        <h1 className="mt-1.5 text-2xl text-white"> Adicione um grupo </h1>
                        <img src="/vectors/close.svg" className="absolute w-8 z-50 right-6 top-6 cursor-pointer " onClick={props.close}/>
                    </div>

                    <div className="w-4/5 mx-auto">
                        <label className="block mt-7 text-xl"> Nome: </label>
                        <input 
                            name="name" type="text" maxLength='25' required className="w-full p-1 mt-1 border-2 border-black rounded-md text-xl"
                            onChange={e => setName(e.target.value)} 
                        />

                        <label className="block text-xl mt-7"> Descrição: </label>
                        <input
                            name="description" type="text" minLength='10' required maxLength='200' className="w-full p-1 mt-1 border-2 border-black rounded-md text-xl"
                            onChange={e => setDescription(e.target.value)}
                        />

                        <label className="block text-xl mt-7"> Link do convite: </label>
                        <input 
                            name="linkCode" type="text" className="w-full p-1 mt-1 border-2 border-black rounded-md text-xl"
                            maxLength='48' pattern="https://chat.whatsapp.com/[A-Za-z0-9]{22}" title="https://chat.whatsapp.com/CODIGO" required
                            onChange={e => setLinkCode(e.target.value.substring(26, 48))}
                        />
                    </div>

                    <div className="flex justify-center mx-auto py-14">
                        <input type="submit" value="Adicionar" className="px-5 py-3 bg-green-500 rounded-xl text-white text-xl cursor-pointer hover:bg-green-600 ease-in duration-100"/>
                    </div>
            </form>
        </div>
    );
};

export default FormModal;