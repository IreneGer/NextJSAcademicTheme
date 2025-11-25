import data from "./data/teaching.json";

const Teaching = (): JSX.Element | null => {
  if (!data || data.length === 0) return null;

  return (
    <section className="grid" id="teaching">
      <h2 className="text-xl font-bold mt-12 mb-4">Teaching</h2>
      <div>
        {data.map((item, index) => (
          <div
            key={index}
            className="shadow-lg mb-8 mx-auto lg:w-11/12 lg:h-auto"
          >
            <div className="w-full bg-gray-50 p-8 rounded-lg">
              {/* Job title / role */}
              <h2 className="text-gray-700 font-semibold text-lg">{item.role}</h2>
              
              {/* Date under the job title */}
              <p className="text-gray-500 text-sm mt-1">{item.date}</p>

              {/* Courses below the date */}
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2 text-gray-700 text-sm text-justify">
                {item.courses.map((course, i) => (
                  <li key={i}>{course}</li>
                ))}
              </ul>

              {/* University at the bottom */}
              <div className="mt-4 text-gray-500 text-sm">{item.university}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teaching;
