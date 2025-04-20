import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa"
import HeroImg from "../assets/code-typing-bro.png"
import { HashLink as Link } from "react-router-hash-link"

const Hero = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center md:justify-items-end lg:justify-items-center pt-[100px] lg:pt-[40px]">
            <div className="hero-text xs:mr-0 sm:mr-10 ">
                <div className="xs:text-[22px] sm:text-[29px] md:text-[25px] lg:text-[30px] xl:text-[49px] mb-10">
                    <h1>Hello, I am</h1>
                    <h1>Nnamdi Uzoigwe a MERN</h1>
                    <h1>Stack Developer.</h1>
                </div>

                <div className="w-[100%] xl:w-[70%] buttons grid grid-cols-2 gap-6">
                    <button className="relative px-4 sm:px-6 py-1 sm:py-2 border-2 border-[#00a8e8] text-[#00a8e8] bg-transparent overflow-hidden hover:text-white transition duration-300 ease-in-out rounded group">
                        <span className="absolute inset-0 bg-[#00a8e8] transition-transform duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                        <span className="relative"><Link smooth to="#contact">Contact Me</Link></span>
                    </button>

                    <button className="relative px-4 sm:px-6 py-1 sm:py-2 border-2 border-[#00a8e8] text-[#00a8e8] bg-transparent overflow-hidden hover:text-white transition duration-300 ease-in-out rounded group">
                        <span className="absolute inset-0 bg-[#00a8e8] transition-transform duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                        <span className="relative">My Resume</span>
                    </button>

                </div>    
            </div>

            <div className="relative mr-10 justify-items-start sm:justify-items-center" >
                <img src={HeroImg} alt="" className="xs:w-[75%] sm:w-[50%] md:w-[70%] lg:w-[100%] mt-10 md:mt-5 lg:mt-0" />

                <div className="absolute bottom-[10px] sm:bottom-0 md:bottom-[-80px] right-[-10px] sm:right-[30px] lg:right-[-10px] xl:right-[-5px] flex flex-col items-center gap-[10px] sm:gap-[18px]">
                    <div className="line h-[60px] sm:h-[90px] md:h-[60px] lg:h-[100px] xl:h-[150px] w-[2px] lg:w-[3px] bg-[#00a8e8]"></div>
                    <div className="text-xl sm:text-2xl">
                        <FaFacebook className="hover:text-[#00a8e8] cursor-pointer"/>
                    </div>
                    
                    <div className="text-xl sm:text-2xl">
                        <FaTwitter className="hover:text-[#00a8e8] cursor-pointer" />
                    </div>

                    <div className="text-xl sm:text-2xl">
                        <FaLinkedin className="hover:text-[#00a8e8] cursor-pointer" />
                    </div>
                    
                    <div className="text-xl sm:text-2xl">
                        <FaWhatsapp className="hover:text-[#00a8e8] cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero