import React from 'react';
import bannerImg from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content text-center bg-black w-full">
                <div>
                    <img src={bannerImg} className='mx-auto' alt="" />
                    <p className="py-6 font-bold text-2xl">
                        Assemble Your Ultimate Dream 11 Cricket Team
                    </p>
                    <div className='flex flex-col justify-center items-center gap-2.5'>
                        <span>Beyond Boundaries Beyond Limits</span>
                        <button className="btn bg-amber-400 w-32 text-blue-950 text-xs rounded-lg">Claim Free Credit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;