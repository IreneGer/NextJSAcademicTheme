interface ProjectProps {
  project: any;
  index: number;
}

const ProjectItem = ({ project, index }: ProjectProps): JSX.Element => {
  return (
    <div className="w-full">
      <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-gray-700 font-semibold text-lg">{project.title}</h2>
        <p className="text-sm text-gray-700 mt-4 leading-relaxed">{project.description}</p>
        
        {project.links && project.links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.links
              .filter((link: any) => link.url && link.url.trim() !== "")
              .map((link: any, idx: number) => (
                
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
