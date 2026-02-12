import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data'

export default function StructuredData() {
    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: GENERAL_INFO.name,
        url: 'https://anasmullappally.com',
        email: GENERAL_INFO.email,
        jobTitle: 'Full Stack Developer',
        sameAs: SOCIAL_LINKS.map((link) => link.url),
        image: 'https://anasmullappally.com/og-image.png', // Fallback to OG image
        description: 'Full Stack Developer specializing in modern web applications.',
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
    )
}
