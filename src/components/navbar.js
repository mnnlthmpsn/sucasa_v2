import { motion, AnimateSharedLayout } from "framer-motion"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { mainNavItems, secNavItems } from "../data/navItems"
import { Menu } from "./menu"


const Navbar = () => {

    const [selected, setSelected] = useState("")
    const [showMenu, setShowMenu] = useState(false)
    const router = useNavigate()

    const toggle = () => setShowMenu(!showMenu)
    const toRoute = route => router(route)

    return (
        <div>
            <div className="h-10 bg-white flex justify-center items-center">
                <p className="font-gothamLight text-sm underline underline-offset-4 cursor-pointer">Read our Blog</p>
            </div>
            <AnimateSharedLayout>
                <div className="flex w-screen justify-between items-center px-10 py-3">
                    <div>
                        <p className="text-2xl font-bold">Sucasa</p>
                    </div>
                    <div className="absolute flex w-full items-center justify-center">
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
                    <div className="flex items-center justify-center">
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
        <p className="item relative flex items-center justify-center duration-200 px-4 cursor-pointer text-sm py-[5px]" onClick={props.onClick} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
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