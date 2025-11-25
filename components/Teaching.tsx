import TeachingItem from "./TeachingItem";
import data from "./data/teaching.json";

const Teaching = (): JSX.Element => {
  return (
    <section className="grid gap-6" id="teaching">
      {/* Full-width wrapper with max-width for large screens */}
      <div className="w-full max-w-5xl mx-auto px-4">
        <h2 className="text-xl font-bold mt-12 mb-4 text-center md:text-left">
          Teaching
        </h2>

        <div className="flex flex-col gap-6">
          {data.map((course, index) => (
            <TeachingItem course={course} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teaching;
