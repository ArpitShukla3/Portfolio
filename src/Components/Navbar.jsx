import { useRef } from "react";

function Navbar() {
    const scrollContainerRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 4000000,
            behavior: "smooth"
        });
    };
    return (
        <div className="">
            <div className="bg-[#141416] flex flex-row justify-between px-2 py-4">
                <h1 className=" text-slate-50 p-2 font-black text-2xl">
                    Dev</h1>
                <button className="bg-transparent  text-slate-50 outline-double rounded-lg p-2 " onClick={scrollToTop}>Contact</button>
            </div>
        </div>
    )
}
export default Navbar;