'use client'

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div
            className="
                justify-center
                items-center
                flex
                overflow-x-hidden
                overflow-y-auto
                fixed
                inset-0
                z-50
                outline-none
                focus:outline-none
                bg-neutral-800/10
            "
        >
            <div
                className="
                    relative
                    w-full
                    md:w-4/6
                    lg:w-3/6
                    xl-w-2/5
                    my-6
                    h-full
                    lg:h-auto
                    md:h-auto
                "
            >
                <div
                    className="
                        translate
                        duration-300
                        h-full
                        translate-y-0
                        opacity-100
                    "
                >
                    <div
                        className="
                            translate
                            h-full
                            lg:h-auto
                            md:h-auto
                            border-0
                            rounded-lg
                            shadow-lg
                            relative
                            flex
                            flex-col
                            w-full
                            bg-white
                            outline-none
                            focus:outline-none
                        "
                    >
                        <div
                            className="
                                flex
                                items-center
                                p-6
                                rounded-t
                                justify-center
                                font-semibold
                                border-b-[1px]
                            "
                        >
                            Full-Stack Developer Interview Task
                        </div>
                        <div className='relative p-6 flex-auto'>
                                {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;