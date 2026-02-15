import { IProject, StackSection } from "@/types";

export const GENERAL_INFO = {
    name: "Anas Mullappally",
    email: "anasmullappally.dev@gmail.com",
    phone: "+918547700297",
    phoneDisplay: "+91 85477 00297",
    emailSubject: "Let's collaborate on a project",
    emailBody:
        "Hi Anas, I came across your portfolio and would love to discuss a potential project with you.",
    carrerStartDate: "2022-11-01", // YYYY-MM-DD
    totalProjects: 15,
    productionDeployments: 5,
    resumeUrl: "/resume.pdf",
    githubUrl: "https://github.com/anasmullappally",
};

export const MY_STACK: StackSection[] = [
    {
        title: 'Frontend',
        items: [
            { name: 'JavaScript', icon: '/icons/js.png' },
            { name: 'TypeScript', icon: '/icons/ts.png' },
            { name: 'React.js', icon: '/icons/react.png' },
            { name: 'Next.js', icon: '/icons/next.png' },
            { name: 'Redux Toolkit', icon: '/icons/redux.png' },
            { name: 'HTML', icon: '/icons/html.svg' },
            { name: 'CSS', icon: '/icons/css.svg' },
            { name: 'Tailwind CSS', icon: '/icons/tailwind.png' },
            { name: 'SCSS', icon: '/icons/sass.png' },
            { name: 'Bootstrap', icon: '/icons/bootstrap.svg' },
            { name: 'Material UI', icon: '/icons/mui.svg' },
            { name: 'Chakra UI', icon: '/icons/chakra.svg' },
            { name: 'jQuery', icon: '/icons/jquery.svg' },
            { name: 'Storybook', icon: '/icons/storybook.svg' },
        ],
    },
    {
        title: 'Backend',
        items: [
            { name: 'Node.js', icon: '/icons/node.png' },
            { name: 'Express.js', icon: '/icons/express.png' },
            { name: 'Socket.IO', icon: '/icons/socketio.svg' },
            { name: 'JWT Auth', icon: '/icons/jwt.webp' },
            { name: 'REST APIs', icon: '/icons/rest_api.svg' },
            { name: 'Mongoose', icon: '/icons/mongoose.svg' },
            { name: 'Jest', icon: '/icons/jest.svg' },
        ],
    },
    {
        title: 'Database',
        items: [
            { name: 'MongoDB', icon: '/icons/mongodb.svg' },
            { name: 'PostgreSQL', icon: '/icons/postgreSQL.png' },
            { name: 'Redis', icon: '/icons/redis.svg' },
            { name: 'Pinecone DB', icon: '/icons/pinecone.webp' },
        ],
    },
    {
        title: 'DevOps & Cloud',
        items: [
            { name: 'AWS', icon: '/icons/aws.png' },
            { name: 'Nginx', icon: '/icons/nginx.svg' },
            { name: 'PM2', icon: '/icons/pm2.svg' },
            { name: 'CI/CD', icon: '/icons/cicd.webp' },
        ],
    },
    {
        title: 'AI & Search',
        items: [
            { name: 'OpenAI APIs', icon: '/icons/openai.svg' },
            { name: 'Pinecone', icon: '/icons/pinecone.webp' },
            { name: 'Algolia', icon: '/icons/algolia.svg' },
        ],
    },
    {
        title: 'Tools & Platforms',
        items: [
            { name: 'Git', icon: '/icons/git.svg' },
            { name: 'GitHub', icon: '/icons/github.svg' },
            { name: 'RabbitMQ', icon: '/icons/rabbitmq.svg' },
            { name: 'Postman', icon: '/icons/postman.svg' },
            { name: 'Swagger', icon: '/icons/swagger.svg' },
            { name: 'Jira', icon: '/icons/jira.svg' },
            { name: 'Figma', icon: '/icons/figma.svg' },
        ],
    }
];

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/anasmullappally' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/anasmullappally' },
    { name: 'instagram', url: 'https://www.instagram.com/anas.mullappally' },
    { name: 'facebook', url: 'https://www.facebook.com/anas.mullappally1' },
];

export const MY_EXPERIENCE = [
    {
        title: 'Full Stack Developer',
        company: 'Appiness Interactive',
        location: 'Bangalore, India',
        duration: 'Jun 2024 - Present',
    },
    {
        title: 'Full Stack Developer',
        company: 'Plutocrat Simulations Tech Pvt. Ltd',
        location: 'Hyderabad, India',
        duration: 'Nov 2022 - Feb 2024',
    },
    {
        title: 'MERN Stack Trainee',
        company: 'Brototype',
        location: 'Calicut, Kerala',
        duration: 'Feb 2022 - Nov 2022',
    },
];

export const PROJECTS: IProject[] = [
    {
        title: 'SIMS Hospital',
        slug: 'sims-hospital',
        liveUrl: 'https://simshospitals.com',
        year: 2026,
        description: `
      A modern, feature-rich healthcare platform built for SIMS Hospital to manage patient services, doctor profiles, and appointment scheduling. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li> Doctor Search & Profiles: Comprehensive system to find and view specialist details</li>
        <li> Appointment Booking: Seamless online scheduling for patient consultations</li>
        <li> Centres of Excellence: Dedicated sections for specialized medical departments</li>
        <li> Patient Services: Integrated information for ambulance, pharmacy, and insurance services</li>
        <li> Fully Responsive: Optimized for desktops, tablets, and mobile devices using Tailwind CSS 4</li>
        <li> High Performance: Built with Next.js 15 for lightning-fast page transitions and SEO</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implemented smooth, touch-enabled sliders using Embla Carousel</li>
        <li>Developed a robust form system with React Hook Form and Zod validation</li>
        <li>Built a theme-aware UI component library with Radix UI and Shadcn</li>
        <li>Configured Swagger documentation for API transparency and testing</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Heavily involved in the core development and optimization:
      <ul>
        <li> Frontend Architecture: Structured the project using Next.js 15 App Router</li>
        <li> UI/UX: Implemented complex, responsive layouts with modern animations</li>
        <li> Logic: Refined visitor date/time logic and state synchronization</li>
        <li> Documentation: Set up Storybook for component isolation and Swagger for API docs</li>
        <li> Deployment: Managed environment configurations and site-wide routing</li>
      </ul>
      `,
        techStack: [
            'Next.js 15',
            'Tailwind CSS 4',
            'Radix UI',
            'Shadcn/UI',
            'Embla Carousel',
            'React Hook Form',
            'Zod',
            'Axios',
            'Storybook'
        ],
        thumbnail: '/projects/sims.webp',
        longThumbnail: '/projects/sims.webp',
        images: [
            '/projects/sims.webp',
        ],
    },
];
