const SectionFive = () => {

    const descs = [
        { heading: "1,020 hp", caption: "Peak power" },
        { heading: "9.9 s", caption: "1/4 mile" },
        { heading: "2.5 s", caption: "0-60 mph*" },
    ]

    return (
        <div className="h-screen w-screen flex flex-col">
            <div className="relative h-3/4 bg-cover bg-center bg-[url('/src/assets/images/img6.jpg')]">
                <div className="absolute w-full bottom-16">
                    <div className="container flex justify-evenly text-white">
                        {
                            descs.map(item => (
                                <div className="flex flex-col items-center space-y-2">
                                    <p className="font-bold text-3xl">{item.heading}</p>
                                    <p className="text-xs font-light">{item.caption}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="grid p-10 lg:p-0 lg:grid-cols-7 lg:space-x-32">
                    <div className="lg:col-span-2 flex flex-col space-y-4">
                        <div>
                            <p className="text-lg font-light">Plaid</p>
                            <p className="text-3xl font-bold">Beyond Ludicrous</p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <button className="btn-border-dark">Order Now</button>
                        </div>
                    </div>
                    <div className="py-8 lg:py-0 lg:col-span-5 font-bold">
                        <p className="font-light text-sm">
                            With the most power and quickest acceleration of any SUV, Model X Plaid is the highest performing SUV ever built. All Model X powertrains, with updated battery architecture, can deliver instant torque at any speed.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFive