import AboutMe from "../sections/AboutMe"
import WorkFlow from "../sections/Workflow"

export default function About() {
    return (
        <div className="h-auto pb-[70px] md:pb-[150px] lg:pb-0 lg:h-[100vh] mb-0 lg:mb-[170px]" id="about">
            <AboutMe />
            <WorkFlow />
        </div>
    )
}