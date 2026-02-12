import { GENERAL_INFO } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-2xl sm:text-3xl md:text-4xl font-anton inline-block mt-5 mb-10 hover:text-primary transition-colors break-all sm:break-normal"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="">
                    <a
                        href={GENERAL_INFO.githubUrl}
                        target="_blank"
                        className="leading-none text-muted-foreground hover:underline hover:text-foreground"
                    >
                        {`Built by ${GENERAL_INFO.name} <3`}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
