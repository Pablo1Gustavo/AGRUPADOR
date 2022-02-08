import React from 'react';

const LocationErrorWarining = () => {
    return (
        <div className="mt-20 mx-auto text-center">
            <p className="px-10 text-3xl">
                Permita o acesso à sua localização no site para continuar
            </p>
            <img src="/vectors/waiting.svg" className="w-3/5 lg:w-1/4 mx-auto my-14"/>
        </div>
    );
}

export default LocationErrorWarining;