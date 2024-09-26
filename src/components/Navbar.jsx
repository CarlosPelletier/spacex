import { useState } from 'react';

import logo from '../assets/images/spacex-logo.png'
import { navItems } from '../constants';
import { Menu , X} from 'lucide-react';

const Navbar = () => {

    const [mobileMenuOpener, setMobileMenuOpener] = useState(false);

    const toggleNavbar = () => {
        setMobileMenuOpener(!mobileMenuOpener);
    };

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
        <div className='container px-4 mx-auto relative text-sm'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center flex-shrink-1'>
                    <img className='h-10 mr-2' src={logo} alt="Space X logo" />
                </div>
                <ul className='hidden lg:flex ml-14 xl:space-x-12 lg:space-x-6 tracking-widest uppercase'>
                    <a href="#">Caracteristicas</a>
                    <a href='#'>Experiencias</a>
                    <a href="#">Dragon</a>
                    <a href="#">Testimonios</a>
                </ul>
                <div className='hidden lg:flex justify-center xl:space-x-12 lg:space-x-6 items-center flex-shrink-0'>
                    <a href="#" className='py-2 px-3 border rounded-md'>
                        Iniciar sesion
                    </a>
                    <a href="#" 
                    className='bg-gradient-to-r from-blue-500 to-blue-900 py-2 px-3 rounded-md font-bold'
                    >
                        Reserva ahora
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col-justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileMenuOpener ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileMenuOpener && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className='py-4'>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6 pt-5">
                        <a href="#" className='py-2 px-3 border rounded-md'>
                            Iniciar sesion
                        </a>
                        <a href="#" className='py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-900 font-bold'>
                            Reserva ahora
                        </a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export { Navbar };