import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
    const features = [
        { name: 'Initial Buy-In', ccr: '$15,000', franchise: '$50K - $200K' },
        { name: 'Royalty Fees', ccr: '5% (Capped)', franchise: '8% - 10% (Uncapped)' },
        { name: 'Protected Territory', ccr: true, franchise: true },
        { name: 'Pricing Autonomy', ccr: true, franchise: false },
        { name: 'Vendor Choice', ccr: true, franchise: false },
        { name: 'Brand Customization', ccr: true, franchise: false },
        { name: 'Exit Freedom', ccr: true, franchise: false },
        { name: 'AI & CRM Tech Stack', ccr: true, franchise: 'Often separate/extra' },
        { name: 'Onboarding Time', ccr: '14 Days', franchise: '3 - 6 Months' },
    ];

    const renderCell = (val: string | boolean) => {
        if (typeof val === 'boolean') {
            return val ? (
                <CheckCircle2 className="w-6 h-6 text-success mx-auto drop-shadow-sm" />
            ) : (
                <XCircle className="w-6 h-6 text-red-500 mx-auto opacity-70" />
            );
        }
        return <span className="font-bold">{val}</span>;
    };

    return (
        <section className="py-24 bg-white relative">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">The Clear Choice</span>
                    <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight text-primary mb-6">
                        Licensing vs. Franchising
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Why pay for a franchise when you can license a proven operator platform without the corporate handcuffs?
                    </p>
                </div>

                <div className="overflow-x-auto shadow-navy-xl rounded-xl border border-border">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-navy-950 text-white">
                                <th className="p-4 md:p-6 font-display uppercase tracking-wider text-xl w-1/3">Feature</th>
                                <th className="p-4 md:p-6 font-display uppercase tracking-wider text-xl text-center w-1/3 border-l text-[hsl(38,75%,50%)] border-white/10 bg-primary shadow-inner"> Capital City Licensing </th>
                                <th className="p-4 md:p-6 font-display uppercase tracking-wider text-xl text-center w-1/3 border-l border-white/10 text-white/70"> Traditional Franchise </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {features.map((item, index) => (
                                <tr key={index} className="hover:bg-muted/50 transition-colors bg-white">
                                    <td className="p-4 md:p-6 font-bold text-navy-900 border-r border-border">{item.name}</td>
                                    <td className="p-4 md:p-6 text-center text-primary bg-primary/5 border-r border-border text-lg">
                                        {renderCell(item.ccr)}
                                    </td>
                                    <td className="p-4 md:p-6 text-center text-muted-foreground">
                                        {renderCell(item.franchise)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};
