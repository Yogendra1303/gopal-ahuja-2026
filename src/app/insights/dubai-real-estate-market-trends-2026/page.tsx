import type { Metadata } from 'next'
import { createElement } from 'react'

export const metadata: Metadata = {
    title: 'Dubai Real Estate Market Trends 2026 | Property Outlook',
    description: 'Explore the key drivers shaping the Dubai real estate market in 2026, including institutional capital flows, infrastructure, and prime yields.',
    alternates: { canonical: '/insights/dubai-real-estate-market-trends-2026' },
}

export const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Dubai Real Estate Market Trends 2026 | Property Outlook',
    description: metadata.description,
    author: { '@type': 'Person', name: 'Gopal Ahuja' },
    publisher: { '@type': 'Organization', name: 'Gopal Ahuja', url: 'https://www.gopalahuja.com' },
    mainEntityOfPage: 'https://www.gopalahuja.com/insights/dubai-real-estate-market-trends-2026',
}

export const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'What is the real estate forecast for Dubai in 2026?', acceptedAnswer: { '@type': 'Answer', text: 'The forecast suggests sustainable growth with institutional capital replacing speculative buying, supporting steady yields across commercial and residential sectors.' } },
        { '@type': 'Question', name: 'Where are the best areas for capital appreciation in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Areas with committed infrastructure projects, such as the Al Maktoum Airport expansion corridor and the new Metro Blue Line routes, offer the highest appreciation potential.' } }
    ],
}

const h = createElement
const quickAnswer = 'The Dubai real estate market in 2026 is defined by maturation, institutionalization, and infrastructure-led growth. Expect yield stabilization in established ultra-luxury corridors and continued appreciation in emerging infrastructure hubs like Dubai South.'
const tableData = [
    ['Market Segment', '2026 Outlook', 'Investor Profile'],
    ['Ultra-Luxury Waterfront', 'Yield compression, high capital values', 'UHNW, Family Offices'],
    ['Mid-Market Residential', 'Strong rental yields (7-9%)', 'Income Investors, Expatriates'],
    ['Commercial Grade A', 'High occupancy, rising rents', 'Institutional Funds, REITs']
]

export default function Page() {
    return h('main', { className: 'mx-auto max-w-4xl px-6 py-20 text-slate-900' },
        h('article', { className: 'prose prose-slate max-w-none' },
            h('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: JSON.stringify(articleSchema) } }),
            h('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchema) } }),
            h('p', { className: 'text-sm font-semibold uppercase tracking-widest text-red-700' }, 'Quick Answer'),
            h('p', { className: 'text-xl leading-8' }, quickAnswer),
            h('h1', null, 'Dubai Real Estate Market Trends 2026: A Strategic Outlook'),
            h('h2', null, 'What are the macroeconomic drivers for Dubai property in 2026?'),
            h('p', null, 'The primary drivers include continued population influx, corporate relocations, the expansion of the Golden Visa programme, and zero-tax environment appealing to global wealth.'),
            h('h2', null, 'How is institutional capital reshaping the market?'),
            h('p', null, 'Sovereign wealth funds and global REITs are deploying capital at scale, leading to better price discovery, higher development standards, and reduced volatility across prime asset classes.'),
            h('h2', null, 'Comparative Analysis'),
            h('table', { className: 'w-full text-left' },
                h('thead', null, h('tr', null, h('th', null, tableData[0][0]), h('th', null, tableData[0][1]), h('th', null, tableData[0][2]))),
                h('tbody', null, tableData.slice(1).map((row) => h('tr', { key: row[0] }, row.map((cell) => h('td', { key: cell }, cell)))))
            ),
            h('p', null, h('a', { href: '/insights' }, 'Browse the real estate insights hub'), ' or ', h('a', { href: '/#contact' }, 'request a structured property review'), '.')
        )
    )
}
