import { BsTwitterX } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import { FiLinkedin } from "react-icons/fi"
import { MdOutlineMailOutline } from "react-icons/md"
import { HashLink as Link } from "react-router-hash-link"

const Footer = () => {
    return (
        <div className="mt-14 py-8">
            <p className="text-[14px] lg:text-xl not-italic text-center lg:text-left">Lets</p>
            <h1 className="text-[30px] lg:text-[49px] not-italic mb-8 text-center lg:text-left">Get in touch</h1>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center mb-28">
                <div>
                    <div className="border-b-[1px] not-italic border-white pb-[4px] pr-6 lg:pr-14 text-normal lg:text-lg w-[100%] mb-6">uzonnamdi31@gmail.com</div>
                    <div className="border-b-[1px] not-italic border-white pb-[4px] pr-6 lg:pr-14 text-normal lg:text-lg w-[100%]">+234 905 042 3701</div>
                </div>

                <div className="icons flex gap-4 lg:gap-6">
                    <div className="h-[36px] lg:h-[40px] w-[36px] lg:w-[40px] rounded-[50%] flex justify-center items-center border-[1px] border-white cursor-pointer">
                        <FiLinkedin className="text-[20px] lg:text-[24px]" />
                    </div>

                    <div className="h-[36px] lg:h-[40px] w-[36px] lg:w-[40px] rounded-[50%] flex justify-center items-center border-[1px] border-white cursor-pointer">
                        <MdOutlineMailOutline className="text-[20px] lg:text-[24px]" />
                    </div>

                    <div className="h-[36px] lg:h-[40px] w-[36px] lg:w-[40px] rounded-[50%] flex justify-center items-center border-[1px] border-white cursor-pointer">
                        <FaGithub className="text-[20px] lg:text-[24px]" />
                    </div>

                    <div className="h-[36px] lg:h-[40px] w-[36px] lg:w-[40px] rounded-[50%] flex justify-center items-center border-[1px] border-white cursor-pointer">
                        <BsTwitterX className="text-[19px] lg:text-[21px]" />
                    </div>
                </div>
            </div>

            <div className="pb-6 border-b-[0.1px] border-gray-600 flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center ">
                <div className="flex gap-4 lg:gap-10">
                    <Link smooth to="#about" className="not-italic">About</Link>
                    <Link smooth to="#skills" className="not-italic">Skills</Link>
                    <Link smooth to="#contact" className="not-italic">Contact</Link>
                </div>

                <h2 className="text-[14px] lg:text-[20px]"><Link smooth to="#home">Nnamdi Uzoigwe</Link></h2>

                <p>+234 905 042 3701  <span className="hidden lg:block"> |  +234 816 019 2784</span></p>
                
            </div>

        </div>
    )
}

export default Footer