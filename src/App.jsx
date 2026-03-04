import { Suspense, use, useState } from 'react'
import './App.css'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import SelectedPlayer from './Components/SelectedPlayer/SelectedPlayer'

const availablePlayer = fetch('players.json').then(res => res.json())
function App() {

  const loadPlayer = use(availablePlayer);
  const [header, setHeader] = useState(true)
  const [selectedCount, setSelectedCount] = useState([]);
  const [availableBalance, setAvailableBalance] = useState(600000)

  // console.log(selectedCount)

  return (
    <div className='max-w-[1200px] mx-auto'>
      <Navbar availableBalance={availableBalance}></Navbar>
      <Banner></Banner>

      <div className='flex justify-center md:justify-end mt-5'>
        <button onClick={() => setHeader(true)}
          className={`btn ${header ? 'bg-[#E7FE29]' : 'bg-white'} text-black rounded-l-md rounded-r-none`} >Available Player</button>

        <button onClick={() => setHeader(false)}
          className={`btn ${!header ? 'bg-[#E7FE29]' : 'bg-white'} text-black rounded-r-md rounded-l-none`} >Selected Player <span className='text-black'>({selectedCount.length})</span></button>
      </div>
      {
        header ? <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <AvailablePlayers loadPlayer={loadPlayer} 
          selectedCount={selectedCount} 
          setSelectedCount={setSelectedCount}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}></AvailablePlayers>
        </Suspense> 
        : <SelectedPlayer selectedCount={selectedCount}></SelectedPlayer>
      }
      <Footer></Footer>
    </div>
  )
}

export default App
