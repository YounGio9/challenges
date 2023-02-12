import logo from "../assets/LogoAdéwalé 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faShop, faHeart } from "@fortawesome/free-solid-svg-icons";
import contactImg from '../assets/Untitled-7 2.png'
import {
  faInstagram,
  faPinterest,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import man from "../assets/man.png";
import girl from "../assets/girl.png";
import "../styles/App.css";
import otherMaterial1 from "../assets/Ellipse 3.png";
import otherMaterial2 from "../assets/Ellipse 4.png";
import aboutImg from "../assets/Rectangle 4.png";
import otherMaterial3 from "../assets/Ellipse 5.png";
import React from "react";
import { useEffect, useState } from "react";
import store1 from "../assets/Rectangle 10.png";
import store2 from "../assets/Untitled-3 2.png";
import store3 from "../assets/Rectangle 9.png";

function App() {
  const [another, setAnother] = useState(false);

  return (
    <div className="App relative w-full h-full">
      <header className="Banner">
        <span className="section">Home</span>
        <span className="section">About</span>
        <span className="section">Partners</span>
        <span className="section">Store</span>
        <img src={logo} alt="Adewale logo" />
        <span className="section">Men</span>
        <span className="section">Women</span>
        <span className="section">Couple</span>
        <div>
          <FontAwesomeIcon icon={faSearch} color="#430711" />
          <FontAwesomeIcon
            icon={faCircleUser}
            style={{ marginLeft: 25 }}
            color="#430711"
          />
        </div>
      </header>

      <div className="Home1 flex items-center w-full justify-between relative">
        <h1 className="basis-1/3 text-6xl underline px-16">NEW ARRIVALS</h1>
        <div className="flex basis-1/3 relative h-full">
          <img src={man} className="man " alt="Homme" />
          <img src={girl} alt="Femme" className="girl" />
        </div>
        <div className="basis-1/3 p-12">
          <h2 className="text-5xl font-bold mb-6 text-marron">
            Tracksuit Heritage Kente
          </h2>
          <p>
            Co Ord Tracksuit Hertitage Kente, beautiful tracksuits, African
            print tracksuit. Unisex Kente Tracksuit. African Fashion online,
            Sports Africanwear for Men and Women.
          </p>
          <button className="border-1 p-3 w-48 my-6 text-black font-bold rounded-full bg-yellow">
            Shop now
          </button>

          <span className="block my-4 text-2xl font-bold">Other materials</span>
          <div className="other-materials flex w-2/3 justify-between items-center pr-4">
            <img src={otherMaterial1} alt="1" className="" />
            <img src={otherMaterial2} alt="" className="w-12 h-auto" />
            <img src={otherMaterial3} alt="" className="w-12 h-auto" />
          </div>
        </div>
      </div>

      <div className="About w-full h-auto relative mt-72 flex items-center justify-around text-sm text-justify">
        <div className="basis-1/3 px-8">
          <h1 className="border-4 border-transparent border-l-yellow text-5xl mb-6 font-bold text-marron pl-5">
            ABOUT
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="basis-1/3 relative grid">
          <img src={aboutImg} alt="Mannequin" className="w-4/5 m-auto" />
        </div>
        <div className="basis-1/3 px-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="grid justify-items-center">
        <h2 className="text-2xl font-bold text-marron ont-bold mt-7">
          Myriam Funke ADEWALE
        </h2>
        <h2 className="text-yellow text-xl ont-bold mt-1">Fashion Designer</h2>
        <div className="flex justify-around w-36 mt-2 mb-5">
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-marron text-2xl "
          />
          <FontAwesomeIcon icon={faBehance} className="text-marron text-2xl" />
          <FontAwesomeIcon
            icon={faPinterest}
            className="text-marron text-2xl "
          />
        </div>
      </div>

      <div className="store grid relative w-full h-auto justify-items-center py-12">
        <h1 className="border-4 border-transparent border-l-yellow text-5xl mb-6 font-bold text-marron pl-5 pb-6">
          STORE
        </h1>

        <div className="flex w-2/5 justify-between">
          {["Men", "Woman", "Couple"].map((cat, idx) => (
            <button
              key={idx}
              className="text-xl text-marron border-black border rounded-full text-center px-3 py-1 mb-5"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="w-2/5">
          <div className="relative h-8">
            <input
              type={"text"}
              placeholder="search"
              className="w-full absolute border h-full z-50 rounded-full px-3 py-1 border-black"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-4 z-50 top-0 bottom-0 m-auto"
            />
          </div>
        </div>

        <div
          className="carroussel w-full relative bg-white  after:-bottom-4 after:left-0 after:w-full -top-32
         after:h-1/3 after:absolute after:bg-custogrey after:content-[''] after:rounded after:z-1
         before:-top-4 before:left-0 before:w-full grid items-center justify-around before:z-1
         before:h-1/3 before:absolute before:bg-custogrey before:content-[''] before:rounded
         "
        >
          <div className="flex w-full justify-around absolute left-0 overflow-hidden">
            <img src={store1} alt="store 1" className="w-1/5 h-auto" />
            <img src={store2} alt="store 2" className="w-1/5 h-auto z-50" />
            <img src={store3} alt="store 3" className="w-1/5" />
          </div>
        </div>

        <div className="absolute w-full bottom-14 grid justify-items-center">
            <div className="flex text-2xl py-3">
            <FontAwesomeIcon icon={faShop} color="#430711"  className="px-5"/>
            <FontAwesomeIcon icon={faHeart} color="#430711" />
            </div>
          <p className="text-yellow font-bold text-4xl px-4 ">45000 XOF</p>
          <h2 className="text-marron underline text-2xl">
            Men latest AGBADA inbodering model
          </h2>
          <p className="w-2/5 text-center text-sm my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <button className="border-1 p-3 w-48 my-6 text-black font-bold rounded-full bg-yellow">
            Shop now
          </button>
        </div>
      </div>
      <div className="w-full px-6 relative">
      <h1 className="border-4 border-transparent border-l-yellow text-5xl mb-6 font-bold text-marron pl-5">
            PARTNERS
          </h1>
          <p className=" m-auto border-8 rounded-circle h-96 w-96 text-sm relative border-marron">
          <span className=" w-full h-1/2 block top-0 text-center px-7  bottom-0 m-auto absolute">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim. 
<br />
<strong className="text-yellow block py-5">Femi B.</strong></span>
          </p>
      </div>

      <div className="w-full px-6 relative mt-32">
      <h1 className="border-4 border-transparent border-l-yellow text-5xl mb-12 font-bold text-marron pl-5">
            Contact us
          </h1>
          <div className="w-full h-auto flex justify-around items-center">
            <div className=" gap-7 grid w-1/3">
              <p className="text-2xl font-bold -mb-5"> E-mail</p>
              <input type={'text'} className='p-3 border-2 rounded-full border-black' placeholder='yourmail@gmail.com'/>
              <p className="text-2xl font-bold -mb-5">Full name</p>
              <input type="text" className='p-3 border-2 rounded-full border-black' placeholder="John DOE" />
              <button className="border-1 p-3 w-48 my-6 text-black font-bold rounded-full bg-yellow">
            Submit
          </button>
            </div>
            <div className="w-1/3 relative bg-yellow rounded-3xl p-12">
              <img src={contactImg} alt={'contact'}  className='absolute h-full w-auto -left-24 -top-3' />
              <h1 className=" text-3xl font-bold">Let's talk fashion !</h1>
              <p className="text-white py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <div className="flex justify-around w-36 mt-2 mb-5">
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-marron text-2xl "
          />
          <FontAwesomeIcon icon={faBehance} className="text-marron text-2xl" />
          <FontAwesomeIcon
            icon={faPinterest}
            className="text-marron text-2xl"
          />
        </div>
            </div>
          </div>
          <div>
            
          </div>
        </div>
        <div className="mt-44 mb-10 text-marron flex items-center justify-center"> 
        <h1>Copywright Adewale2023</h1>
        
        </div>

    </div>
  );
}

export default App;
