'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { MoveUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { ThemeToggle } from './ThemeToggle';

const COLORS = [
    'bg-yellow-500 text-black',
    'bg-blue-500 text-white',
    'bg-teal-500 text-black',
    'bg-indigo-500 text-white',
];

const MENU_LINKS = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'About Me',
        url: '/#about-me',
    },
    {
        name: 'Experience',
        url: '/#my-experience',
    },
    {
        name: 'Projects',
        url: '/#selected-projects',
    },
];

const WhatsappIcon = ({ className = "size-3.5" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    return (
        <>
            <div className="sticky top-0 z-[60] pointer-events-none">
                <div className="flex items-center gap-4 absolute top-5 right-5 md:right-10 pointer-events-auto">
                    <a
                        href={GENERAL_INFO.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-4 py-1 border border-foreground/20 rounded overflow-hidden transition-colors duration-300 hover:border-primary max-md:hidden"
                    >
                        <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                        <span className="relative z-10 font-anton uppercase text-xs tracking-widest group-hover:text-primary-foreground transition-colors duration-300">
                            Resume
                        </span>
                    </a>

                    <ThemeToggle />

                    <button
                        className={cn(
                            'group size-12 relative z-10',
                        )}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span
                            className={cn(
                                'inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -translate-y-[5px] ',
                                {
                                    'rotate-45 -translate-y-1/2': isMenuOpen,
                                    'md:group-hover:rotate-12': !isMenuOpen,
                                },
                            )}
                        ></span>
                        <span
                            className={cn(
                                'inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 translate-y-[5px] ',
                                {
                                    '-rotate-45 -translate-y-1/2': isMenuOpen,
                                    'md:group-hover:-rotate-12': !isMenuOpen,
                                },
                            )}
                        ></span>
                    </button>
                </div>
            </div>

            <div
                className={cn(
                    'overlay fixed inset-0 z-[40] bg-background/70 transition-all duration-150',
                    {
                        'opacity-0 invisible pointer-events-none': !isMenuOpen,
                    },
                )}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            <div
                className={cn(
                    'fixed top-0 right-0 h-[100dvh] w-[500px] max-w-[calc(100vw-3rem)] transform translate-x-full transition-transform duration-700 z-[50] overflow-hidden gap-y-14',
                    'flex flex-col lg:justify-center py-10',
                    { 'translate-x-0': isMenuOpen },
                )}
            >
                <div
                    className={cn(
                        'fixed inset-0 scale-150 translate-x-1/2 rounded-[50%] bg-background-light duration-700 delay-150 z-[-1]',
                        {
                            'translate-x-0': isMenuOpen,
                        },
                    )}
                ></div>

                <div className="grow flex md:items-center w-full max-w-[300px] mx-8 sm:mx-auto">
                    <div className="flex gap-10 lg:justify-between max-lg:flex-col w-full">
                        <div className="max-lg:order-2">
                            <p className="text-muted-foreground mb-5 md:mb-8">
                                SOCIAL
                            </p>
                            <ul className="space-y-3">
                                {SOCIAL_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-lg capitalize hover:underline"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <p className="text-muted-foreground mb-5 md:mb-8">
                                MENU
                            </p>
                            <ul className="space-y-3">
                                {MENU_LINKS.map((link, idx) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.url}
                                            onClick={(e) => {
                                                if (link.url.startsWith('/#')) {
                                                    // Allow default anchor behavior
                                                    setTimeout(() => setIsMenuOpen(false), 100);
                                                } else {
                                                    e.preventDefault();
                                                    router.push(link.url);
                                                    setIsMenuOpen(false);
                                                }
                                            }}
                                            className="group text-xl flex items-center gap-3"
                                        >
                                            <span
                                                className={cn(
                                                    'size-3.5 bg-foreground/20 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all',
                                                    COLORS[idx % COLORS.length],
                                                )}
                                            >
                                                <MoveUpRight
                                                    size={8}
                                                    className="scale-0 group-hover:scale-100 transition-all"
                                                />
                                            </span>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <a
                                        href={GENERAL_INFO.resumeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group text-xl flex items-center gap-3"
                                    >
                                        <span
                                            className={cn(
                                                'size-3.5 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all',
                                                COLORS[0],
                                            )}
                                        >
                                            <MoveUpRight
                                                size={8}
                                                className="scale-0 group-hover:scale-100 transition-all"
                                            />
                                        </span>
                                        Resume
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-[300px] mx-8 sm:mx-auto space-y-4">
                    <p className="text-muted-foreground mb-3">GET IN TOUCH</p>
                    <a
                        href={`mailto:${GENERAL_INFO.email}`}
                        className="block text-lg hover:text-primary transition-colors"
                    >
                        {GENERAL_INFO.email}
                    </a>
                    <div className="space-y-3.5 pt-1">
                        {GENERAL_INFO.phones.map((phone) => (
                            <div key={phone.number} className="flex flex-col gap-1">
                                <span className="text-xs text-muted-foreground flex items-center gap-1.5 uppercase font-medium tracking-wider">
                                    <span>{phone.flag}</span>
                                    <span>{phone.country}</span>
                                </span>
                                <div className="flex items-center justify-between gap-2">
                                    <a
                                        href={`tel:${phone.number}`}
                                        className="text-base font-anton hover:text-primary transition-colors"
                                    >
                                        {phone.display}
                                    </a>
                                    <a
                                        href={phone.whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={`Chat on WhatsApp (${phone.country})`}
                                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all font-sans font-medium"
                                    >
                                        <WhatsappIcon className="size-3.5" />
                                        <span>WhatsApp</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
