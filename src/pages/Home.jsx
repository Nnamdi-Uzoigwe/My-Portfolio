import Hero from "../sections/Hero";
import About from "./About";

export default function Home() {
    return (
        <div className="h-auto pb-[70px] md:pb-[150px] lg:pb-0 lg:h-[100vh]" id="home">
            <Hero />
        </div>
    )
}