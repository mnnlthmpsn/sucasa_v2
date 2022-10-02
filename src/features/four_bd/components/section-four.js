import images from "../../../assets/images"

const SectionFour = () => {
    return (
        <div className="h-auto py-24 bg-black">
            <div className="grid lg:grid-cols-2 container items-center text-white">
                <img src={images.img3} className="h-72 w-full object-cover" alt="4_bed_room_2" />
                <div className="flex flex-col items-start space-y-4 justify-center p-14">
                    <p className="font-bold text-lg">Spacious Rooms</p>
                    <p className="font-light text-sm">A generous amount of space and all rooms en-suite allow you to decorate your home to suit your style</p>
                </div>
                <div className="flex flex-col items-start space-y-4 justify-center p-14">
                    <p className="font-bold text-lg">Ambient Lighting</p>
                    <p className="font-light text-sm">Lighting that projects a cozy atmosphere, enhancing relaxation</p>
                </div>
                <img src={images.img4} className="h-72 w-full object-cover" alt="3_bed_room_2" />
                <img src={images.img5} className="h-72 w-full object-cover" alt="3_bed_room_2" />
                <div className="flex flex-col items-start space-y-4 justify-center p-14">
                    <p className="font-bold text-lg">Perfect Finishes</p>
                    <p className="font-light text-sm">Extreme attention to detail, white doors flushing with white wooden room skirts among others giving your home a refined look</p>
                </div>

            </div>
        </div>
    )
}

export default SectionFour