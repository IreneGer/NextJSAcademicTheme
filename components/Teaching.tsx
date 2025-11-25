import TeachingItem from "./TeachingItem";
import data from "./data/teaching.json";

const Teaching = (): JSX.Element => {
  return (
    <section className="grid gap-6" id="teaching">
      <h2 className="text-xl font-bold mt-12 mb-4">Teaching</h2>
      <div>
        {data.map((course, index) => (
          <TeachingItem course={course} index={index} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Teaching;

