import type { Metadata } from 'next'
import { createElement } from 'react'

export const metadata: Metadata = {
    title: 'Dubai Golden Visa Through Property Investment | Requirements',
    description: 'Learn the exact requirements, benefits, and process for obtaining a UAE Golden Visa through real estate investment in Dubai.',
    alternates: { canonical: '/insights/dubai-golden-visa-property-investment' },
}

export const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Dubai Golden Visa Through Property Investment | Requirements',
    description: metadata.description,
    author: { '@type': 'Person', name: 'Gopal Ahuja' },
    publisher: { '@type': 'Organization', name: 'Gopal Ahuja', url: 'https://www.gopalahuja.com' },
    mainEntityOfPage: 'https://www.gopalahuja.com/insights/dubai-golden-visa-property-investment',
}

export const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What is the minimum property investment for a Golden Visa?', acceptedAnswer: { '@type': 'Answer', text: 'The minimum investment threshold is AED 2 million. This can be achieved through a single property or a portfolio of multiple properties.' } },
        { '@type': 'Question', name: 'Can I get a Golden Visa with a mortgaged property?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, you can obtain a Golden Visa with a mortgaged property, provided the bank or developer provides an NOC and your paid equity or property value meets the requirements set by the DLD.' } }
    ],
}

const h = createElement
const quickAnswer = 'Investors can obtain a 10-year UAE Golden Visa by purchasing property worth a minimum of AED 2 million. This applies to off-plan, ready, and mortgaged properties, providing long-term residency for the investor and their family.'
const tableData = [
    ['Visa Type', 'Investment Requirement', 'Validity Period'],
    ['Golden Visa (Investor)', 'AED 2,000,000 Minimum', '10 Years (Renewable)'],
    ['Standard Property Visa', 'AED 750,000 Minimum', '2 Years (Renewable)'],
    ['Retirement Visa', 'AED 1,000,000 Minimum', '5 Years (Renewable)']
]

export default function Page() {
    return h('main', { className: 'mx-auto max-w-4xl px-6 py-20 text-slate-900' },
        h('article', { className: 'prose prose-slate max-w-none' },
            h('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: JSON.stringify(articleSchema) } }),
            h('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchema) } }),
            h('p', { className: 'text-sm font-semibold uppercase tracking-widest text-red-700' }, 'Quick Answer'),
            h('p', { className: 'text-xl leading-8' }, quickAnswer),
            h('h1', null, 'Dubai Golden Visa: The Complete Property Investment Guide'),
            h('h2', null, 'What are the benefits of the UAE Golden Visa?'),
            h('p', null, 'The Golden Visa offers 10-year renewable residency without the need for a national sponsor. It allows you to sponsor your spouse, children of any age, and support staff, and remains valid even if you stay outside the UAE for more than six months.'),
            h('h2', null, 'Does off-plan property qualify for the Golden Visa?'),
            h('p', null, 'Yes, off-plan property investments of AED 2 million or more qualify for the Golden Visa, provided the purchase is from an approved developer and the necessary DLD documentation is secured.'),
            h('h2', null, 'Comparative Analysis'),
            h('table', { className: 'w-full text-left' },
                h('thead', null, h('tr', null, h('th', null, tableData[0][0]), h('th', null, tableData[0][1]), h('th', null, tableData[0][2]))),
                h('tbody', null, tableData.slice(1).map((row) => h('tr', { key: row[0] }, row.map((cell) => h('td', { key: cell }, cell)))))
            ),
            h('p', null, h('a', { href: '/insights' }, 'Browse the real estate insights hub'), ' or ', h('a', { href: '/#contact' }, 'request a structured property review'), '.')
        )
    )
}
