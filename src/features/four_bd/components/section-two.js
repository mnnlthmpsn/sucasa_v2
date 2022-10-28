import images from "../../../assets/images"

const SectionTwo = () => {
    return (
        <div className="h-screen w-screen relative">
            <div className="absolute h-full w-full">
                <img src={images.img4_2} alt="" className="object-cover h-full w-full" />
            </div>
            <div className="absolute bg-primary h-full w-full opacity-30"></div>
            <div className="absolute flex justify-center top-0 h-1/2 w-full bg-gradient-to-b from-black to-transparent">
                <p className="mt-14 text-3xl font-bold text-white">All-New Interior</p>
            </div>
        </div>
    )
}

export default SectionTwo