import SectionFive from "./components/section-five"
import SectionFour from "./components/section-four"
import { SectionOne } from "./components/section-one"
import SectionSix from "./components/section-six"
import SectionThree from "./components/section-three"
import { SectionTwo } from "./components/section-two"


const LandingPage = () => {
    return (
        <div className="h-screen w-screen overflow-x-hidden overflow-y-scroll">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
        </div>
    )
}

export default LandingPage