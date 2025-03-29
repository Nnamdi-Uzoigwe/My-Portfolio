
const Jumbotron = ({ projects }) => {
    return (
    
            <div className="flex flex-wrap justify-center gap-8">
                    {projects.map((project) => (
                        <div
                        key={project.id}
                        className="relative group w-[330px] lg:w-[393px] h-[250px] lg:h-[400px] overflow-hidden rounded-lg shadow-lg cursor-pointer"
                        >
                      
                        <img
                            src={project.image}
                            alt={`Project ${project.id}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                       
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h2 class="text-white text-xl font-semibold mb-8">E-commerce Website</h2>
                                <p class="text-white text-normal font-semibold mb-4 text-center w-[85%]">
                                    An Ecommerce website that generates links and gives users unique websites.
                                </p>
                                <button className="bg-[#00171f] text-white rounded-[8px] p-2">View Project</button>
                        </div>
                        </div>
                    ))}
            </div>
    )
}

export default Jumbotron