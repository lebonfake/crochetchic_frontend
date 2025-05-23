import React from 'react'

function NavbarMenuMobile() {
  return (
    <div className="Container flex flex-col items-ccenter jusify-center gap-4  bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  shadow-xl z-10 w-1/2 h-1/3 p-4"> 
    
        <a href="" className='text-primary font-semibold hover:font-bold text-center '>Products</a>
        <a href="" className='text-primary font-semibold hover:font-bold text-center'>About us</a>
        <a href="" className='text-primary font-semibold hover:font-bold text-center'>contact Us</a>
    
    </div>
  )
}

export default NavbarMenuMobile
