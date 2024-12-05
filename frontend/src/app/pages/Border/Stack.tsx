export default function Stack() {
    // Example project data with multiple image URLs and links
    const projects = [
        {
            title: "Programming Language",
            description: "",
            role: "Even though my aptitude lies more towards frontend, the internship allowed me to develop multiple skills simultaneously.",
            images: [
                "https://i.pinimg.com/originals/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.png",
                "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/910px-Logo_C_sharp.svg.png",
                "https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png?f=webp",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
                "https://cdn.worldvectorlogo.com/logos/typescript.svg",
                "https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA1uFsJtU3AiSYk-Di-pOSFO_EiwEvidll3Q&s",
                "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-php-software-develop-command-language-512.png"
            ],
            link: []
        },
        {
            title: "Framework & Library",
            description: "",
            role: "My most used framework is React, which is popular now. During my internship I used the .NET framework constantly.",
            images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s",
                "https://www.cdnlogo.com/logos/r/85/react.svg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1AvoJXu1NMIvNfwIWMLEX0xp7ZyQ11RjoQ&s",
                "https://develop365.gitlab.io/nuxtjs-2.8.X-doc/en/logos/nuxt-icon-white.png",
                "https://www.svgrepo.com/show/374118/tailwind.svg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhoVwuJmtF1Lu4t9WcsZ7fESV9KdIQ7pVHw&s",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/2048px-Microsoft_.NET_logo.svg.png",
                "https://medusajs.com/images/plugin-icons/medusa-plugin-meilisearch-icon.svg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD0B_3durHqFG9MXTsL4zrzrTGOttsibiOvA&s",
                "https://images.ctfassets.net/o7xu9whrs0u9/6qR4PTwCTfgl0tjfrz0lpy/819fecae70412dacb9b960b98f5fae3b/RabbitMQ-LOGO.png",
                "https://miro.medium.com/v2/resize:fit:800/0*HZjZAHEBTVZQuxch.png",
                "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/301198118/original/45842fbcd7c2ba4d7a59735f9d044e86ba73490b/develop-rest-api-for-you-at-very-less-price.png",
                "https://pbs.twimg.com/profile_images/689198553751760896/Q84Qf_4w_400x400.png",
            ],
            link: []
        },
        {
            title: "Database",
            description: "",
            role: "I also have skills in database or sql command.",
            images: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png",
                "https://www.geekandjob.com/uploads/wiki/43b8c92d2a8fcd2a95ae6bf30c18494dae92467a.png",
                "https://seeklogo.com/images/M/mysql-logo-B4943FE6DD-seeklogo.com.png"
            ],
            link: [
            ]
        },
        {
            title: "Communication",
            description: "",
            role: "Due to joining multiple teams, I utilized various communication tools.",
            images: [
                "https://static-00.iconduck.com/assets.00/github-icon-512x512-bgdhvgjm.png",
                "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png",
                "https://w7.pngwing.com/pngs/885/629/png-transparent-miro-hd-logo.png",
                "https://www.cdnlogo.com/logos/t/55/trello.svg",
                "https://logosandtypes.com/wp-content/uploads/2023/03/ClickUp.png",
                "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png",
            ],
            link: []
        },
        {
            title: "Other Tools",
            description: "",
            role: "In addition to developing web apps, I also have the opportunity to monitor and animate.",
            images: ["https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
                "https://cdn.icon-icons.com/icons2/2108/PNG/512/grafana_icon_130916.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2066px-Prometheus_software_logo.svg.png",
                "https://seeklogo.com/images/S/swaggerhub-logo-52BE4455D6-seeklogo.com.png",
                "https://www.svgrepo.com/show/354202/postman-icon.svg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/1051px-Adobe_Premiere_Pro_CC_icon.svg.png",
                "https://cdn.iconscout.com/icon/free/png-256/free-blender-technology-logo-social-media-logo-download-svg-png-gif-flat-icon-logos-technology-logo-vol-1-pack-blender-logo-icon-2944729.png?f=webp&w=256",
            ],
            link: []
        }
    ];

    return (
        <div className="h-full bg-zinc-800 p-6 z-50">

            {/* Company Information */}
            <div className="mb-2">
                <div className="flex">
                <h2 className="text-xl font-semibold text-white mt-1">Chanawut Wuttinun</h2>
                <h1 className="text-sm mt-2.5 text-zinc-500 ml-2">Full-stack Developer</h1>
                </div>
                <p className="text-xs text-gray-300 mt-1">Kasetsart University,
                    Bangkhen Campus Bangkok, Thailand</p>
                <p className="text-xs text-gray-300">
                    B.S. Computer Science
                    June 2021 - Present</p>
                <p className="text-xs text-gray-300 mt-1">TCC technology Internship 2024, Full-stack Developer</p>
                <h2 className="text-xl font-semibold text-white mt-2">Technical Skills</h2>
            </div>

            {/* Projects Section */}
            <div className="space-y-1">
                {/* Loop over projects to display them */}
                {projects.map((project, index) => (
                    <div key={index} className="flex items-center justify-between border-b-4 border-gray-500 pb-4">
                        <div className="w-1/2 pr-4 flex grid grid-cols-5">
                            {/* Loop over images for each project */}
                            {project.images.map((image, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    src={image}
                                    alt={project.title}
                                    className="w-auto h-9 w-9 mx-1 object-cover rounded-lg border-2 mt-1 border-gray-600"
                                />
                            ))}
                        </div>
                        <div className="w-1/2 pl-4">
                            <h3 className="text-md font-semibold text-white">{project.title}</h3>
                            <p className="text-xs text-gray-300 mt-2">{project.description}</p>
                            <p className="text-xs text-gray-300 mt-2 italic">{project.role}</p>
                            {/* Buttons for project links */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
