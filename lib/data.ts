import { IProject, StackSection } from "@/types";

export const GENERAL_INFO = {
    name: "Anas Mullappally",
    email: "anasmullappally.dev@gmail.com",
    emailSubject: "Let's collaborate on a project",
    emailBody:
        "Hi Anas, I came across your portfolio and would love to discuss a potential project with you.",
    carrerStartDate: "2022-11-01", // YYYY-MM-DD
    totalProjects: 15,
    productionDeployments: 5,
    resumeUrl: "/resume.pdf",
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
            { name: 'Tailwind CSS', icon: '/icons/tailwind.png' },
            { name: 'SCSS', icon: '/icons/sass.png' },
            { name: 'Bootstrap', icon: '/icons/bootstrap.svg' },
            { name: 'Material UI', icon: '/icons/mui.svg' },
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
            { name: 'REST APIs', icon: '/icons/api.svg' },
            { name: 'Mongoose', icon: '/icons/mongoose.svg' },
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
            { name: 'Jira', icon: '/icons/jira.svg' },
            { name: 'Figma', icon: '/icons/figma.svg' },
        ],
    }
];

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/anasmullappally' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/anasmullappally/' },
    { name: 'instagram', url: 'https://www.instagram.com/anas.mullappally/' },
    { name: 'facebook', url: 'https://www.facebook.com/' },
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
        title: 'Shoppi',
        slug: 'shoppi',
        description:
            'Full-featured e-commerce platform with vendor management, Razorpay integration, authentication, and admin dashboard.',
        tech: ['Node.js', 'Express', 'MongoDB', 'Razorpay', 'Bootstrap'],
        thumbnail: '/projects/shoppi.png',
        live: '',
        github: '',
    },
    {
        title: 'Chit-Chat',
        slug: 'chit-chat',
        description:
            'Real-time chat application with secure authentication, instant notifications, and Socket.IO powered messaging.',
        tech: ['React', 'Node.js', 'Socket.IO', 'JWT', 'MongoDB'],
        thumbnail: '/projects/chit-chat.png',
        live: '',
        github: '',
    },
    {
        title: 'Incubation Management System',
        slug: 'incubation-management',
        description:
            'Startup registration and slot booking platform built with React and Node.js to streamline onboarding workflows.',
        tech: ['React', 'Node.js', 'MongoDB'],
        thumbnail: '/projects/incubation.png',
        live: '',
        github: '',
    },
    {
        title: 'AI Search System',
        slug: 'ai-search',
        description:
            'AI-powered contextual search built using OpenAI, Pinecone, and Algolia for intelligent recommendations.',
        tech: ['Next.js', 'OpenAI', 'Pinecone', 'Algolia'],
        thumbnail: '/projects/ai-search.png',
        live: '',
        github: '',
    },
];
