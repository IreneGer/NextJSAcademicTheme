interface ProjectProps {
    project: any;
    index: number;
}

const ProjectItem = ({ project, index }: ProjectProps): JSX.Element => {
    return (
        <div className="shadow-lg mb-8 mx-auto lg:w-11/12 lg:h-auto">
            <div className="w-full bg-gray-50 p-8 rounded-lg">
                <h2 className="text-gray-700 font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-500 mt-4 text-justify">{project.description}</p>

                {/* Render links as smaller black buttons if they exist */}
                {project.links && project.links.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.links
                            .filter((link: any) => link.url && link.url.trim() !== "")
                            .map((link: any, idx: number) => (
                                <a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1 text-sm bg-black text-white rounded hover:bg-gray-800 transition"
                                >
                                    {link.name}
                                </a>
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectItem;
