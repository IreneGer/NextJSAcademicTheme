import ExtLink from './ExtLink';
import ProfileImage from './ProfileImage';
import personalInfo from './data/personalInfo.json';

const About = (): JSX.Element => {
  const { about } = personalInfo;

  return (
    <section className="grid gap-12" id="about">
      <div className="flex justify-between">
        <div className="mr-8 hidden md:block rounded-md">
          <ProfileImage />
        </div>
        <div className="flex flex-col max-w-xl w-full justify-evenly">
          <h1 className="text-4xl font-bold pb-8 md:pb-0">{personalInfo.name}</h1>

          <p>
            I am a {about?.year || ""} PhD Candidate in{' '}
            {about?.department?.link
              ? <ExtLink href={about.department.link}>{about.department.name}</ExtLink>
              : about?.department?.name || ""
            }{' '}
            at{' '}
            {about?.college?.link
              ? <ExtLink href={about.college.link}>{about.college.name}</ExtLink>
              : about?.college?.name || ""
            }.
            <br />
            {/* {about?.email && <span className="text-sm">✉️ {about.email}</span>} */}
          </p>

          {about?.interest && (
            <p className="text-sm text-gray-600">
              Research Interests: {about.interest}
            </p>
          )}

          <p className="text-sm text-gray-400">
            Under construction...<br />
            Re-architecting this site with some modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
