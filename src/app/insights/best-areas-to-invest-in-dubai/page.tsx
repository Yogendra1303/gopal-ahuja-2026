import type { Metadata } from 'next'
import { createElement } from 'react'

export const metadata: Metadata = {
    title: 'Best Areas to Invest in Dubai Real Estate | Top Locations',
    description: 'Discover the most profitable areas for real estate investment in Dubai, comparing rental yields, capital growth, and infrastructure plans.',
    alternates: { canonical: '/insights/best-areas-to-invest-in-dubai' },
}

export const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Areas to Invest in Dubai Real Estate | Top Locations',
    description: metadata.description,
    author: { '@type': 'Person', name: 'Gopal Ahuja' },
    publisher: { '@type': 'Organization', name: 'Gopal Ahuja', url: 'https://www.gopalahuja.com' },
    mainEntityOfPage: 'https://www.gopalahuja.com/insights/best-areas-to-invest-in-dubai',
}

export const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'Which area in Dubai has the highest rental yield?', acceptedAnswer: { '@type': 'Answer', text: 'Emerging and mid-market communities like Jumeirah Village Circle (JVC), Arjan, and Dubai Silicon Oasis consistently offer the highest net rental yields, often exceeding 7.5%.' } },
        { '@type': 'Question', name: 'Is it better to invest in Downtown Dubai or Dubai Marina?', acceptedAnswer: { '@type': 'Answer', text: 'Downtown Dubai commands a higher premium and attracts corporate executives, while Dubai Marina offers strong short-term rental potential and a distinct waterfront lifestyle.' } }
    ],
}

const h = createElement
const quickAnswer = 'The best area to invest depends on your strategy. Palm Jumeirah and Downtown Dubai offer trophy assets with capital preservation, while Jumeirah Village Circle (JVC) and Dubai South provide higher rental yields and significant capital growth potential.'
const tableData = [
    ['Area', 'Primary Strategy', 'Expected Yield Range'],
    ['Jumeirah Village Circle', 'High Income / Rental Yield', '7.0% - 8.5%'],
    ['Downtown Dubai', 'Capital Preservation / Premium', '5.5% - 6.5%'],
    ['Dubai South', 'Long-term Capital Appreciation', '6.0% - 7.5%']
]

export default function Page() {
    return h('main', { className: 'mx-auto max-w-4xl px-6 py-20 text-slate-900' },
        h('article', { className: 'prose prose-slate max-w-none' },
            h('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: JSON.stringify(articleSchema) } }),
            h('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchema) } }),
            h('p', { className: 'text-sm font-semibold uppercase tracking-widest text-red-700' }, 'Quick Answer'),
            h('p', { className: 'text-xl leading-8' }, quickAnswer),
            h('h1', null, 'Best Areas to Invest in Dubai Real Estate'),
            h('h2', null, 'How do you evaluate an emerging neighborhood?'),
            h('p', null, 'Look for planned infrastructure (Metro extensions, schools, retail centers), developer track record, and the ratio of completed to under-construction projects to assess supply risks.'),
            h('h2', null, 'Why are branded residences concentrated in specific areas?'),
            h('p', null, 'Branded residences require prime locations like Palm Jumeirah, Business Bay, or Dubai Water Canal to justify their 25-40% price premium and deliver the expected luxury lifestyle.'),
            h('h2', null, 'Comparative Analysis'),
            h('table', { className: 'w-full text-left' },
                h('thead', null, h('tr', null, h('th', null, tableData[0][0]), h('th', null, tableData[0][1]), h('th', null, tableData[0][2]))),
                h('tbody', null, tableData.slice(1).map((row) => h('tr', { key: row[0] }, row.map((cell) => h('td', { key: cell }, cell)))))
            ),
            h('p', null, h('a', { href: '/insights' }, 'Browse the real estate insights hub'), ' or ', h('a', { href: '/#contact' }, 'request a structured property review'), '.')
        )
    )
}
