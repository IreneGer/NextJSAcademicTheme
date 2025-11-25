import ExtLink from './ExtLink';
import data from './data/personalInfo.json';

const Education = (): JSX.Element => {
  const educationList = data.education || [];

  if (educationList.length === 0) return null; // skip section if no education data

  return (
    <section className="grid" id="education">
      <h2 className="text-xl font-bold mt-12 mb-4">Education</h2>
      <p className="text-base ml-4 text-gray-700">
        🐸 &nbsp;was at &nbsp;
        {educationList.map((edu, index) => (
          <ExtLink href={edu?.link || "#"} key={index}>
            {index > 0 ? `, ${edu?.name || ""}` : edu?.name || ""}
          </ExtLink>
        ))}
      </p>
    </section>
  );
};

export default Education;