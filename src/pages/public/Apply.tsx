import React, { useState } from 'react';
import { SEOHead } from '../../components/SEOHead';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { toast } from 'sonner';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

const Apply: React.FC = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        market: '',
        currentRevenue: '',
        capital: '',
        goals: ''
    });

    const updateField = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (step < 3) {
            nextStep();
            return;
        }

        setIsSubmitting(true);
        // Simulate API Call
        setTimeout(() => {
            setIsSubmitting(false);
            toast.success('Application Received! 🎉', {
                description: 'Our team will review your application and contact you within 24 hours to schedule your audit call.',
            });
            // Reset or redirect
            setStep(4); // Show success state
        }, 1500);
    };

    return (
        <>
            <SEOHead
                title="Apply For A Territory Audit | Capital City Roofing"
                description="Submit your application to become a Licensed Operator. We are currently accepting applications for 6 active markets."
            />

            <section className="bg-navy-950 text-white py-24 min-h-[calc(100vh-80px)] relative flex items-center">
                {/* Abstract background */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888085698-c9233f208c2a?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

                <div className="container-custom relative z-10 w-full max-w-2xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">Confidential Application</span>
                        <h1 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight mb-2">
                            Apply For Your Market
                        </h1>
                        <p className="text-white/70">Take the first step towards owning a scalable roofing operation.</p>
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-navy-2xl border border-white/10 relative text-navy-900">

                        {/* Progress Bar */}
                        {step < 4 && (
                            <div className="flex items-center justify-between mb-8 relative">
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-muted -z-10"></div>
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[hsl(38,75%,50%)] -z-10 transition-all duration-300" style={{ width: `${(step - 1) * 50}%` }}></div>

                                {[1, 2, 3].map((s) => (
                                    <div key={s} className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= s ? 'bg-[hsl(38,75%,50%)] text-navy-950' : 'bg-muted text-muted-foreground'}`}>
                                        {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                                    </div>
                                ))}
                            </div>
                        )}

                        {step === 4 ? (
                            <div className="text-center py-12 animate-scale-in">
                                <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-success" />
                                </div>
                                <h3 className="text-3xl font-black font-display uppercase tracking-tight text-primary mb-4">Application Submitted</h3>
                                <p className="text-muted-foreground mb-8">We've received your information. A member of our licensing team will review your application and reach out shortly to schedule your initial compatibility audit.</p>
                                <button onClick={() => window.location.href = '/'} className="font-bold text-secondary hover:underline">Return to Homepage</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Step 1: Your Info */}
                                {step === 1 && (
                                    <div className="animate-fade-in space-y-4">
                                        <h3 className="text-xl font-bold font-heading text-primary border-b border-border pb-2 mb-4">Step 1: Your Information</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label>First Name <span className="text-secondary">*</span></Label>
                                                <Input name="firstName" value={formData.firstName} onChange={updateField} required />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Last Name <span className="text-secondary">*</span></Label>
                                                <Input name="lastName" value={formData.lastName} onChange={updateField} required />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Email <span className="text-secondary">*</span></Label>
                                            <Input type="email" name="email" value={formData.email} onChange={updateField} required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Phone <span className="text-secondary">*</span></Label>
                                            <Input type="tel" name="phone" value={formData.phone} onChange={updateField} required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Target Market / State <span className="text-secondary">*</span></Label>
                                            <Input name="market" placeholder="e.g. Atlanta, GA or Charlotte, NC" value={formData.market} onChange={updateField} required />
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Background */}
                                {step === 2 && (
                                    <div className="animate-fade-in space-y-4">
                                        <h3 className="text-xl font-bold font-heading text-primary border-b border-border pb-2 mb-4">Step 2: Business Background</h3>
                                        <div className="space-y-2">
                                            <Label>Current Annual Revenue (If currently operating)</Label>
                                            <select name="currentRevenue" value={formData.currentRevenue} onChange={updateField} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                                <option value="">Select option...</option>
                                                <option value="startup">Startup / Pre-revenue</option>
                                                <option value="0-1M">$0 - $1,000,000</option>
                                                <option value="1M-3M">$1,000,000 - $3,000,000</option>
                                                <option value="3M+">$3,000,000+</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Available Liquid Capital <span className="text-secondary">*</span></Label>
                                            <p className="text-xs text-muted-foreground mb-1">Our buy-in is $15,000, but we require operators to have sufficient runway capital.</p>
                                            <select name="capital" value={formData.capital} onChange={updateField} required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                                <option value="">Select option...</option>
                                                <option value="under25k">Under $25,000 (May need financing)</option>
                                                <option value="25k-50k">$25,000 - $50,000</option>
                                                <option value="50k-100k">$50,000 - $100,000</option>
                                                <option value="100k+">$100,000+</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Goals */}
                                {step === 3 && (
                                    <div className="animate-fade-in space-y-4">
                                        <h3 className="text-xl font-bold font-heading text-primary border-b border-border pb-2 mb-4">Step 3: Vision & Goals</h3>
                                        <div className="space-y-2">
                                            <Label>Why are you interested in partnering with Capital City Roofing? <span className="text-secondary">*</span></Label>
                                            <p className="text-xs text-muted-foreground mb-1">We are highly selective. Let us know why you're a fit.</p>
                                            <textarea
                                                name="goals"
                                                rows={5}
                                                required
                                                value={formData.goals}
                                                onChange={updateField}
                                                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                                placeholder="Share your background, roofing experience (if any), and revenue goals..."
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Navigation Buttons */}
                                <div className="flex justify-between pt-6 border-t border-border mt-8">
                                    {step > 1 ? (
                                        <Button type="button" variant="outline" onClick={prevStep} className="font-bold border-muted-foreground/30 text-navy-950">
                                            <ArrowLeft className="w-4 h-4 mr-2" /> Back
                                        </Button>
                                    ) : <div></div>}

                                    <Button type="submit" disabled={isSubmitting} className="font-bold bg-[hsl(38,75%,50%)] hover:bg-[hsl(45,90%,60%)] text-navy-950 px-8">
                                        {step < 3 ? (
                                            <>Next Step <ArrowRight className="w-4 h-4 ml-2" /></>
                                        ) : (
                                            <>{isSubmitting ? 'Submitting...' : 'Submit Application'}</>
                                        )}
                                    </Button>
                                </div>

                            </form>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Apply;
