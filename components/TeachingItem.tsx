interface TeachingProps {
  course: any;
  index: number;
}

const TeachingItem = ({ course, index }: TeachingProps): JSX.Element => {
  return (
    <div className="shadow-lg mb-8 mx-auto lg:w-11/12 lg:h-auto rounded-lg overflow-hidden">
      <div className="bg-gray-50 p-8">
        <h2 className="text-gray-700 font-semibold text-lg">{course.title}</h2>
        {course.date && <p className="text-gray-400 text-sm mt-1">{course.date}</p>}

        <p className="text-gray-500 mt-4 text-justify text-sm" style={{ whiteSpace: 'pre-line' }}>
          {course.description}
        </p>

        {course.links && course.links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {course.links
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

export default TeachingItem;
