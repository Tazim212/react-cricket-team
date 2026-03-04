import React from 'react';

const SelectedPlayer = ({ selectedCount }) => {
    // console.log(selectedCount)

    return (
        <>

            <h1 className='font-bold text-2xl mt-4 md:mt-0 text-center md:text-left'>Selected Player ({selectedCount.length}/ 6)</h1>
            <div>
                {
                    selectedCount.map(player => <div key={player.id} className="my-5 mx-8 md:mx-0">
                        <div className='flex justify-between items-center '>
                            <div className='flex justify-start gap-6 items-center'>
                                <figure>
                                    <img
                                        src={player.image}
                                        className='w-24 h-20 object-cover rounded-2xl'
                                        alt="Movie" />
                                </figure>
                                <div>
                                    <h2 className="card-title">{player.player_name}</h2>
                                    <p>{player.batting_hand}</p>
                                </div>
                            </div>
                            <div className="justify-end">
                                <button className="btn btn-primary">Delete</button>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </>
    );
};

export default SelectedPlayer;