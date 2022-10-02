import images from "../../../assets/images"

const SectionSix = () => {
    return (
        <div className="h-auto bg-gray-100 py-32 space-y-16 px-12 ">
            <div className="container flex flex-col space-y-6">
                <p className="text-3xl">Electric Powertrain</p>
                <p className="text-gray-600 text-sm font-light">
                    Model X platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.
                </p>
            </div>

            <div className="flex items-center justify-center">
                <img src={images.img7} className="rounded-lg" alt="" />
            </div>

            <div className="grid grid-cols-2 w-full gap-4">
                <div className="container flex justify-end h-full">
                    <div className="border-t-4 w-4/5 border-dark text-dark py-4 space-y-8">
                        <div className="flex flex-col space-y-4">
                            <p>Model X</p>
                            <p className="caption-sm">Dual Motor All-Wheel Drive platform has the longest range, and now delivers incredible power and acceleration</p>
                        </div>
                        <div className="flex justify-start space-x-10">
                            <div>
                                <p className="text-2xl">3.8 s</p>
                                <p className="caption-xs">0-60 mph</p>
                            </div>
                            <div>
                                <p className="text-2xl">348 mi</p>
                                <p className="caption-xs">range (EPA est.)</p>
                            </div>
                            <div>
                                <p className="text-2xl">670 hp</p>
                                <p className="caption-xs">peak power</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container flex justify-start h-full">
                    <div className="border-t-2 w-4/5 border-gray-400 text-gray-400 py-4 space-y-8">
                        <div className="flex flex-col space-y-4">
                            <p>Model X</p>
                            <p className="caption-sm">Dual Motor All-Wheel Drive platform has the longest range, and now delivers incredible power and acceleration</p>
                        </div>
                        <div className="flex justify-start space-x-10">
                            <div>
                                <p className="text-2xl">3.8 s</p>
                                <p className="caption-xs">0-60 mph</p>
                            </div>
                            <div>
                                <p className="text-2xl">348 mi</p>
                                <p className="caption-xs">range (EPA est.)</p>
                            </div>
                            <div>
                                <p className="text-2xl">670 hp</p>
                                <p className="caption-xs">peak power</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-xs text-gray-500">* With rollout subtracted</p>
        </div>
    )
}

export default SectionSix