import { BsArrowReturnRight } from "react-icons/bs"

const WorkFlow = () => {
    return (

        <div className="blockAnimation mt-20 sm:mt-[100px] flex flex-col sm:flex-row sm:justify-between items-center sm:items-start">
            <div className="title flex flex-col items-center sm:items-start mb-8 sm:mb-0">
                <h3 className="text-[18px] md:text-[20px] lg:text-[25px] mb-[20px]">My Workflow</h3>
                <BsArrowReturnRight className="hidden sm:block text-[#00a8e8] text-2xl md:text-4xl lg:text-6xl" />
            </div>

            <div className="steps flex flex-col items-center sm:items-start">
                {[
                    "REQUIREMENT ANALYSIS",
                    "ASK ABOUT DEADLINE AND RESTRICTIONS",
                    "SETTING UP THE ENVIRONMENT",
                    "PROGRAMMING",
                    "TESTING MY RESULTS",
                    "SUPPORTING AND SCALING MY CODE"
                ].map((step, idx) => (
                    <div
                        key={idx}
                        className="border-t-[0.3px] border-white py-4 sm:py-6 w-[90%] sm:w-[300px] md:w-[400px] lg:w-[550px]"
                    >
                        <p className="text-[14px] lg:text-xl">
                            <span className="mr-4">{String(idx + 1).padStart(2, '0')}</span> {step}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkFlow