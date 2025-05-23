import React from 'react'
import './navbar.css'
import NavbarMenuMobile from './NavbarMenuMobile'

function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleMenu = () => {
        console.log("m in toggle");
        
        setIsOpen(!isOpen);
    };
  return (
    <>
    {isOpen && <NavbarMenuMobile/> }
    <nav className='container flex items-center  mx-auto p-6 justify-between px-8'>
        
      <h1 className="text-2xl text-center font-bold text-primary">Crochetchic</h1>
      <div className="hidden md:flex items-center justify-center gap-4">
        <a href="" className='text-primary font-semibold hover:font-bold '>Products</a>
        <a href="" className='text-primary font-semibold hover:font-bold '>About us</a>
        <a href="" className='text-primary font-semibold hover:font-bold '>contact Us</a>
      </div>
      <a href="" className='hidden font-semibold text-white rounded-full bg-primary p-2 text-sm px-3 hover:bg-secondary hover:text-primary md:block'>Shop now</a>
      <div  onClick={()=>toggleMenu()} className={`md:hidden flex flex-col cursor-pointer ${isOpen ? 'open' : ''}`}
>
        <span className='hamburger-top bg-primary'></span>
        <span className='hamburger-middle bg-primary'></span>
        <span className='hamburger-bottom bg-primary'></span>
      
      </div>
    </nav>
    </>
   
  )
}

export default Navbar
