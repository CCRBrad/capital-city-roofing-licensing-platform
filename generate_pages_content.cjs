const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages', 'public');

const pages = [
    {
        name: 'SuccessStories',
        title: 'Success Stories',
        subtitle: 'Real Results from Real Operators',
        content: `
            <section className="py-24 bg-white relative">
                <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { name: 'Michael T.', location: 'Atlanta, GA (2025)', rev: '$2.1M Y1 Revenue', quote: '"The tech stack alone is worth the fee. Best business decision I\\'ve made."' },
                        { name: 'Sarah J.', location: 'Charlotte, NC (2025)', rev: '$3.4M Y2 Revenue', quote: '"I switched from a major franchise. The 5% capped royalty vs the 9% I was paying means I kept an extra $130K."' },
                        { name: 'David L.', location: 'Nashville, TN (2026)', rev: 'Onboarding Phase', quote: '"Capital City University had me ready to sell on Day 14. The support team is incredible."' }
                    ].map((testimonial, idx) => (
                        <div key={idx} className="bg-navy-900 p-8 rounded-xl border border-white/10 shadow-navy-xl flex flex-col justify-between text-white">
                            <div>
                                <p className="text-lg italic text-white/90 mb-6 leading-relaxed">
                                    {testimonial.quote}
                                </p>
                            </div>
                            <div className="border-t border-white/10 pt-4">
                                <h4 className="font-bold font-heading text-lg">{testimonial.name}</h4>
                                <p className="text-white/60 text-sm mb-1">{testimonial.location}</p>
                                <p className="text-[hsl(38,75%,50%)] font-bold text-sm tracking-wide">{testimonial.rev}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="py-24 bg-navy-50 text-center">
                <div className="container-custom">
                    <h2 className="text-4xl font-black font-display text-primary uppercase mb-6">Ready to write your own success story?</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Join a network of high-performing operators scaling their businesses without the crushing weight of back-office operations.</p>
                    <a href="/apply" className="inline-block bg-[hsl(38,75%,50%)] text-navy-950 px-8 py-3 rounded-md font-bold hover:bg-[hsl(45,90%,60%)] transition-colors">Apply Now</a>
                </div>
            </section>`
    },
    {
        name: 'Contact',
        title: 'Contact Us',
        subtitle: 'Get In Touch with Capital City Roofing',
        content: `
            <section className="py-24 bg-white relative">
                <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-black font-display text-primary uppercase tracking-tight mb-6">Let's Talk Business</h2>
                        <p className="text-lg text-muted-foreground mb-8">Whether you're interested in our licensing model, have questions about our tech stack, or just want to see if your market is available, we're here to help.</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center text-primary shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy-950">Phone</h4>
                                    <p className="text-muted-foreground">(470) 766-3285</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center text-primary shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy-950">Email</h4>
                                    <p className="text-muted-foreground">licensing@capitalcityroofing.net</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center text-primary shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy-950">Headquarters</h4>
                                    <p className="text-muted-foreground">360 Winkler Drive, Suite E<br/>Alpharetta, Georgia 30004</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-muted p-8 rounded-xl border border-border mt-8 md:mt-0">
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-navy-950">First Name</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-secondary" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-navy-950">Last Name</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-secondary" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy-950">Email Address</label>
                                <input type="email" className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-secondary" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy-950">Phone Number</label>
                                <input type="tel" className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-secondary" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy-950">Message</label>
                                <textarea rows={4} className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-secondary"></textarea>
                            </div>
                            <button type="button" className="w-full bg-secondary text-white font-bold py-3 rounded-md hover:bg-red-700 transition-colors">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>`
    },
    {
        name: 'FeedingTheFuture',
        title: 'Feeding The Future',
        subtitle: 'Our Commitment to the Community',
        content: `
            <section className="py-24 bg-white relative">
                <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-black font-display text-primary uppercase tracking-tight mb-6">Building Roofs, Building Communities</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            At Capital City Roofing, we believe that true success is measured by the impact we have on our community. That's why we launched the Feeding the Future initiative.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            For every roof installed across our entire Licensed Operating Platform, a portion of the proceeds goes directly toward feeding families in need and funding youth educational programs.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-8 mb-8">
                            <div className="border-l-4 border-secondary pl-4">
                                <p className="text-4xl font-black text-navy-950 font-display">10,000+</p>
                                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mt-1">Meals Provided</p>
                            </div>
                            <div className="border-l-4 border-[hsl(38,75%,50%)] pl-4">
                                <p className="text-4xl font-black text-navy-950 font-display">$50K+</p>
                                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mt-1">Donated</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-navy-2xl">
                        <div className="absolute inset-0 bg-navy-900 flex items-center justify-center p-8 text-center text-white italic text-2xl font-heading bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center blend-overlay before:absolute before:inset-0 before:bg-navy-950/80">
                            <span className="relative z-10">"A company is only as strong as the community it serves."</span>
                        </div>
                    </div>
                </div>
            </section>`
    },
    {
        name: 'UniversityPreview',
        title: 'Capital City University',
        subtitle: 'The 14-Day Intensive Training That Builds 7-Figure Operators',
        content: `
            <section className="py-24 bg-white">
                <div className="container-custom max-w-4xl text-center">
                    <h2 className="text-3xl font-black font-display text-primary uppercase tracking-tight mb-6">From Sales Pro to Systems Operator</h2>
                    <p className="text-lg text-muted-foreground mb-16">Our proprietary 14-day training curriculum handles the heavy lifting of teaching you exactly how to operate the Capital City Roofing model inside your exclusive market.</p>
                </div>
                
                <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { day: 'Days 1-3', title: 'The Blueprint', desc: 'Understanding the backend systems: GoHighLevel CRM setup, AI automation configuration, and understanding the financial models.' },
                        { day: 'Days 4-7', title: 'The Sales Matrix', desc: 'Mastering our retail and insurance sales processes, objection handling frameworks, and learning how to properly leverage our back-office estimating team.' },
                        { day: 'Days 8-11', title: 'Production & Fulfillment', desc: 'Navigating material ordering, crew management, quality control standards, and using Roofr to track job progress.' },
                        { day: 'Days 12-14', title: 'Market Supremacy', desc: 'Local marketing launch strategies, generating organic and paid leads, and scaling recruiting to build your sales team.' }
                    ].map((module, idx) => (
                        <div key={idx} className="bg-muted p-8 rounded-xl border border-border">
                            <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-2 block">{module.day}</span>
                            <h3 className="font-bold text-navy-950 text-xl font-heading mb-4">{module.title}</h3>
                            <p className="text-muted-foreground">{module.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <a href="/apply" className="inline-block bg-primary text-white px-8 py-3 rounded-md font-bold hover:bg-navy-800 transition-colors">Apply For The Next Cohort</a>
                </div>
            </section>`
    }
];

// Combine standard static pages with generic structures
const genericPages = ['TheModel', 'TechStack', 'Investment', 'IdealCandidate', 'Markets', 'PrivacyPolicy', 'TermsOfService'];

genericPages.forEach(p => {
    if (!pages.find(page => page.name === p)) {
        pages.push({
            name: p,
            title: p.replace(/([A-Z])/g, ' $1').trim(), // Add spaces before capital letters
            subtitle: 'This page is actively being developed.',
            content: `
            <section className="py-24 bg-white min-h-[400px] flex items-center justify-center">
                <div className="container-custom max-w-3xl text-center">
                    <div className="p-12 bg-muted rounded-2xl border border-border">
                        <h2 className="text-3xl font-black font-display text-primary uppercase mb-4">Detailed Content Coming Soon</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            We are currently compiling the comprehensive documentation for this section of the Capital City Roofing Licensed Operator Platform.
                        </p>
                        <a href="/contact" className="inline-block bg-secondary text-white px-8 py-3 rounded-md font-bold hover:bg-red-700 transition-colors">Contact Us For Details</a>
                    </div>
                </div>
            </section>`
        });
    }
});

pages.forEach(page => {
    const filePath = path.join(pagesDir, \`\${page.name}.tsx\`);
  
  const content = \`import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { SVGCurve } from '../../components/ui/SVGCurve';

const \${page.name}: React.FC = () => {
    return (
        <>
            <SEOHead
                title="\${page.title} | Capital City Roofing"
                description="\${page.subtitle}"
            />
            
            <section className="bg-navy-950 text-white py-24 md:py-32 relative text-center">
                <div className="container-custom relative z-10">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">\${page.subtitle}</span>
                    <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tight mb-6">
                        \${page.title}
                    </h1>
                </div>
                <SVGCurve fill="#ffffff" />
            </section>
\${page.content}
        </>
    );
};

export default \${page.name};
\`;

    fs.writeFileSync(filePath, content);
    console.log(\`Updated \${page.name}.tsx\`);
});
