import { ReactNode } from 'react';
import IconImage from './IconImage';
import personalInfo from './data/personalInfo.json';

interface BoxProps {
  href: string;
  label: string;
  onClick?: () => void;
  children: ReactNode;
}

const Box = ({ href, label, onClick, children }: BoxProps) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    aria-label={label}
    className="items-center justify-center cursor-pointer transition-colors rounded-md select-none w-7 h-7"
    onClick={onClick}
  >
    {children}
  </a>
);

const SupportingBox = (): JSX.Element => {
  return (
    <div className="flex justify-center space-x-4 dark:invert">
      {personalInfo.socialMedia.GitHub && (
        <Box href={personalInfo.socialMedia.GitHub} label="GitHub">
          <IconImage path="/images/github.svg" name="GitHub" />
        </Box>
      )}
      {personalInfo.socialMedia.LinkedIn && (
        <Box href={personalInfo.socialMedia.LinkedIn} label="LinkedIn">
          <IconImage path="/images/icons8-linkedin.svg" name="LinkedIn" />
        </Box>
      )}
      {personalInfo.about.email && (
        <Box href={`mailto:${personalInfo.about.email}`} label="Email">
          <IconImage path="/images/email.svg" name="Email" />
        </Box>
      )}
    </div>
  );
};

export default SupportingBox;
