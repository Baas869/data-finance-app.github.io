import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import baas from '../../assets/img/baas-award.jpg'

function Navbar() {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
         <div className="avatar mr-2 ml-4">
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                    <img src={baas} alt="img" />
                </div>
            </div>
        <h1 className='w-full text-3xl font-bold text-[#00DF9A]'>BAAS.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Compancy</li>
            <li className='p-4'>Home</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>Aboute</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden cursor-pointer'>
           
            {!nav ? <AiOutlineClose /> : <AiOutlineMenu size={20} />}
            
        </div>
        <div className={!nav ? 'z-50 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-500 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] ease-out'}>
            <h1 className='w-full text-3xl font-bold m-4 text-[#00DF9A]'>BAAS.</h1>
            <ul className='uppercase pt-4'>
                <li className='p-4 border-b border-gray-600'>Compancy</li>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Resources</li>
                <li className='p-4 border-b border-gray-600'>Aboute</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar