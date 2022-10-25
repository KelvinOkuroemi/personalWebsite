import React from 'react'
import { useState } from 'react'
import { menu, close } from '../assets/assets'
import { navLinks } from '../constants/static'

const Navbar = () => {
  const [toggle, settoggle] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="w-[100px] text-green-400 h-[24px]">Kelvin Okuroemi</div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      {/* Mobile view */}
      <div className="sm:hidden justify-end flex flex-1 items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => {
          settoggle((prev) => !prev)
        }} />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 absolute bg-black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>


  )
}

export default Navbar