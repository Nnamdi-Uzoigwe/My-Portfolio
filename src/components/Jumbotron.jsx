import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaReact } from "react-icons/fa"
import { SiClerk, SiExpress, SiMongodb, SiRecoil, SiTypescript, SiVite } from "react-icons/si";
import { RiTailwindCssFill, RiSupabaseFill, RiNextjsFill } from "react-icons/ri"
import { AiFillOpenAI } from "react-icons/ai";

const Jumbotron = ( {img, name, desc, link, github, stack} ) => {

    const iconMap = {
        Vite: <SiVite className="text-purple-400" />,
        React: <FaReact className="text-blue-400" />,
        Tailwind: <RiTailwindCssFill className="text-teal-500" />,
        Mongodb: <SiMongodb className="text-green-400" />,
        Express: <SiExpress className="text-gray-700" />,
        Supabase: <RiSupabaseFill className="text-teal-500" />,
        Next: <RiNextjsFill className="text-black" />,
        Clerk: <SiClerk className="text-purple-600" />,
        OpenAI: <AiFillOpenAI className="text-blue-950" />,
        Typescript: <SiTypescript className="text-blue-600" />,
        Recoil: <SiRecoil className="text-blue-600" />
      };


    return (
    
            <div className="bg-white text-black flex flex-col shadow-lg rounded-xl h-auto md:h-[400px] w-[95%] lg:w-full max-w-[400px] overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                   <div className="h-1/2 w-full">
                   <img src={img} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                   </div>
                   
                   <h4 className="font-bold text-[#003459] p-[4px]">{name}</h4>

                   <p className="p-[4px] text-sm text-[#003459]">
                    {desc}
                   </p>

                    <div className="px-[4px] flex items-center">
                        <p className="text-sm text-[#003459]">Built with:</p>
                        <div className="flex p-2 gap-2">
                            {stack?.map((tech) => (
                            <span className="text-xl font-semibold" key={tech.id}>{iconMap[tech.icon]}</span>
                            ))}
                        </div>

                    </div>
                   <div className="mt-2 flex p-2 items-center gap-3">
                        <a href={link} target="_blank" className="cursor-pointer flex rounded-lg gap-2 items-center border-[1px] border-[#003459] p-2 text-sm">Live Link <span><FaExternalLinkAlt /></span></a>

                        <a href={github}  target="_blank" className="cursor-pointer border-[1px] border-[#003459] p-2 rounded-lg flex justify-center items-center text-sm">Github<FaGithub className=" ml-2 text-xl" /></a>
                   </div>
            </div>
    )
}

export default Jumbotron

