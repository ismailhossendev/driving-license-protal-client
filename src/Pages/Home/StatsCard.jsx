
import React from 'react';

const StatsCard = ({ data }) => {
    const { icon, title, description, textClass, bgClass } = data;
    return (
        <div className={`${bgClass} h-[160px] rounded-xl shadow-md shadow-gray-500 p-10 flex gap-2 items-center`}>
            <img src={icon} className='h-full' alt="" />
            <div className={`${textClass}`}>
                <h1 className='text-[20px] font-bold'>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default StatsCard;