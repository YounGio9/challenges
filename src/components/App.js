import logo from '../assets/LogoAdéwalé 1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import man from '../assets/man.png'
import girl from '../assets/girl.png'
import '../styles/App.css'
import otherMaterial1 from '../assets/Ellipse 3.png'
import otherMaterial2 from '../assets/Ellipse 4.png'
import otherMaterial3 from '../assets/Ellipse 5.png'
import React from 'react'
import {useEffect, useState} from 'react'


function App() {
  const [another, setAnother] = useState(false)
  
  return (
    <div className="App relative w-full h-full">
      <header className="Banner">
        <span className='section'>Home</span>
        <span className='section'>About</span>
        <span className='section'>Partners</span>
        <span className='section'>Store</span>
        <img src={logo} alt="Adewale logo" />
        <span className='section'>Men</span>
        <span className='section'>Women</span>
        <span className='section'>Couple</span>
        <div>
        <FontAwesomeIcon icon={faSearch} color='#430711' />
        <FontAwesomeIcon icon={faCircleUser} style={{marginLeft: 25}} color='#430711'/>
        </div>
      </header>

        <div className='Home1 flex items-center w-full justify-between relative'>
            <h1 className='basis-1/3 text-7xl underline px-16'>NEW ARRIVALS</h1>
            <div className='flex basis-1/3 relative h-full'>
              <img src={man} className='man ' alt="Homme" />
              <img src={girl} alt="Femme" className='girl'/>
            </div>
            <div className='basis-1/3 p-12'>
              <h2 className='text-5xl font-bold mb-6 text-marron'>Tracksuit Heritage Kente</h2>
              <p>Co Ord Tracksuit Hertitage Kente, beautiful tracksuits, African print tracksuit. Unisex Kente Tracksuit. African Fashion online, Sports Africanwear for Men and Women.</p>
              <button className='border-1 p-3 w-48 my-6 text-black font-bold rounded-full bg-yellow'>Shop now</button>

            <span className='block font-bold my-4 text-2xl' >Other materials</span>
            <div className='other-materials flex w-1/3 justify-between items-center'>
              <img src={otherMaterial1} alt="1"/>
              <img src={otherMaterial2} alt="" className='w-12 h-12' />
              <img src={otherMaterial3} alt=""  className='w-12 h-12'/>
            </div>

            </div>
        </div>
      
    </div>
  );
}

export default App;
