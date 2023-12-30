import Lottie from "react-lottie";
import animationData from "../animations/animationData.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function Intro() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    function scroll() {
        const pageHeight = window.innerHeight;
        console.log(pageHeight)
        window.scrollTo(
            {
                top: pageHeight,
                behavior: "smooth"

            }
        )
    }
    return (
        <div className="bg-[#141416] lg:h-screen">
            <div className="mb-0- lg:flex  lg:flex-row-reverse lg:justify-around lg:items-center">

                {window.innerWidth < 600 ? <div className="py-4 ">  <Lottie options={defaultOptions} height={"450px"} width={"300px"} /></div> : <div className="py-4 ">  <Lottie options={defaultOptions} height={"650px"} width={"650px"} /></div>}
                <div className="text-slate-50  py-20 px-2 text-center lg:w-96 lg:text-left 
               
                ">
                    <h1 className="text-4xl font-black bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text py-2 lg:text-5xl 
                     hover:animate-bounce hover:text-green-800
                    ">MERN Stack
                        Software
                        Developer</h1>
                    Resolving  problems, building smart and useful websites, developing rich web applications and seamless web experiences.
                    <br />
                    <br />

                    <span className="py-4 text-red-400 cursor-pointer" onClick={scroll}><span>About Me</span> <FontAwesomeIcon icon={faArrowRight} beat size="xl" style={{ color: "#db380f", }} className="pl-2" /></span>
                </div>
            </div>
        </div>
    )
}