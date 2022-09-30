import images from "../../../assets/images"

const SectionSix = () => {
    return (
        <div className="h-screen bg-gray-100 py-32 space-y-16 px-12 ">
            <div className="container flex flex-col space-y-6">
                <p className="text-3xl">Electric Powertrain</p>
                <p className="text-gray-600 text-sm font-light">
                    Model X platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.
                </p>
            </div>

            <div className="h-4/5 w-full flex items-center justify-center">
                <img src={images.img7} className="h-full object-cover rounded-lg" alt="" />
            </div>
        </div>
    )
}

export default SectionSix