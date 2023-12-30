import Lottie from "react-lottie";
import contactAnimation from "../assets/contactAnimation.json"
import { Linkedin, Twitter } from "../assets/CustomIcons";
function Contact() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: contactAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className="h-screen  bg-[#141416] flex flex-col justify-between">
            <div className=" text-slate-100 flex flex-column lg:flex-row flex-col ">
                {window.innerWidth < 768 ? <div className="py-4 ">  <Lottie options={defaultOptions} height={"400px"} width={"350px"} /></div> : <div className="py-4 ">  <Lottie options={defaultOptions} height={"650px"} width={"650px"} /></div>}
                <div className="flex justify-center items-center lg:w-[600px] w-[350px] flex-col lg:text-left text-yellow-500">
                    What would you do if you had a software expert  available at your fingertips?
                    <br />
                    Want to start new project? Or just say hey.
                    <br />
                    You can also follow me on Instagram.

                    <a className="font-black text-2xl" href={`mailto:${"arpit900shukla@gmail.com"}`}>arpit900shukla@gmail.com</a>
                </div>
            </div>
            <div className="flex flex-row justify-center ">
                <a href="https://www.linkedin.com/in/arpit-shukla-270231247/" className="p-2">   <Linkedin /></a>
                <a href="https://twitter.com/ArpitSh53514231" className="p-2">   <Twitter /></a>
            </div>
        </div>
    )
}
export default Contact;