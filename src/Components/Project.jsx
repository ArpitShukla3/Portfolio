import { faGitAlt, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Project({ repoLink, urlLink, information, type, heading, feature, built }) {
    const pic = "https://res.cloudinary.com/dksi17o87/image/upload/v1703920134/linkly_hxkzpd.png";
    return (
        <div className="flex lg:flex-row flex-col  bg-[#141416]">
            <div className="flex
         flex-col
         justify-around
         items-center
         text-slate-50 
         h-screen   
         lg:w-1/2
         md:border-solid
         md:border-2
        md:border-sky-200
         m-4
         rounded-s-xl
         text-center
            ">
                <div className=" text-left text-slate-300">
                    <h3 className="text-gray-600">Url-Shortner</h3>
                    <h1 className="font-black text-4xl">Linkly</h1>
                    <p>Shortens your long links</p>
                    <p><span>Built with:</span>ReactJS,Redux,Node,Javascript,CSS,vercel,MongoDb,Postman</p>
                    <a href="https://github.com/ArpitShukla3/url-shortener" className="text-red-400 hover:animate-pulse hover:touch-pinch-zoom pr-6"><FontAwesomeIcon icon={faGitAlt} size="xs" style={{ color: "#8c929b", }} className="pr-4" />    <span>Get backend code</span> </a>
                    <br />
                    <a href="https://github.com/ArpitShukla3/url-Frontend" className="text-green-300  hover:animate-pulse"><FontAwesomeIcon icon={faGitAlt} size="xs" style={{ color: "#8c929b", }} className="pr-4" /><span>Get Frontend Code</span> </a>
                    <br />
                    <a href="https://url-frontend-snowy.vercel.app/" className="text-yellow-400"><FontAwesomeIcon icon={faLink} size="xs" style={{ color: "#969696", }} className="pr-4" /><span>Try it</span> </a>
                </div>

                <div className="">
                    <img src="https://res.cloudinary.com/dksi17o87/image/upload/v1703920134/linkly_hxkzpd.png" alt="hello" className="rounded-lg md:h-auto md:p-20 sm:w-3/4" />
                </div>
            </div>
            <div className="flex
         flex-col
         justify-around
         items-center
         text-slate-50 
         h-screen   
         lg:w-1/2
         md:border-solid
         md:border-2
        md:border-sky-200
         m-4
         rounded-s-xl
         text-center
            ">
                <div className=" text-left text-slate-300">
                    <h3 className="text-gray-600">Chat Application</h3>
                    <h1 className="font-black text-4xl">Talkative</h1>
                    <p>Connect with you griends, loves ones
                        <br />
                        Create you own group, update group info, <br />add users in your group and when you get angry leave the group
                    </p>
                    <p><span>Built with:</span>ReactJS,Redux,Node,Javascript,Chakra Ui, <br />vercel,MongoDb,Postman,Socket.io</p>
                    <a href=" https://github.com/ArpitShukla3/chat-app-backend-updated" className="text-red-400 hover:animate-pulse hover:touch-pinch-zoom"><FontAwesomeIcon icon={faGitAlt} size="xs" style={{ color: "#8c929b", }} className="pr-4" /><span>Get Backend Code</span> </a>
                    <br />
                    <a href=" https://github.com/ArpitShukla3/chat-app-frontend" className="text-green-300  hover:animate-pulse"><FontAwesomeIcon icon={faGitAlt} size="xs" style={{ color: "#8c929b", }} className="pr-4" /><span>Get Frontend Code</span> </a>
                    <br />
                    <a href="https://chat-app-frontend-iota-pink.vercel.app/" className="text-yellow-400"><FontAwesomeIcon icon={faLink} size="xs" style={{ color: "#969696", }} className="pr-4" /><span>Try it</span> </a>
                </div>

                <div className="">
                    <img src="https://res.cloudinary.com/dksi17o87/image/upload/v1703923273/Screenshot_2023-12-30_133049_yq3yhu.png" alt="hello" className="rounded-lg md:h-auto md:p-20 sm:w-3/4" />
                </div>
            </div>
        </div>
    )
}
export default Project;