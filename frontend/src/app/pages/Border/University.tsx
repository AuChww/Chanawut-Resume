import { CiLocationArrow1 } from "react-icons/ci";
import Image from "next/image";


export default function University() {
    // Example project data with multiple image URLs and links
    const projects = [
        {
            title: "KU Crowd Monitoring System",
            description: "Graduation Project",
            role: "Responsibilities : Model, Database, Frontend and Backend of project",
            images: [
                "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/odf4kg05ycxdtwz2pfcw",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s",
                "https://www.kindpng.com/picc/m/188-1882559_python-flask-hd-png-download.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/DBeaver_logo.svg/2048px-DBeaver_logo.svg.png",
            ],
            link: [{ name: "GitHub", url: "" }]
        },
        {
            title: "Assets System App",
            description: "",
            role: "Responsibilities : Frontend and Backend of project and borrow feature.",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj2G_GmVq1tuDkCGux_CJyDFlzxl68fmIFDQ&s",
                "https://i0.wp.com/gluonhq.com/wp-content/uploads/2015/02/SceneBuilderLogo.png?fit=781%2C781&ssl=1"
            ],
            link: [{ name: "GitHub", url: "https://github.com/CS211-652/cs211-652-project-aeiou" }]
        },
        {
            title: "Event Management Web-App",
            description: "",
            role: "Responsibilities : UX/UI design, Frontend of event feature, Home page",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhoVwuJmtF1Lu4t9WcsZ7fESV9KdIQ7pVHw&s",
                "https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png"
            ],
            link: [{ name: "GitHub", url: "https://github.com/naiithink/ku-2023-01418442-nak-muay" }]
        },
        {
            title: "E-Commerce Web-App",
            description: "",
            role: "Responsibilities : Grafana Dashboard and Alert rules settings",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhoVwuJmtF1Lu4t9WcsZ7fESV9KdIQ7pVHw&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1AvoJXu1NMIvNfwIWMLEX0xp7ZyQ11RjoQ&s",
                "https://www.svgrepo.com/show/374118/tailwind.svg",
                "https://develop365.gitlab.io/nuxtjs-2.8.X-doc/en/logos/nuxt-icon-white.png",
            ],
            link: [
                { name: "Frontend", url: "https://github.com/AuChww/sa-project-front" },
                { name: "Backend", url: "https://github.com/Thanakorn0Khonman/sa-project-back" }
            ]
        },
        {
            title: "System Analysis Project",
            description: "",
            role: "Responsibilities : Business Flow, ER diagram, Use Case Diagram",
            images: ["https://thumbs.dreamstime.com/b/icon-doc-143592755.jpg",
                "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png",
                "https://store-images.s-microsoft.com/image/apps.53864.57d6cb45-ac61-4cde-bac9-73e3a2dfec4c.f69214f2-c4a1-4e7d-9184-e334133d259e.9b6e53ce-69ec-417b-bdde-fda060962f77.png",
            ],
            link: [{ name: "Doc", url: "https://docs.google.com/document/d/1aghDKiRVmnBj_UKUSKRFGDN-PsXuDzC9cDop3mFYDgY/edit?tab=t.0" }]
        },
        {
            title: "Software Testing Project",
            description: "",
            role: "Responsibilities : Test Flow, Test Case, Test Script, Test Result, Incident Report",
            images: ["https://thumbs.dreamstime.com/b/icon-doc-143592755.jpg",
                "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png"
            ],
            link: [{ name: "Doc", url: "https://docs.google.com/document/d/16bWHH7FWhVopiuupsEKJX6jB4rKVAS_0qUiVMqqj5Jk/edit?tab=t.0" }]
        }
    ];

    return (
        <div className="h-full bg-zinc-800 p-2 z-40 overflow-y-auto">

            {/* Company Information */}
            <div className="mb-4 mt-8">
                <h2 className="text-xl font-semibold text-white mt-1">Kasetsart University</h2>
                <div className="flex justify-between">
                    <p className="text-md text-gray-300">Computer Science Project</p>
                </div>
            </div>

            {/* Projects Section */}
            <div className="space-y-1 ">
                {/* Loop over projects to display them */}
                {projects.map((project, index) => (
                    <div key={index} className="flex items-center justify-between border-b-4 border-zinc-700 pb-1.5">
                        <div className="w-1/2 pr-4 mt-1">
                            <div className=" flex grid grid-cols-5 gap-x-0.5">
                                {/* Loop over images for each project */}
                                {project.images.map((image, imgIndex) => (
                                    <Image
                                        key={imgIndex}
                                        src={image}
                                        alt={project.title}
                                        height={100}
                                        width={100}
                                        className="w-12 h-auto mx-1 object-cover rounded-lg border-4 border-gray-600"
                                    />
                                ))}
                            </div>
                            {/* Buttons for project links */}
                            <div className="md:mt-2 mt-1 ml-1">
                                {project.link.map((link, linkIndex) => (
                                    <div
                                        key={linkIndex}
                                        className="inline-block mx-1 px-2 py-1 text-zinc-400 bg-zinc-700 rounded hover:bg-zinc-600 duration-300 hover:scale-110 "
                                    >
                                        <div className="flex">
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mr-1 md:text-xs text-[9px] font-semibold "
                                            >
                                                {link.name}
                                            </a>
                                            <CiLocationArrow1 className=" md:text-sm text-[12px]" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-1/2 pl-4">
                            <h3 className="text-sm font-semibold text-white">{project.title}</h3>
                            <p className="md:text-xs text-[9px] text-yellow-300 mt-1">{project.description}</p>
                            <p className="md:text-xs text-[9px] text-gray-300 mt-1 italic">{project.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
