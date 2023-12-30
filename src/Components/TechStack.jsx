import { Postman, IconExpress, React, MongoDb, IconNode, VsCode, Tailwind, Bootstrap, Chakra, Linux, Css, Figma, Github, Git } from '../assets/CustomIcons';
export default function TechStack() {
    const images = [<Postman />, <MongoDb />, <IconExpress />, <React />, <IconNode />, <VsCode />, <Tailwind />, <Bootstrap />, <Chakra />, <Linux />, <Css />, <Figma />, <Github />, <Git />]
    let i = 0;
    return (
        <div className="h-screen flex flex-col justify-center lg:items-center lg:text-center m-auto h-full">
            <div className="lg:w-[650px] p-4">
                <p className="p-4">A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</p>
                <p className="font-black text-4xl lg:text-6xl p-4">Skills&Experience</p>
                <p className="p-4">The main area of expertise is full stack end development (client side of the web).</p>

                <p className="p-4"> Building small and medium web applications with MERN tech, custom softwares, features and animations for learning purpose and enjoyment. I have also developed few full-stack projects, Do checkout my projects below. Thank You for your time</p>

                <p className="p-4">Visit my <a href="https://www.linkedin.com/in/arpit-shukla-270231247/" className='text-blue-500 hover:underline'>Linkedin</a> for more details.</p>
            </div>
            <div className='flex flex-row flex-wrap lg:w-[800px] justify-center items-center '>
                {images.map((image) => <div key={i++} className='p-2 hover:animate-ping hover:ease-in-out'>{image}</div>)}
            </div>
        </div>
    )
}