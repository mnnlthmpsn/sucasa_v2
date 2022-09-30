import Navbar from "../../../components/navbar"

export const SectionOne = () => {
    return (
        <div className="h-screen w-screen relative bg-cover bg-center bg-[url('/src/assets/images/img1.jpg')]">
            <div className="sticky z-20">
                <Navbar />
            </div>

            <div className="flex flex-col w-full items-center mt-20 gap-y-2 justify-center">
                <p className="text-4xl font-black">Model X</p>
                <p className="font-light text-lg">Plaid</p>
            </div>

            <div className="absolute bottom-0 h-1/5 w-full bg-gradient-to-b from-transparent to-black"></div>
            <div className="max-w-screen-md m-auto bottom-10 text-white font-light flex items-center justify-center">
                <div className="absolute bottom-10 mb-6 items-center grid grid-cols-5 space-x-16">
                    <div className="flex flex-col items-center gap-y-2">
                        <p className="header">333 mi</p>
                        <p className="caption">Range (EPA est.)</p>
                    </div>
                    <div className="flex flex-col items-center gap-y-2">
                        <p className="header">2.5 s</p>
                        <p className="caption">0-60 mph*</p>
                    </div>
                    <div className="flex flex-col items-center gap-y-2">
                        <p className="header">9.9 s</p>
                        <p className="caption">1/4 Mile</p>
                    </div>
                    <div className="flex flex-col items-center gap-y-2">
                        <p className="header">1,020 hp</p>
                        <p className="caption">Peak Power</p>
                    </div>
                    <div className="flex flex-col items-start w-full">
                        <button className="btn-border-white">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}