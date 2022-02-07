import React from 'react';

const AddGroupButton = props => {
    return (
        <button className="bg-green-500 px-5 py-2 rounded-xl text-xl flex justify-center hover:bg-green-600" onClick={props.onClick}>
            <img src="/add_circle.svg" className="w-8 mr-1"/>
            <span className="text-white mt-0.5">Adicionar grupo</span>
        </button>
    );
};

export default AddGroupButton;