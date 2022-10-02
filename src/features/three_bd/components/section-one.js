import Navbar from "../../../components/navbar"

const SectionOne = () => {
    return (
        <div className="h-screen w-screen relative bg-cover bg-center bg-[url('/src/assets/images/img8.jpg')]">
            <div className="sticky z-20">
                <Navbar />
            </div>

            <div className="flex flex-col w-full items-center mt-12  justify-center">
                <p className="text-4xl font-black">3 Bedroom</p>
                <p className="font-gothamLight text-sm">Order now for 16 week delivery</p>
            </div>

            <div className="absolute bottom-0 h-1/5 w-full bg-gradient-to-b from-transparent to-black"></div>
            <div className="max-w-screen-md m-auto bottom-10 text-white font-light flex items-center justify-center">
                <div className="absolute bottom-10 mb-6 items-center grid grid-cols-5 space-x-16">
                    <div className="flex flex-col items-center gap-y-2">
                        <p className="header">5,470 sq/ft</p>
                        <p className="caption">Executive Suite</p>
                    </div>
                    <div className="flex flex-col items-center gap-y-2">
                        <p className="header">4</p>
                        <p className="caption">Bedrooms</p>
                    </div>
                    <div className="flex flex-col items-center gap-y-2">
                        <p className="header">6</p>
                        <p className="caption">Washrooms</p>
                    </div>
                    <div className="flex flex-col items-center gap-y-2">
                        <p className="header">1</p>
                        <p className="caption">Out House</p>
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <button className="btn-border-white">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionOne