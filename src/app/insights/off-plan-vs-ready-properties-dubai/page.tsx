import type { Metadata } from 'next'
import { createElement } from 'react'

export const metadata: Metadata = {
    title: 'Off-Plan vs Ready Properties in Dubai | Investment Guide',
    description: 'Compare the risks, returns, and payment plans of off-plan developments versus ready properties in the Dubai real estate market.',
    alternates: { canonical: '/insights/off-plan-vs-ready-properties-dubai' },
}

export const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Off-Plan vs Ready Properties in Dubai | Investment Guide',
    description: metadata.description,
    author: { '@type': 'Person', name: 'Gopal Ahuja' },
    publisher: { '@type': 'Organization', name: 'Gopal Ahuja', url: 'https://www.gopalahuja.com' },
    mainEntityOfPage: 'https://www.gopalahuja.com/insights/off-plan-vs-ready-properties-dubai',
}

export const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'Are off-plan properties cheaper than ready properties in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'Off-plan properties typically launch at lower prices than completed units in the same area, offering early investors a capital appreciation margin upon handover.' } },
        { '@type': 'Question', name: 'How is my money protected when buying off-plan in Dubai?', acceptedAnswer: { '@type': 'Answer', text: 'The Real Estate Regulatory Agency (RERA) mandates that all investor funds must be deposited into a project-specific Escrow account, which is only released to the developer based on verified construction milestones.' } }
    ],
}

const h = createElement
const quickAnswer = 'Off-plan properties offer staggered payment plans and capital appreciation potential during construction, but carry delivery risk. Ready properties provide immediate rental income and tangible evaluation, but require more upfront capital.'
const tableData = [
    ['Factor', 'Off-Plan Property', 'Ready Property'],
    ['Initial Capital', 'Low (10-20% down payment)', 'High (20%+ plus fees)'],
    ['Income Generation', 'None until handover', 'Immediate rental yield'],
    ['Risk Profile', 'Moderate (construction/delay risk)', 'Low (tangible asset)']
]

export default function Page() {
    return h('main', { className: 'mx-auto max-w-4xl px-6 py-20 text-slate-900' },
        h('article', { className: 'prose prose-slate max-w-none' },
            h('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: JSON.stringify(articleSchema) } }),
            h('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchema) } }),
            h('p', { className: 'text-sm font-semibold uppercase tracking-widest text-red-700' }, 'Quick Answer'),
            h('p', { className: 'text-xl leading-8' }, quickAnswer),
            h('h1', null, 'Off-Plan vs Ready Properties in Dubai: Which is the Better Investment?'),
            h('h2', null, 'What are the advantages of off-plan investments?'),
            h('p', null, 'Off-plan investments allow you to secure an asset with a small down payment (usually 10-20%), benefit from developer payment plans, and capture capital growth as the project nears completion.'),
            h('h2', null, 'When should an investor choose a ready property?'),
            h('p', null, 'Choose a ready property if your primary goal is immediate cash flow, if you plan to move in immediately, or if you prefer to physically inspect the asset and community before committing capital.'),
            h('h2', null, 'Comparative Analysis'),
            h('table', { className: 'w-full text-left' },
                h('thead', null, h('tr', null, h('th', null, tableData[0][0]), h('th', null, tableData[0][1]), h('th', null, tableData[0][2]))),
                h('tbody', null, tableData.slice(1).map((row) => h('tr', { key: row[0] }, row.map((cell) => h('td', { key: cell }, cell)))))
            ),
            h('p', null, h('a', { href: '/insights' }, 'Browse the real estate insights hub'), ' or ', h('a', { href: '/#contact' }, 'request a structured property review'), '.')
        )
    )
}
