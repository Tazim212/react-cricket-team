import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
// import { ToastContainer, toast} from 'react-toastify';

const AvailablePlayerCard = ({ player, setSelectedCount, selectedCount, availableBalance, setAvailableBalance }) => {
    // console.log(playerData)
    const { player_name, country, player_role, image, player_price, rating, batting_hand } = player;

    const [selectedPL, setSelectedPL] = useState(true);

    const btnHandler = (pl) => {
        
        const playerPrice = parseInt(pl.player_price)
        if(availableBalance < playerPrice){
            alert("limit is finished")
            return
        }
        setAvailableBalance(availableBalance - playerPrice)

        setSelectedPL(false)
        const selectedPl = [...selectedCount, pl]
        setSelectedCount(selectedPl)
    }
    return (
        <div className="card bg-red-400 w-2/3 md:w-full mx-auto md:mx-0 rounded-xl mb-9">
            <figure>
                <img
                    src={image}
                    className='w-2/3 h-2/3/2 md:w-[400px] md:h-[400px] object-cover pt-4 md:pt-0 rounded-2xl md:rounded-xl'
                    alt="Shoes" />
            </figure>
            <div className="flex justify-start items-center px-8 gap-2 pt-4">
                <img src={image} className='w-9 h-9 object-cover rounded-2xl' />
                <h2 className="card-title">{player_name}</h2>
            </div>
            <div className='flex justify-between items-center px-8  py-2'>
                <p>{country}</p>
                <button className='btn'>{player_role}</button>
            </div>
            <div className='flex justify-between items-center px-8  py-2'>
                <h3 className='font-bold'>{batting_hand}</h3>
                <p>{batting_hand}</p>
            </div>
            <p className='pl-8'>{rating}</p>

            <div className="flex justify-between px-8 py-5 items-center">
                <p className='font-semibold'>$ {player_price}</p>
                {
                    selectedPL ? <button onClick={() => btnHandler(player)} className='btn btn-outline rounded-xl'>Choose Player</button> :
                        <button disabled className='btn btn-outline rounded-xl'>Selected</button>

                }

            </div>
        </div>
    );
};

export default AvailablePlayerCard;