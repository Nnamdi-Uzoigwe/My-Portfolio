import skills from "../skills"
import Card from "../components/Card"

const MySkills = () => {
    return (
        <div className="blockAnimation mt-30 lg:mt-10">
            <h2 className="gradient-text text-[30px] lg:text-[49px] text-center mb-[30px]">My Skills</h2>
            
            <div className="hidden lg:block">
                    <div className="flex items-center justify-center gap-4 lg:gap-8">
                        {skills.slice(0, 4).map((skill) => (       
                                <Card>
                                    <img src={skill.img}  className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] object-contain" />
                                    <h3 className="text-[14px] lg:text-[20px] mt-auto">{skill.skillName}</h3>
                                </Card>
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-4 lg:gap-8 mt-8">
                        {skills.slice(4, 7).map((skill) => (       
                                <Card>
                                    <img src={skill.img} className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] object-contain" />
                                    <h3 className="text-[14px] lg:text-[20px] mt-auto">{skill.skillName}</h3>
                                </Card>
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-4 lg:gap-8 mt-8">
                        {skills.slice(7, 9).map((skill) => (       
                                <Card>
                                    <img src={skill.img} className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] object-contain" />
                                    <h3 className="text-[14px] lg:text-[20px] mt-auto">{skill.skillName}</h3>
                                </Card>
                        ))}
                    </div>
          
            </div>
            
           <div className="flex flex-wrap gap-4 justify-center lg:hidden">
            {skills.map((skill) => (
                <Card>
                    <img src={skill.img} className="w-[40%] lg:w-[100%]" />
                    <h3 className="text-[14px] lg:text-[20px]">{skill.skillName}</h3>
                 </Card>         
            ))}
           </div>
        </div>
        
    )
}

export default MySkills