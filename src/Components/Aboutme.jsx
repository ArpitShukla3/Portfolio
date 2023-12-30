export default function AboutMe() {
    function scroll() {
        const pageHeight = 3 * window.innerHeight;
        window.scrollTo(
            {
                top: pageHeight,
                behavior: "smooth"

            }
        )
    }
    return (
        <div className="h-screen 
       
bg-gradient-to-r from-violet-500 to-fuchsia-500
      text-slate-50 
        bg-image
        p-4
        flex
        flex-col 
        justify-center

        lg:flex
        lg:flex-row 
        lg:justify-center
        lg:items-center 
         ">
            <div className="">
                <h1 className=" text-3xl lg:text-6xl font-black ">  Hi,   I'm Arpit Shukla (Sophomore at IIIT Gwalior )  WebDeveloper</h1>
                <p className="text-gray-500 py-4">  Front End Developer / JavaScript Fan / Wordpress Expert</p>
                <a onClick={scroll} className="text-black cursor-pointer">Check my Projects -:</a>
            </div>

            <div>
                <p className="py-4"> Professionally connected with the web development industry.</p>

                <p>  Problem solver, well-organised person, loyal employee with high attention to detail.
                    Fan of Cricket, outdoor activities, video games, and coding of course.</p>
                <p className="py-2">      Interested in the entire developement spectrum and working on ambitious projects .

                </p>
            </div>
        </div>
    )
}