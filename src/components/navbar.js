import { motion, AnimateSharedLayout } from "framer-motion"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import images from "../assets/images"
import { mainNavItems, secNavItems } from "../data/navItems"
import BlogCarousel from "./blogCarousel"
import { Menu } from "./menu"


const Navbar = () => {

    const [selected, setSelected] = useState("")
    const [showMenu, setShowMenu] = useState(false)
    const router = useNavigate()

    const toggle = () => setShowMenu(!showMenu)
    const toRoute = route => router(route)

    return (
        <div>
            <div className="flex justify-center w-screen">
            <div className="h-10 w-full bg-white flex relative justify-center items-center space-x-2 pr-96">
                <p className="font-gothamLight text-xs underline underline-offset-4 cursor-pointer">Read our Blog</p>
                <BlogCarousel />
            </div>
            </div>
            <AnimateSharedLayout>
                <div className="flex w-screen justify-between items-center px-10 py-3">
                    <div>
                        <img src={images.logoFull} alt="logo" className="h-24 w-auto absolute top-6" />
                        {/* <p className="text-2xl font-bold">Sucasa</p> */}
                    </div>
                    <div className="absolute flex w-full items-center justify-center select-none">
                        {mainNavItems.map((menu, index) => (
                            <Item
                                key={index}
                                title={menu.title}
                                isSelected={selected === menu.title}
                                onMouseEnter={() => setSelected(menu.title)}
                                onClick={() => toRoute(menu.route)}
                            // onMouseLeave={() => setSelected("")}
                            />
                        ))}
                    </div>
                    <div className="flex items-center justify-center select-none">
                        {secNavItems.map((menu, index) => (
                            <Item
                                key={index}
                                title={menu.title}
                                isSelected={selected === menu.title}
                                onMouseEnter={() => setSelected(menu.title)}
                                onClick={menu.title.toLowerCase() === 'menu' ? toggle : () => toRoute(menu.route)}
                            // onMouseLeave={() => setSelected("")}
                            />
                        ))}
                    </div>
                </div>
            </AnimateSharedLayout>

            <Menu toggle={showMenu} setToggle={toggle} />
        </div>
    )
}

const Item = props => {
    return (
        <p className="item relative text-white flex items-center justify-center duration-200 px-4 cursor-pointer text-sm py-[5px]" onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
            {props.isSelected && (
                <motion.div
                    layoutId="link-bg"
                    initial={false}
                    animate={{ backgroundColor: "rgba(0,0,0,.075)", position: "absolute", height: "100%", width: "100%", zIndex: "-10", borderRadius: "5px" }}
                    transition={spring}
                />
            )}
            {props.title}
        </p>
    )
}

const spring = {
    type: "spring",
    stiffness: 400,
    damping: 25,
    ease: "easeInOut",
    duration: 2
}

export default Navbar