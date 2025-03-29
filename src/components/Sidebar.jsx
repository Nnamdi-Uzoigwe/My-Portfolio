  import { IoCloseOutline } from 'react-icons/io5';
import { HashLink as Link } from 'react-router-hash-link';


function Sidebar({ isOpen, toggleSidebar }) {
  
  return (
    <div 
      className={`fixed top-0 right-0 h-full w-[100%] bg-[#00171f] text-white transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out z-40`}
    >
    
      <div className="flex justify-between items-center border-b-[0.5px] border-gray-400 mt-0 h-[85px] sm:h-[114px] px-4 sm:px-8">
        <h2 className="text-[20px] sm:text-[25px]"><Link smooth to="#home">Nnamdi Uzoigwe</Link></h2>
        <button className="text-3xl " onClick={toggleSidebar}><IoCloseOutline className='text-4xl font-bold hover:rotate-[270deg]' /></button>
      </div>
      

      <div className="mt-40 px-6">
        <div className='border-b-[1px] border-gray-400 p-4'>
            <Link smooth to="#about" onClick={toggleSidebar} className="not-italic">About</Link>
        </div>

        <div className='border-b-[1px] border-gray-400 p-4'>
            <Link smooth to="#skills" onClick={toggleSidebar} className='not-italic'>Skills</Link>
        </div>

        <div className='border-b-[1px] border-gray-400 p-4'>
            <Link smooth to="#contact" onClick={toggleSidebar} className='not-italic'>Contact</Link>
        </div>
        
      </div>
    </div>
  );
}

export default Sidebar;
