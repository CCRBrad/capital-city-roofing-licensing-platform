const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages', 'public');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

const pages = [
  { name: 'HowItWorks', title: 'How It Works | Capital City Roofing', path: 'HowItWorks.tsx' },
  { name: 'TrainingSupport', title: 'Training & Support | Capital City Roofing', path: 'TrainingSupport.tsx' },
  { name: 'WhyLicensing', title: 'Why Licensing Over Franchising? | CCR', path: 'WhyLicensing.tsx' },
  { name: 'SuccessStories', title: 'Operator Success Stories | CCR', path: 'SuccessStories.tsx' },
  { name: 'IdealCandidate', title: 'The Ideal Candidate | Capital City Roofing', path: 'IdealCandidate.tsx' },
  { name: 'FAQ', title: 'Frequently Asked Questions | CCR', path: 'FAQ.tsx' },
  { name: 'Contact', title: 'Contact Us | Capital City Roofing', path: 'Contact.tsx' },
  { name: 'RoofingFranchiseAlternative', title: 'The Ultimate Roofing Franchise Alternative', path: 'RoofingFranchiseAlternative.tsx' },
  { name: 'UniversityPreview', title: 'Capital City University Preview', path: 'UniversityPreview.tsx' },
  { name: 'UniversityCurriculum', title: 'University Curriculum | CCR', path: 'UniversityCurriculum.tsx' },
  { name: 'FeedingTheFuture', title: 'Feeding The Future Initiative | CCR', path: 'FeedingTheFuture.tsx' },
  { name: 'Resources', title: 'Partner Resources | Capital City Roofing', path: 'Resources.tsx' },
  { name: 'PrivacyPolicy', title: 'Privacy Policy | Capital City Roofing', path: 'PrivacyPolicy.tsx' },
  { name: 'TermsOfService', title: 'Terms of Service | Capital City Roofing', path: 'TermsOfService.tsx' },
  { name: 'Playbook', title: 'The Operator Playbook | CCR', path: 'Playbook.tsx' }
];

pages.forEach(page => {
  const content = `import React from 'react';
import { SEOHead } from '../../components/SEOHead';

const ${page.name}: React.FC = () => {
    return (
        <>
            <SEOHead 
                title="${page.title}" 
                description="Learn more about ${page.name} with Capital City Roofing Licensed Operating Platform." 
            />
            <section className="py-32 bg-navy-950 text-white text-center">
                <div className="container-custom">
                    <h1 className="text-5xl font-black font-display uppercase tracking-tight mb-6">${page.title.split('|')[0].trim()}</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">This page is currently under structure development as we build out the full platform.</p>
                </div>
            </section>
        </>
    );
};

export default ${page.name};
`;
  fs.writeFileSync(path.join(pagesDir, page.path), content);
});
console.log('Pages generated successfully!');
