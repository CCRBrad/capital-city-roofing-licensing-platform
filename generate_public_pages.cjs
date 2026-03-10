const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages', 'public');

const pages = [
  { name: 'SuccessStories', title: 'Success Stories', desc: 'Read how our licensed operators scaled their roofing businesses.' },
  { name: 'FeedingTheFuture', title: 'Feeding the Future', desc: 'Learn more about our initiative to give back to the community.' },
  { name: 'Contact', title: 'Contact Us', desc: 'Get in touch with the Capital City Roofing team.' },
  { name: 'TheModel', title: 'The License Model', desc: 'Explore the blueprint that redefines the modern roofing company.' },
  { name: 'TechStack', title: 'Our Tech Stack', desc: 'Discover the AI-driven tools that power our operators.' },
  { name: 'Investment', title: 'Tiered Pricing', desc: 'Transparent investment options for licensing the platform.' },
  { name: 'UniversityPreview', title: 'Capital City University', desc: 'The 14-day intensive training that builds 7-figure operators.' },
  { name: 'IdealCandidate', title: 'The Ideal Candidate', desc: 'See if you have what it takes to join our licensing platform.' },
  { name: 'Markets', title: 'Available Markets', desc: 'Explore prime territories ready for new licensed operators.' },
  { name: 'PrivacyPolicy', title: 'Privacy Policy', desc: 'Our commitment to protecting your privacy and data.' },
  { name: 'TermsOfService', title: 'Terms of Service', desc: 'The rules and guidelines for using our website.' }
];

pages.forEach(page => {
  const filePath = path.join(pagesDir, `${page.name}.tsx`);
  
  // if file already exists, don't overwrite if it has substantial content
  let skip = false;
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    if (stats.size > 1000) {
      skip = true;
    }
  }

  if (!skip) {
    const content = `import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { SVGCurve } from '../../components/ui/SVGCurve';

const ${page.name}: React.FC = () => {
    return (
        <>
            <SEOHead
                title="${page.title} | Capital City Roofing"
                description="${page.desc}"
            />
            
            <section className="bg-navy-950 text-white py-24 md:py-32 relative text-center">
                <div className="container-custom relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight mb-6">
                        ${page.title}
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        ${page.desc}
                    </p>
                </div>
                <SVGCurve fill="#ffffff" />
            </section>

            <section className="py-24 bg-white min-h-[400px] flex items-center justify-center">
                <div className="container-custom text-center">
                    <div className="inline-flex items-center justify-center p-8 bg-muted rounded-xl border border-border">
                        <p className="text-xl font-bold text-muted-foreground">
                            Content coming soon. This page is currently under development.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ${page.name};
`;

    fs.writeFileSync(filePath, content);
    console.log(`Created ${page.name}.tsx`);
  } else {
    console.log(`Skipped ${page.name}.tsx (already has content)`);
  }
});
