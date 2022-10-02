import images from "../../../assets/images"

const SectionEight = () => {

    return (
        <div className="h-screen w-screen">
            <div className="flex">
                <div className="w-3/4 h-full flex justify-center relative">
                    <img src={images.img9} alt="" className="object-cover h-screen" />
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
                <div className="w-1/4 h-screen flex flex-col justify-between p-10">
                    <div className="space-y-10">
                        <div>
                            <p className="text-gray-600 font-gothamLight">Utility</p>
                            <p className="text-dark text-3xl font-bold">Even more Capable</p>
                        </div>
                        <p className="caption-sm">
                            With the most storage space and towing capacity of any electric SUV, and seating for up to seven adults, Model X delivers maximum utility. Front doors open and close automatically, Falcon Wing doors allow for easier loading and a standard trailer hitch lets you bring your gear anywhere you go
                        </p>
                    </div>
                    <div>
                        <button className="btn-border-dark">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionEight