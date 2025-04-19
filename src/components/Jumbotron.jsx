import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


const Jumbotron = ( {img, name, desc, link, github} ) => {
    return (
    
            <div className="bg-white text-black flex flex-col rounded-xl h-[400px] w-[400px] overflow-hidden ">
                   <img src={img} className="h-[200px]" />
                   <h4 className="font-semibold text-black p-2">{name}</h4>

                   <p className="p-2 text-sm">
                    {desc}
                   </p>

                   <div className="flex p-2 justify-between">
                        <a href={link} target="_blank" className="flex gap-2 items-center border-[1px] border-gray-300 p-2 text-sm">Live Link <span><FaExternalLinkAlt /></span></a>

                        <a href={github}  target="_blank" className="border-[1px] h-8 w-8 rounded-full flex justify-center items-center border-gray-300"><FaGithub className="text-xl" /></a>
                   </div>
            </div>
    )
}

export default Jumbotron