export interface Job {
    period: string;
    title: string;
    company: string;
    refer:string;
    description?: string; // description is optional
    technologies: string[]; // changed to a single array of strings
  }
  
  const experience: Job[] = [
    {
      period: '10/2024  -  PRESENT',
      title: 'FULL STACK DEVELOPER',
      company: 'Plaisio',
      refer:'https://www.plaisio.gr/',
      description: `I work as a full stack developer at Plaisio, focusing on maintaining and integrating new features for our large-scale application, plaisio.gr. This role involves addressing the significant needs of the platform, both front-end and back-end to provide an optimal user experience.`,
      technologies: ['C#','.NET','TypeScript', 'React.js', 'Next.js','Tailwind'] 
    },
    {
      period: '4/2024  -  10/2024',
      title: 'HTML, CSS & JAVASCRIPT DEVELOPER',
      company: 'Poukamisas Publishing Group',
      refer:'https://www.ekdoseispoukamisas.gr/',
      description: `I developed digital objects for educational purposes at Poukamisas Publishing Group, utilizing HTML, CSS, and JavaScript. My role involved creating engaging and interactive content that enhances the learning experience, ensuring that our digital materials are both accessible and effective for users.`,
      technologies: ['HTML', 'CSS', 'JavaScript','JQuery','Bootstrap'] 
    },
    {
      period: '2018  -  PRESENT',
      title: 'WORDPRESS WEBSITE MANAGER',
      company: 'Sioutis Furniture',
      refer:'http://www.sioutisepipla.gr/',
      description: 'I developed a dynamic WordPress e-commerce website using Elementor, creating a visually engaging, responsive design tailored for an intuitive user experience with a strong focus on SEO.', 
      technologies: ['WordPress', 'SEO'] 
    }
  ];
  
  export default experience;
  