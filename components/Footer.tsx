import personalInfo from './data/personalInfo.json';
import SupportingBox from './SupportingBox';

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center text-sm opacity-60 pt-20 mb-9">
        <SupportingBox />
      </div>
      <p className="text-center text-sm opacity-40 dark:opacity-50 pb-4 pt-4">
        Built with <i>Next.js, TailwindCSS</i>
        {personalInfo.love && (
          <> and <a href={personalInfo.love} target="_blank" rel="noopener noreferrer">💛</a></>
        )}
      </p>
    </footer>
  );
};

export default Footer;
