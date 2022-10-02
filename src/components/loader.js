import images from "../assets/images"

const Loader = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <img src={images.logo} alt="" className="h-24 w-auto animate-bounce" />
        </div>
    )
}

export default Loader