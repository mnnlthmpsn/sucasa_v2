import SectionFive from "./components/section-five"
import SectionFour from "./components/section-four"
import SectionOne from "./components/section-one"
import SectionSeven from "./components/section-seven"
import SectionSix from "./components/section-six"
import SectionThree from "./components/section-three"
import SectionTwo from "./components/section-two"
import SectionEight from "./components/section-eight"
import SectionNine from "./components/section-nine"
import SectionTen from "./components/section-ten"


const LandingPage = () => {
    return (
        <div className="h-screen w-screen overflow-x-hidden overflow-y-scroll">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <SectionFive />
            <SectionFour />
            <SectionEight />
            <SectionNine />
            <SectionTen />
        </div>
    )
}

export default LandingPage