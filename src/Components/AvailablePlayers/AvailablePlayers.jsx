import React from 'react';
import AvailablePlayerCard from './AvailablePlayerCard';

const AvailablePlayers = ({ loadPlayer, setSelectedCount, selectedCount, availableBalance, setAvailableBalance }) => {
    const playerData = loadPlayer

    return (
        <div>
            <h1 className='font-bold text-2xl mt-4 md:mt-0 text-center md:text-left'>Available Player</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-9 mt-10'>
                {
                    playerData.map(player => <AvailablePlayerCard key={player.id}
                        player={player}
                        selectedCount={selectedCount}
                        setSelectedCount={setSelectedCount}
                        playerData={playerData}
                        availableBalance={availableBalance}
                        setAvailableBalance={setAvailableBalance}>

                    </AvailablePlayerCard>)
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;

