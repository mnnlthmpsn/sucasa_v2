import { useState } from "react"
import { slides } from "../../../data/slides"

const SectionThree = () => {

    const [activeSlide, setActiveSlide] = useState(0)

    return (
        <div className="h-screen w-full bg-black">

            <div className="flex flex-col items-center pt-[10vh] h-screen w-screen">
                <div className="lg:w-3/4 h-4/6">
                    <div className="relative w-full h-full">
                        {
                            slides.map((slide, index) => (
                                <img src={slide.image} className={`absolute w-full h-full object-cover lg:rounded-lg duration-200 ${activeSlide === index ? 'visible' : 'invisible'}`} key={index} alt="" />
                            ))
                        }
                    </div>
                    <div className="mx-auto max-w-screen-sm p-5">
                        <div className="flex justify-start space-x-2">
                            {
                                slides.map((_, index) => (
                                    <div onClick={() => setActiveSlide(index)} key={index} className={`p-[6px] rounded-full duration-300 cursor-pointer ${activeSlide === index ? 'bg-white' : 'bg-gray-500'}`}></div>
                                ))
                            }
                        </div>
                        <div className="flex flex-col justify-start items-start text-white p-6 space-y-3">
                            <p className="font-bold text-lg">{slides[activeSlide].title}</p>
                            <p className="text-sm font-light">{slides[activeSlide].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionThree