import images from "../../../assets/images"

const SectionNine = () => {

    return (
        <div className="h-screen w-screen">
            <div className="flex">
                <div className="w-1/4 h-screen flex flex-col justify-between p-10">
                    <div className="space-y-10">
                        <div>
                            <p className="text-gray-600 font-gothamLight">Safey</p>
                            <p className="text-dark text-3xl font-bold">Built for Safety</p>
                        </div>
                        <p className="caption-sm">
                        Model X is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every Model X includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost
                        </p>
                    </div>
                    <div>
                        <button className="btn-border-dark">Order Now</button>
                    </div>
                </div>
                <div className="w-3/4 h-full flex justify-center relative">
                    <img src={images.img10} alt="" className="object-contain object-bottom h-screen" />
                    <div className="absolute bottom-10 w-3/4">
                        <div className="grid grid-cols-3 justify-items-center text-white">
                            <div className="flex flex-col space-y-1 items-center">
                                <p className="text-3xl font-bold">92 ft</p>
                                <p className="caption-xs">Up to 92ft of storage</p>
                            </div>
                            <div className="flex flex-col space-y-1 items-center">
                                <p className="text-3xl font-bold">5,000 lbs</p>
                                <p className="caption-xs">Up to 92ft of storage</p>
                            </div>
                            <div className="flex flex-col space-y- items-center">
                                <p className="text-3xl font-bold">***</p>
                                <p className="caption-xs">Falcon Wing doors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionNine