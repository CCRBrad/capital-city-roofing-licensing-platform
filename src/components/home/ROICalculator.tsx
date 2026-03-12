import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { ShieldAlert, CheckCircle } from 'lucide-react';

export const ROICalculator: React.FC = () => {
    const [revenue, setRevenue] = useState<number>(1500000); // Default $1.5M

    // Constants
    const ccrBuyIn = 15000;
    const ccrRoyaltyRate = 0.05;

    // Averages for Franchise
    const avgFranchiseBuyIn = 100000; // Middle of $50K-$200K
    const avgFranchiseRoyaltyRate = 0.09;

    const computeMetrics = (years: number) => {
        const totalRevenue = revenue * years; // Simplified linear revenue

        const ccrTotal = ccrBuyIn + (totalRevenue * ccrRoyaltyRate);
        const franchiseTotal = avgFranchiseBuyIn + (totalRevenue * avgFranchiseRoyaltyRate);

        return {
            ccrTotal,
            franchiseTotal,
            savings: franchiseTotal - ccrTotal
        };
    };

    const metrics1Y = computeMetrics(1);
    const metrics3Y = computeMetrics(3);
    const metrics5Y = computeMetrics(5);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
    };

    return (
        <section className="py-24 bg-muted relative" id="roi-calculator">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Compare the Cost Structure</span>
                    <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight text-primary mb-6">
                        The True Cost of Franchising
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Use our interactive tool below to see how the fee structures compare between a traditional franchise and Capital City Roofing licensing.
                    </p>
                </div>

                <Card className="max-w-4xl mx-auto shadow-navy-xl border-none overflow-hidden">
                    <CardHeader className="bg-primary text-white p-8">
                        <CardTitle className="text-2xl font-bold font-heading text-center">Projected Annual Revenue</CardTitle>
                        <CardDescription className="text-center text-white/80 text-lg">
                            Move the slider to see how your potential revenue impacts your fees.
                        </CardDescription>

                        <div className="mt-8 mb-4">
                            <div className="text-center text-5xl font-black text-[hsl(38,75%,50%)] mb-6 drop-shadow-md">
                                {formatCurrency(revenue)}
                            </div>
                            <input
                                type="range"
                                min="500000"
                                max="5000000"
                                step="100000"
                                value={revenue}
                                onChange={(e) => setRevenue(Number(e.target.value))}
                                className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[hsl(38,75%,50%)]"
                            />
                            <div className="flex justify-between text-white/60 text-sm mt-3 font-bold">
                                <span>$500K</span>
                                <span>$2.5M</span>
                                <span>$5M+</span>
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent className="p-0 bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                            {/* Year 1 */}
                            <div className="p-8 text-center bg-white hover:bg-muted/30 transition-colors">
                                <h3 className="font-black text-xl text-primary mb-6">Year 1 Projection</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-muted-foreground text-sm font-bold uppercase mb-1 flex items-center justify-center">
                                            <ShieldAlert className="w-4 h-4 mr-1 text-red-500" /> Avg. Franchise Fees
                                        </p>
                                        <p className="text-2xl font-bold text-red-600 line-through decoration-red-600/30">
                                            {formatCurrency(metrics1Y.franchiseTotal)}
                                        </p>
                                    </div>
                                    <div className="pt-4 border-t border-border">
                                        <p className="text-primary text-sm font-bold uppercase mb-1 flex items-center justify-center">
                                            <CheckCircle className="w-4 h-4 mr-1 text-success" /> CCR Licensing Fees
                                        </p>
                                        <p className="text-3xl font-black text-success">
                                            {formatCurrency(metrics1Y.ccrTotal)}
                                        </p>
                                    </div>
                                    <div className="mt-6 pt-4 bg-navy-50 rounded-lg border border-primary/10">
                                        <p className="text-[hsl(38,75%,50%)] font-black text-lg">
                                            Save {formatCurrency(metrics1Y.savings)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Year 3 */}
                            <div className="p-8 text-center bg-white hover:bg-muted/30 transition-colors">
                                <h3 className="font-black text-xl text-primary mb-6">Year 3 Projection</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-muted-foreground text-sm font-bold uppercase mb-1 flex items-center justify-center">
                                            <ShieldAlert className="w-4 h-4 mr-1 text-red-500" /> Avg. Franchise Fees
                                        </p>
                                        <p className="text-2xl font-bold text-red-600 line-through decoration-red-600/30">
                                            {formatCurrency(metrics3Y.franchiseTotal)}
                                        </p>
                                    </div>
                                    <div className="pt-4 border-t border-border">
                                        <p className="text-primary text-sm font-bold uppercase mb-1 flex items-center justify-center">
                                            <CheckCircle className="w-4 h-4 mr-1 text-success" /> CCR Licensing Fees
                                        </p>
                                        <p className="text-3xl font-black text-success">
                                            {formatCurrency(metrics3Y.ccrTotal)}
                                        </p>
                                    </div>
                                    <div className="mt-6 pt-4 bg-navy-50 rounded-lg border border-primary/10">
                                        <p className="text-[hsl(38,75%,50%)] font-black text-lg">
                                            Save {formatCurrency(metrics3Y.savings)}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Year 5 */}
                            <div className="p-8 text-center bg-primary/5 hover:bg-primary/10 transition-colors relative isolate">
                                <div className="absolute top-0 right-0 p-2">
                                    <span className="bg-primary text-[hsl(38,75%,50%)] text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-sm shadow-sm">Max Impact</span>
                                </div>
                                <h3 className="font-black text-xl text-primary mb-6">Year 5 Projection</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-muted-foreground text-sm font-bold uppercase mb-1 flex items-center justify-center">
                                            <ShieldAlert className="w-4 h-4 mr-1 text-red-500" /> Avg. Franchise Fees
                                        </p>
                                        <p className="text-2xl font-bold text-red-600 line-through decoration-red-600/30">
                                            {formatCurrency(metrics5Y.franchiseTotal)}
                                        </p>
                                    </div>
                                    <div className="pt-4 border-t border-border">
                                        <p className="text-primary text-sm font-bold uppercase mb-1 flex items-center justify-center">
                                            <CheckCircle className="w-4 h-4 mr-1 text-success" /> CCR Licensing Fees
                                        </p>
                                        <p className="text-3xl font-black text-success drop-shadow-sm">
                                            {formatCurrency(metrics5Y.ccrTotal)}
                                        </p>
                                    </div>
                                    <div className="mt-6 pt-4 bg-navy-900 rounded-lg shadow-inner border border-navy-800">
                                        <p className="text-[hsl(38,75%,50%)] font-black text-xl">
                                            Save {formatCurrency(metrics5Y.savings)}
                                        </p>
                                        <p className="text-white/70 text-xs font-medium uppercase mt-1">Kept in your pocket</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-muted p-4 text-center text-xs text-muted-foreground border-t border-border">
                            * This tool compares fee structures only and does not project revenue, profit, or business outcomes. Calculator utilizes industry average franchise fees ($100K Buy-in, 9% Royalty) vs. Capital City Roofing Licensing ($15K Buy-in, 5% Royalty). Linear revenue assumed for simplicity. Actual results depend on execution, market conditions, and operator performance.
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};
