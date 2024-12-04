export default function University() {
    // Example project data with multiple image URLs and links
    const projects = [
        {
            title: "Assets System Project",
            description: "",
            role: "Responsibilities : Frontend and Backend of project and borrow feature.",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj2G_GmVq1tuDkCGux_CJyDFlzxl68fmIFDQ&s",
                "https://i0.wp.com/gluonhq.com/wp-content/uploads/2015/02/SceneBuilderLogo.png?fit=781%2C781&ssl=1"
            ],
            link: [{ name: "GitHub", url: "https://github.com/CS211-652/cs211-652-project-aeiou" }]
        },
        {
            title: "Event Management System Webtech Project",
            description: "",
            role: "Responsibilities : UX/UI design, Frontend of event feature, Home page",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhoVwuJmtF1Lu4t9WcsZ7fESV9KdIQ7pVHw&s",
                "https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png"
            ],
            link: [{ name: "GitHub", url: "https://github.com/naiithink/ku-2023-01418442-nak-muay" }]
        },
        {
            title: "E-Commerce Webtech Project",
            description: "",
            role: "Responsibilities : Grafana Dashboard and Alert rules settings",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhoVwuJmtF1Lu4t9WcsZ7fESV9KdIQ7pVHw&s",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1AvoJXu1NMIvNfwIWMLEX0xp7ZyQ11RjoQ&s",
                "https://www.svgrepo.com/show/374118/tailwind.svg"
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
            images: ["https://thumbs.dreamstime.com/b/icon-doc-143592755.jpg"],
            link: [{ name: "Doc", url: "https://docs.google.com/document/d/1aghDKiRVmnBj_UKUSKRFGDN-PsXuDzC9cDop3mFYDgY/edit?tab=t.0" }]
        },
        {
            title: "Software Testing Project",
            description: "",
            role: "Responsibilities : Test Flow, Test Case, Test Script, Test Result, Incident Report",
            images: ["https://thumbs.dreamstime.com/b/icon-doc-143592755.jpg"],
            link: [{ name: "Doc", url: "https://docs.google.com/document/d/16bWHH7FWhVopiuupsEKJX6jB4rKVAS_0qUiVMqqj5Jk/edit?tab=t.0" }]
        }
    ];

    return (
        <div className="h-full bg-zinc-800 p-6 z-50">
            {/* Header Section */}
            <div className="flex justify-between mb-2">
                <div></div>
                <div className="text-4xl text-white font-semibold">University</div>
                <div></div>
            </div>

            {/* Company Information */}
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-white mb-2">Kasetsart University</h2>
                <p className="text-md text-gray-300">Computer Science Project Subject</p>
            </div>

            {/* Projects Section */}
            <div className="space-y-1">
                {/* Loop over projects to display them */}
                {projects.map((project, index) => (
                    <div key={index} className="flex items-center justify-between border-b-4 border-gray-500 pb-4">
                        <div className="w-1/2 pr-4 flex">
                            {/* Loop over images for each project */}
                            {project.images.map((image, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={image}
                                    alt={project.title}
                                    className="w-auto h-16 mx-1 object-cover rounded-lg border-4 border-gray-600"
                                />
                            ))}
                        </div>
                        <div className="w-1/2 pl-4">
                            <h3 className="text-md font-semibold text-white">{project.title}</h3>
                            <p className="text-xs text-gray-300 mt-2">{project.description}</p>
                            <p className="text-xs text-gray-300 mt-2 italic">{project.role}</p>
                            {/* Buttons for project links */}
                            <div className="mt-1">
                                {project.link.map((link, linkIndex) => (
                                    <a
                                        key={linkIndex}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mr-2 inline-block px-2 py-1 text-xs font-semibold text-zinc-400 bg-zinc-700 rounded hover:bg-zinc-600 duration-300 hover:scale-110"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
