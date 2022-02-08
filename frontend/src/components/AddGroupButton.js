import React from 'react';

const AddGroupButton = props => {
    return (
        <button className="flex justify-center select-none px-5 py-2 rounded-xl bg-green-500 text-xl hover:bg-green-600 ease-in duration-100" onClick={props.onClick}>
            <img src="/vectors/add_circle.svg" className="w-8 mr-1"/>
            <span className="mt-0.5 text-white">Adicionar grupo</span>
        </button>
    );
};

export default AddGroupButton;