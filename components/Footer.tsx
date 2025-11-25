import personalInfo from './data/personalInfo.json';
import SupportingBox from './SupportingBox';

const Footer = (): JSX.Element => {
    return (
        <footer>
            <div className="mb-9 pb-0 pl-6 max-w-4xl flex items-center justify-center text-sm opacity-60 m-auto pt-20 pr-5">
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
