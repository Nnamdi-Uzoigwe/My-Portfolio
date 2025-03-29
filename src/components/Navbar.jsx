import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import Sidebar from './Sidebar';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
    const [activeLink, setActiveLink] = useState('#about');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="bg-[#00171f] text-white px-4 sm:px-8 lg:px-32 flex justify-between items-center h-[85px] sm:h-[114px] border-b-[1px] border-[#00a8e8] lg:border-b-0">
            <h2 className="text-[20px] sm:text-[25px] text-[#00a8e8]"><Link smooth to="#home">Nnamdi Uzoigwe</Link></h2>
            <div className="links hidden lg:flex text-[18px] gap-[40px]">
                <Link 
                      smooth to="#about" className={activeLink === '#about' ? 'text-[#00a8e8]' : ''}
                      onClick={() => handleLinkClick('#about')}>
                    About
                </Link>

                <Link 
                      smooth to="#skills" className={activeLink === '#skills' ? 'text-[#00a8e8]' : ''}
                      onClick={() => handleLinkClick('#skills')}>
                    Skills
                </Link>

                <Link 
                      smooth to="#contact" className={activeLink === '#contact' ? 'text-[#00a8e8]' : ''}
                      onClick={() => handleLinkClick('#contact')}>
                    Contact
                </Link>
                
            </div>
            <p className=' hidden lg:block text-[18px]'>+234 816 019 2784</p>

            <HiMenuAlt3 className="block lg:hidden text-[#00a8e8] text-3xl sm:text-4xl cursor-pointer" onClick={toggleSidebar} />

            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

        </div>
    )
}

export default Navbar