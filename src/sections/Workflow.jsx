import { BsArrowReturnRight } from "react-icons/bs"

const WorkFlow = () => {
    return (
        <div className="blockAnimation mt-[100px] flex flex-col sm:flex-row justify-between">
            <div className="title flex items-center flex-col">
                <h3 className="text-[14px] md:text-[20px] lg:text-[25px] mb-[30px]">My Workflow</h3>

                <BsArrowReturnRight className="hidden sm:block text-[#00a8e8] text-2xl md:text-4xl lg:text-6xl" />
            </div>

            <div className="steps flex flex-col items-center sm:items-start">
                <div className="border-t-[0.3px] border-white py-4 sm:py-6 w-[270px] sm:w-[300px] md:w-[400px] lg:w-[550px]">
                    <p className="text-[14px] lg:text-xl"><span className="mr-4">01</span> REQUIREMENT ANALYSIS</p>
                </div>
                <div className="border-t-[0.3px] border-white py-4 sm:py-6 w-[270px] sm:w-[300px] md:w-[400px] lg:w-[550px]">
                    <p className="text-[14px] lg:text-xl"><span className="mr-4">02</span> ASK ABOUT DEADLINE AND RESTRICTIONS</p>
                </div>
                <div className="border-t-[0.3px] border-white py-4 sm:py-6 w-[270px] sm:w-[300px] md:w-[400px] lg:w-[550px]">
                    <p className="text-[14px] lg:text-xl"><span className="mr-4">03</span> SETTING UP THE ENVIRONMENT</p>
                </div>
                <div className="border-t-[0.3px] border-white py-4 sm:py-6 w-[270px] sm:w-[300px] md:w-[400px] lg:w-[550px]">
                    <p className="text-[14px] lg:text-xl"><span className="mr-4">04</span> PROGRAMMING</p>
                </div>
                <div className="border-t-[0.3px] border-white py-4 sm:py-6 w-[270px] sm:w-[300px] md:w-[400px] lg:w-[550px]">
                    <p className="text-[14px] lg:text-xl"><span className="mr-4">04</span> TESTING MY RESULTS</p>
                </div>
                <div className="border-y-[0.3px] border-white py-4 sm:py-6 w-[270px] sm:w-[300px] md:w-[400px] lg:w-[550px]">
                    <p className="text-[14px] lg:text-xl"><span className="mr-4">04</span> SUPPORTING AND SCALING MY CODE</p>
                </div>
            </div>
        </div>
    )
}

export default WorkFlow