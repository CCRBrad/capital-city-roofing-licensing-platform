export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    author: {
        name: string;
        role: string;
        avatarUrl: string;
    };
    category: string;
    tags: string[];
    publishedAt: string;
    readTime: string;
    coverImage: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'why-roofing-franchises-are-broken',
        title: 'Why Traditional Roofing Franchises Are Broken',
        excerpt: 'Explore the hidden fees, rigid constraints, and margin-crushing trap of traditional roofing franchises—and what licensed operating platforms do differently.',
        content: `
# The Franchise Trap
When you sign a 10-year contract with a roofing franchise, you are essentially leasing a brand. But what most operators don't realize until it's too late is the true cost of that lease.

## The Royalty Bleed
Traditional franchises charge between 8% and 10% in royalties. That might not sound like a lot when you're doing $500K a year. But when you scale to $5M, you are paying $500,000 every single year just to use their name. 

At Capital City Roofing, we realized this model punishes operators for scaling. That's why we capped our royalties at 5%. We believe your margins should improve as you grow, not shrink.

## The Operational Handcuffs
Franchises tell you what CRM to use, what shingles to buy, and what your trucks must look like. You aren't a business owner; you are a highly-paid general manager of someone else's company.

Our Licensing Platform strips away these handcuffs. We provide the *Capital City Roofing* brand, our operational blueprint, and the entire AI-enabled tech stack. But you have full autonomy pricing, hiring, and local vendor relationships.

## The Alternative
If you want to build a real asset with a scalable back-office, forget the franchise model. Build a licensed operation instead.
    `,
        author: {
            name: 'Brad Strawbridge',
            role: 'CEO & Founder',
            avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80'
        },
        category: 'Business Models',
        tags: ['Franchise', 'Licensing', 'Scaling'],
        publishedAt: '2026-03-01T10:00:00Z',
        readTime: '4 min read',
        coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
    },
    {
        id: '2',
        slug: 'ai-in-roofing-sales',
        title: 'How AI is Replacing the Roofing Receptionist',
        excerpt: 'Meet Sierra and Meaghan: The voice and text AI agents that answer inbound leads in under 5 seconds, qualify prospects, and book roofs 24/7.',
        content: `
# Speed to Lead is Everything
In the storm restoration and retail roofing industries, the operator who responds first wins the contract 70% of the time. 

But what happens when a lead comes in at 8:00 PM on a Saturday? If you rely on a human receptionist or a 3rd party answering service, that lead is likely calling the next roofer on Google.

## Enter AI Agents
Our platform provides every licensed operator with two custom-built AI agents:
* **Sierra AI (Voice):** A sophisticated inbound conversational AI that sounds entirely human. She answers calls 24/7, qualifies the lead, handles objections, and pushes the appointment directly into your sales calendar.
* **Meaghan AI (Text):** The SMS warrior. When a web form is submitted, Meaghan texts the prospect within 5 seconds. 

## The Results
In our flagship Atlanta market, implementing Sierra and Meaghan resulted in a 41% increase in booked appointments without spending a single dollar more on advertising. We didn't need more leads; we just needed to stop bleeding the ones we already had.
    `,
        author: {
            name: 'Technology Team',
            role: 'Capital City Roofing',
            avatarUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80'
        },
        category: 'Technology',
        tags: ['AI', 'Sales', 'Automation'],
        publishedAt: '2026-02-15T09:30:00Z',
        readTime: '3 min read',
        coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80'
    },
    {
        id: '3',
        slug: 'building-a-35-percent-margin-roofing-company',
        title: 'How Centralized Operations Can Improve Roofing Margins',
        excerpt: 'Most roofing companies struggle to hit 15% net profit. Here is the operational breakdown of how centralizing your back office is designed to improve margins.',
        content: `
# The Margin Squeeze
Most roofing contractors are drowning in overhead. They have a full-time office manager, a dedicated estimator, a massive warehouse lease, and a bloated marketing budget. 

After accounting for materials, labor, commissions, and overhead, most owners are lucky to take home 10% to 15%.

## Lean Operations
The key to improving margins isn't charging more; it's centralizing your back office. At Capital City Roofing, our licensed operators don't hire estimators or supplement specialists. They plug into our centralized hub.

Instead of paying a $70K salary to an in-house estimator, our operators simply submit the scope to the portal, and our dedicated team returns a fully-built Roofr estimate and supplement packet within 24 hours.

## Better Material Buys
Scale matters. By bundling volume across all our operators nationally, we secure rebates and tier-1 pricing from suppliers like ABC Supply and SRS that a standalone contractor doing $3M a year could never access.

If you want better margins, stop trying to do everything yourself. Focus on sales and let a dedicated infrastructure handle the rest.
    `,
        author: {
            name: 'Brad Strawbridge',
            role: 'CEO & Founder',
            avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80'
        },
        category: 'Operations',
        tags: ['Profitability', 'Finance', 'Growth'],
        publishedAt: '2026-01-28T14:15:00Z',
        readTime: '5 min read',
        coverImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80'
    }
];
