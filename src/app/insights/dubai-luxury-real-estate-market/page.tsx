import type { Metadata } from 'next'
import { createElement } from 'react'

export const metadata: Metadata = {
    title: 'Dubai Luxury Real Estate Market | High-End Property Guide',
    description: 'An analysis of the ultra-luxury real estate sector in Dubai, focusing on branded residences, waterfront mansions, and trophy assets.',
    alternates: { canonical: '/insights/dubai-luxury-real-estate-market' },
}

export const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Dubai Luxury Real Estate Market | High-End Property Guide',
    description: metadata.description,
    author: { '@type': 'Person', name: 'Gopal Ahuja' },
    publisher: { '@type': 'Organization', name: 'Gopal Ahuja', url: 'https://www.gopalahuja.com' },
    mainEntityOfPage: 'https://www.gopalahuja.com/insights/dubai-luxury-real-estate-market',
}

export const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'Why are ultra-high-net-worth individuals moving to Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'UHNWIs are attracted by the zero-tax regime, exceptional safety, world-class infrastructure, geographic connectivity, and the availability of bespoke luxury lifestyle amenities.' } },
        { '@type': 'Question', name: 'What defines a trophy asset in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Trophy assets in Dubai are typically characterized by direct beach access, panoramic skyline views, association with a global luxury brand, and extreme scarcity in supply.' } }
    ],
}

const h = createElement
const quickAnswer = 'The Dubai luxury real estate market is driven by global wealth migration, finite prime land (like Palm Jumeirah), and the proliferation of ultra-premium branded residences. It offers relative value compared to London or New York, with significantly higher yields.'
const tableData = [
    ['Prime Location', 'Defining Characteristic', 'Target Demographic'],
    ['Palm Jumeirah', 'Iconic Waterfront Mansions', 'UHNWIs, Global Elite'],
    ['Jumeirah Bay Island', 'Exclusive Seclusion (Bulgari)', 'Billionaire Cohort'],
    ['Dubai Harbour', 'Maritime Lifestyle & Superyachts', 'European & CIS Investors']
]

export default function Page() {
    return h('main', { className: 'mx-auto max-w-4xl px-6 py-20 text-slate-900' },
        h('article', { className: 'prose prose-slate max-w-none' },
            h('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: JSON.stringify(articleSchema) } }),
            h('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchema) } }),
            h('p', { className: 'text-sm font-semibold uppercase tracking-widest text-red-700' }, 'Quick Answer'),
            h('p', { className: 'text-xl leading-8' }, quickAnswer),
            h('h1', null, 'Navigating the Dubai Luxury Real Estate Market'),
            h('h2', null, 'How do branded residences perform compared to non-branded luxury?'),
            h('p', null, 'Branded residences consistently command a 25-40% price premium over non-branded equivalents, offering superior resale liquidity and standardized global service levels that international buyers trust.'),
            h('h2', null, 'Where is the next luxury frontier in Dubai?'),
            h('p', null, 'While Palm Jumeirah remains the gold standard, emerging luxury frontiers include Jumeirah Bay Island, Dubai Harbour, and the upcoming Palm Jebel Ali, which will dictate the next decade of waterfront luxury.'),
            h('h2', null, 'Comparative Analysis'),
            h('table', { className: 'w-full text-left' },
                h('thead', null, h('tr', null, h('th', null, tableData[0][0]), h('th', null, tableData[0][1]), h('th', null, tableData[0][2]))),
                h('tbody', null, tableData.slice(1).map((row) => h('tr', { key: row[0] }, row.map((cell) => h('td', { key: cell }, cell)))))
            ),
            h('p', null, h('a', { href: '/insights' }, 'Browse the real estate insights hub'), ' or ', h('a', { href: '/#contact' }, 'request a structured property review'), '.')
        )
    )
}
