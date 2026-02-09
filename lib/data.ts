import { StackSection } from "@/types";

export const GENERAL_INFO = {
    name: "Anas Mullappally",
    email: "anasmullappally.dev@gmail.com",
    emailSubject: "Let's collaborate on a project",
    emailBody:
        "Hi Anas, I came across your portfolio and would love to discuss a potential project with you.",
    carrerStartDate: "2022-11-01", // YYYY-MM-DD
    totalProjects: 15,
    productionDeployments: 5,
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
            { name: 'GitHub', icon: '/icons/github.png' },
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