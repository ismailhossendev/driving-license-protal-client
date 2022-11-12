import React from 'react';
const Service = ({ service }) => {
    const { title, description, icon } = service;
    return (
        <div className="flex flex-col   p-3 service sm:px-12 " >
            <img src={icon} alt="" className=" h-[115px]" />
            <div className="space-y-1  text-center " >
                <div className="my-2 space-y-1" >
                    <h2 className="text-xl font-semibold sm:text-2xl text-gray-800">{title}</h2>
                </div>
                <div className="flex justify-center  space-x-4 align-center" >
                    <p className="px-5 text-lg sm:text-base text-gray-700">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;