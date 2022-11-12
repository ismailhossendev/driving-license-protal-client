import React from 'react';

const BtnPrimary = ({ children }) => {
    return (
        <button className='btn bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] border-none text-gray-600'>
            {children}
        </button>
    );
};

export default BtnPrimary;