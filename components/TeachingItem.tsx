interface TeachingItemProps {
  course: any;
  index: number;
}

const TeachingItem = ({ course, index }: TeachingItemProps): JSX.Element => {
  return (
    <div className="w-full">
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between text-gray-500 text-sm mb-2">
          <span>{course.university}</span>
          <span>{course.date}</span>
        </div>
        <h3 className="text-gray-700 font-semibold text-lg">{course.role}</h3>
        {course.courses && course.courses.length > 0 && (
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 text-sm">
            {course.courses.map((c: string, i: number) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TeachingItem;
