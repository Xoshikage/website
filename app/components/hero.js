
export default function Hero() {
    return (
        <div className="hero h-full py-32 imag3" style={{ backgroundImage: `url("/daisys.jpg")`, backgroundPositionY: -145, backgroundPositionX: 0 }}>

                <div className={"flex flex-col text-[15rem] italic tracking-tighter items-center justify-center -ml-10 -mt-20 py-5 scroll-pr-3.5"}>
                    <div className="text-base-100 font-bold text-center z-10">
                        SERC
                    </div>

                    <div className={"ml-6 -mt-14 text-base-100 stroke-base-100"}>
                        <svg width="628" height={"184"} xmlns="http://www.w3.org/2000/svg">
                            {/*<text x={"-5"} y="179" fill="none" stroke-width="5" font-weight="800">*/}
                            <text x={"-5"} y="179" fill="none" strokeWidth="5" fontWeight="800">
                                SERC
                            </text>
                        </svg>
                    </div>

                </div>
        </div>
    )
}