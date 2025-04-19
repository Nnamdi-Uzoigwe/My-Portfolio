import Button from "../components/Button"
import Jumbotron from "../components/Jumbotron"
import projectData from "../data/projectData"

const Portfolio = () => {
    return (
        <div className="blockAnimation mt-20">
            <h2 className="gradient-text text-[30px] lg:text-[49px] text-center mb-[30px]">Portfolio</h2>
            <div className="grid gap-8 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8">
            {projectData.map((item) => (
                <Jumbotron 
                    img={item.image}
                    name={item.name}
                    desc={item.description}
                    link={item.link}
                    github={item.github}
                />

            ))}
            </div>
            <div className="mt-10 sm:mt-20 flex justify-center">
                {/* <Button className=""><a href="https://gitub.com/nnamdi-cipher">View More</a></Button> */}
                <button className="relative px-4 sm:px-6 py-1 sm:py-2 border-2 border-[#00a8e8] text-[#00a8e8] bg-transparent overflow-hidden hover:text-white transition duration-300 ease-in-out rounded group">
                        <span className="absolute inset-0 bg-[#00a8e8] transition-transform duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                        <span className="relative text-lg"><a href="https://gitub.com/nnamdi-cipher">View More</a></span>
                </button>
            </div>
        </div>
    )
}

export default Portfolio