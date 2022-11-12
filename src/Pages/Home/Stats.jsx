import React from 'react';
import { homeStats } from '../../data/data';
import StatsCard from './StatsCard';
const Stats = () => {

    return (
        <div className='my-10'>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    homeStats.map(data => <StatsCard key={data._id} data={data} />)
                }
            </div>
        </div>
    );
};

export default Stats;