export default function Intern() {
    // Example project data with multiple image URLs
    const projects = [
        {
            title: "Warehouse Management System",
            description: "Tools : .NET, MS SQL Server",
            role: "Responsibilities : Backend of the permission system",
            images: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1024px-Microsoft_.NET_logo.svg.png",
                "https://www.geekandjob.com/uploads/wiki/43b8c92d2a8fcd2a95ae6bf30c18494dae92467a.png"
            ]
        },
        {
            title: "Land Management System",
            description: "Tools : Miro",
            role: "Responsibilities : Database design",
            images: ["https://pbs.twimg.com/profile_images/1699412547659595776/VS0PZmJN_400x400.jpg"]
        },
        {
            title: "Monitoring System",
            description: "Tools : Grafana, Prometheus, Meillisearch",
            role: "Responsibilities : Grafana Dashboard and Alert rules settings",
            images: ["https://cdn.icon-icons.com/icons2/2108/PNG/512/grafana_icon_130916.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2066px-Prometheus_software_logo.svg.png",
                "https://medusajs.com/images/plugin-icons/medusa-plugin-meilisearch-icon.svg"
            ] // Multiple images
        },
        {
            title: "Warehouse Management System",
            description: "Tools : NextJS, .NET, Figma, Miro",
            role: "Responsibilities : UX/UI design, Frontend and Backend of the Inventory, Project planning, Database design",
            images: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1024px-Microsoft_.NET_logo.svg.png",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s",
                "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png",
            ]
        },
        {
            title: "POS",
            description: "Tools : .NET, RabbitMQ",
            role: "Responsibilities : Tune performance the pos system",
            images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1024px-Microsoft_.NET_logo.svg.png",
                "https://www.rabbitmq.com/assets/files/rabbitmq-logo-e91cacd38fcef5219149bc5cfa10b384.svg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png",
            ]
        }
    ];

    return (
        <div className="h-full bg-zinc-800 p-6 z-40 overflow-y-auto">

            {/* Company Information */}
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-white mt-1">TCC Technology Co., Ltd. Internship</h2>
                <p className="text-md text-gray-300">FullStack Developer</p>
            </div>

            {/* Projects Section */}
            <div className="space-y-1">
                {/* Loop over projects to display them */}
                {projects.map((project, index) => (
                    <div key={index} className="flex items-center justify-between border-b-4 border-gray-500 pb-4">
                        <div className="w-1/2 pr-4 flex grid grid-cols-4">
                            {/* Loop over images for each project */}
                            {project.images.map((image, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={image}
                                    alt={project.title}
                                    className="w-12 h-auto mx-1 object-cover rounded-lg border-4 border-gray-600"
                                />
                            ))}
                        </div>
                        <div className="w-1/2 pl-4">
                            <h3 className="text-md font-semibold text-white">{project.title}</h3>
                            <p className="text-xs text-gray-300 mt-2">{project.description}</p>
                            <p className="text-xs text-gray-300 mt-2 italic">{project.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
