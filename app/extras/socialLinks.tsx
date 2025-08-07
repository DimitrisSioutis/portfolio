import LinkedInIcon from './icons/LinkedInIcon';
import EmailIcon from './icons/EmailIcon';
import GithubIcon from './icons/GithubIcon';
import CodepenIcon from './icons/CodepenIcon';

export const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/dimitris-sioutis-717507266/',
    label: 'LinkedIn',
    icon: () => <LinkedInIcon />
  },
  {
    href: 'mailto:sioutisid@gmail.com',
    label: 'Email',
    icon: () => <EmailIcon />
  },
  {
    href: 'https://github.com/',
    label: 'GitHub',
    icon: () => <GithubIcon />
  },
  {
    href: 'https://codepen.io/SioutisD',
    label: 'CodePen',
    icon: () => <CodepenIcon />
  }
];
