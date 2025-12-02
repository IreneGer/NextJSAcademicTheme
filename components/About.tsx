import ExtLink from './ExtLink';
import ProfileImage from './ProfileImage';
import personalInfo from './data/personalInfo.json';

const About = (): JSX.Element => {
  const { about } = personalInfo;
  
  return (
    <section className="w-full" id="about">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
        <div className="flex-shrink-0">
          <ProfileImage />
        </div>
        
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{personalInfo.name}</h1>
          
          <p className="text-gray-700 leading-relaxed">
            PhD Candidate in{' '}
            {about?.department?.link
              ? <ExtLink href={about.department.link}>{about.department.name}</ExtLink>
              : about?.department?.name || ""
            }{' '}
            at{' '}
            {about?.college?.link
              ? <ExtLink href={about.college.link}>{about.college.name}</ExtLink>
              : about?.college?.name || ""
            }.
          </p>

          {/* {about?.interest && (
            <p className="text-sm text-gray-600 mt-3">
              Research Interests: {about.interest}
            </p>
          )}  */}
          
          <p className="text-sm text-gray-400 mt-4">
            My research focuses on the politics of economic shocks, political behaviour, and fiscal preferences. <br />
            My PhD project investigates the political economy of public fiscal preferences, by looking at how political factors shape perceptions of debt and fiscal rules.
            I employ <strong>quantitative methods</strong>, <strong>causal inference</strong>, and <strong>text-as-data approaches</strong> in my work.<br />
            I hold an MA in Political Economy from King’s College London and previously worked in the Strategic Communication section of the European Central Bank.

          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
