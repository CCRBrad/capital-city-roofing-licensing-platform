import React, { useState } from 'react';
import { SEOHead } from '../../components/SEOHead';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { toast } from 'sonner';
import { ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react';

const Apply: React.FC = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        market: '',
        currentRevenue: '',
        capital: '',
        roofingExperience: '',
        salesBackground: '',
        teamSize: '',
        complianceReady: '',
        timeline: '',
        goals: ''
    });

    const updateField = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const totalSteps = 4;
    const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (step < totalSteps) {
            nextStep();
            return;
        }

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            toast.success('Application Received! 🎉', {
                description: 'Our team will review your application and contact you within 24 hours to schedule your audit call.',
            });
            setStep(totalSteps + 1);
        }, 1500);
    };

    return (
        <>
            <SEOHead
                title="Apply For A Territory Audit | Capital City Roofing"
                description="Submit your application to become a Licensed Market Partner. We are currently accepting applications for qualified operators."
            />

            <section className="bg-navy-950 text-white py-24 min-h-[calc(100vh-80px)] relative flex items-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888085698-c9233f208c2a?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

                <div className="container-custom relative z-10 w-full max-w-2xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">Operator Application</span>
                        <h1 className="text-3xl md:text-4xl font-black font-display uppercase tracking-tight mb-3">
                            Apply to Become a Market Partner
                        </h1>
                        <p className="text-white/70 max-w-lg mx-auto">This application helps us evaluate operator fit, market readiness, and launch potential. Not every applicant will be accepted.</p>
                    </div>

                    {/* Qualification Sidebar */}
                    <div className="flex items-center justify-center space-x-6 mb-8 text-sm text-white/50">
                        <div className="flex items-center space-x-1.5">
                            <ShieldCheck className="w-4 h-4 text-success" />
                            <span>Confidential</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                            <CheckCircle2 className="w-4 h-4 text-[hsl(38,75%,50%)]" />
                            <span>24hr Response</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                            <CheckCircle2 className="w-4 h-4 text-[hsl(38,75%,50%)]" />
                            <span>No Obligation</span>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-navy-2xl border border-white/10 relative text-navy-900">

                        {/* Progress Bar */}
                        {step <= totalSteps && (
                            <div className="flex items-center justify-between mb-8 relative">
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-muted -z-10"></div>
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[hsl(38,75%,50%)] -z-10 transition-all duration-300" style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}></div>

                                {[1, 2, 3, 4].map((s) => (
                                    <div key={s} className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= s ? 'bg-[hsl(38,75%,50%)] text-navy-950' : 'bg-muted text-muted-foreground'}`}>
                                        {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                                    </div>
                                ))}
                            </div>
                        )}

                        {step === totalSteps + 1 ? (
                            <div className="text-center py-8 animate-scale-in">
                                <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-success" />
                                </div>
                                <h3 className="text-3xl font-black font-display uppercase tracking-tight text-primary mb-3">Application Submitted</h3>
                                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                                    Our licensing team reviews every application personally. Qualified applicants may be invited to a discovery call and territory audit.
                                </p>

                                {/* What Happens Next */}
                                <div className="bg-muted rounded-xl p-6 text-left max-w-md mx-auto mb-8 border border-border">
                                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">What Happens Next</p>
                                    <div className="space-y-5">
                                        <div className="flex items-start">
                                            <div className="w-8 h-8 rounded-full bg-navy-950 text-white flex items-center justify-center text-sm font-bold shrink-0 mr-3 mt-0.5">1</div>
                                            <div>
                                                <p className="font-bold text-navy-950">Application Review</p>
                                                <p className="text-sm text-muted-foreground">Our team will review your application within <strong className="text-navy-950">24 hours</strong>.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="w-8 h-8 rounded-full bg-navy-950 text-white flex items-center justify-center text-sm font-bold shrink-0 mr-3 mt-0.5">2</div>
                                            <div>
                                                <p className="font-bold text-navy-950">Discovery Call</p>
                                                <p className="text-sm text-muted-foreground">If your profile aligns, we'll schedule a 30-minute call to discuss your market and goals.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="w-8 h-8 rounded-full bg-[hsl(38,75%,50%)] text-navy-950 flex items-center justify-center text-sm font-bold shrink-0 mr-3 mt-0.5">3</div>
                                            <div>
                                                <p className="font-bold text-navy-950">Territory Audit</p>
                                                <p className="text-sm text-muted-foreground">We'll map your market, review territory availability, and present a partnership proposal.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-xs text-muted-foreground mb-6">We are selective about who operates under the Capital City Roofing brand. Not every applicant will be accepted.</p>
                                <button onClick={() => window.location.href = '/'} className="font-bold text-secondary hover:underline">Return to Homepage</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Step 1: Contact Info */}
                                {step === 1 && (
                                    <div className="animate-fade-in space-y-4">
                                        <h3 className="text-xl font-bold font-heading text-primary border-b border-border pb-2 mb-4">Step 1: Background</h3>
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

                                {/* Step 2: Operator Background */}
                                {step === 2 && (
                                    <div className="animate-fade-in space-y-4">
                                        <h3 className="text-xl font-bold font-heading text-primary border-b border-border pb-2 mb-4">Step 2: Experience & Team</h3>
                                        <div className="space-y-2">
                                            <Label>Do you have roofing or construction experience? <span className="text-secondary">*</span></Label>
                                            <select name="roofingExperience" value={formData.roofingExperience} onChange={updateField} required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                                <option value="">Select...</option>
                                                <option value="none">No — new to the industry</option>
                                                <option value="1-2">1–2 years</option>
                                                <option value="3-5">3–5 years</option>
                                                <option value="5+">5+ years</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Sales or leadership background? <span className="text-secondary">*</span></Label>
                                            <select name="salesBackground" value={formData.salesBackground} onChange={updateField} required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                                <option value="">Select...</option>
                                                <option value="sales">Sales professional</option>
                                                <option value="management">Management / team leadership</option>
                                                <option value="business-owner">Business owner</option>
                                                <option value="military">Military / first responder</option>
                                                <option value="other">Other professional background</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Current team size (if applicable)</Label>
                                            <select name="teamSize" value={formData.teamSize} onChange={updateField} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                                <option value="">Select...</option>
                                                <option value="solo">Just me — starting from scratch</option>
                                                <option value="1-3">1–3 people</option>
                                                <option value="4-10">4–10 people</option>
                                                <option value="10+">10+ people</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Capital & Readiness */}
                                {step === 3 && (
                                    <div className="animate-fade-in space-y-4">
                                        <h3 className="text-xl font-bold font-heading text-primary border-b border-border pb-2 mb-4">Step 3: Market & Readiness</h3>
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
                                        <div className="space-y-2">
                                            <Label>Are you ready to handle state/local contractor compliance? <span className="text-secondary">*</span></Label>
                                            <p className="text-xs text-muted-foreground mb-1">Partners are responsible for meeting required contractor licensing, registration, and insurance in their state.</p>
                                            <select name="complianceReady" value={formData.complianceReady} onChange={updateField} required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                                <option value="">Select...</option>
                                                <option value="ready">Yes — I already have or can obtain required licenses</option>
                                                <option value="needs-guidance">I need guidance on what's required in my state</option>
                                                <option value="unsure">Not sure yet — I want to learn more</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Ideal timeline to launch</Label>
                                            <select name="timeline" value={formData.timeline} onChange={updateField} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                                <option value="">Select...</option>
                                                <option value="asap">Immediately (within 30 days)</option>
                                                <option value="1-3months">1–3 months</option>
                                                <option value="3-6months">3–6 months</option>
                                                <option value="exploring">Just exploring for now</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                {/* Step 4: Vision & Goals */}
                                {step === 4 && (
                                    <div className="animate-fade-in space-y-4">
                                        <h3 className="text-xl font-bold font-heading text-primary border-b border-border pb-2 mb-4">Step 4: Vision & Goals</h3>
                                        <div className="space-y-2">
                                            <Label>Why are you interested in partnering with Capital City Roofing? <span className="text-secondary">*</span></Label>
                                            <p className="text-xs text-muted-foreground mb-1">We are highly selective. Tell us why you're a fit and what you're building toward.</p>
                                            <textarea
                                                name="goals"
                                                rows={5}
                                                required
                                                value={formData.goals}
                                                onChange={updateField}
                                                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                                placeholder="Share your background, why the CCR model appeals to you, and your revenue goals for Year 1..."
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Navigation */}
                                <div className="flex justify-between pt-6 border-t border-border mt-8">
                                    {step > 1 ? (
                                        <Button type="button" variant="outline" onClick={prevStep} className="font-bold border-muted-foreground/30 text-navy-950">
                                            <ArrowLeft className="w-4 h-4 mr-2" /> Back
                                        </Button>
                                    ) : <div></div>}

                                    <Button type="submit" disabled={isSubmitting} className="font-bold bg-[hsl(38,75%,50%)] hover:bg-[hsl(45,90%,60%)] text-navy-950 px-8">
                                        {step < totalSteps ? (
                                            <>Next Step <ArrowRight className="w-4 h-4 ml-2" /></>
                                        ) : (
                                            <>{isSubmitting ? 'Submitting...' : 'Submit Application'}</>
                                        )}
                                    </Button>
                                </div>

                            </form>
                        )}
                    </div>

                    {/* Licensing Compliance Note */}
                    <p className="text-center text-white/30 text-xs mt-6 max-w-lg mx-auto leading-relaxed">
                        By applying, you acknowledge that Capital City Roofing licenses its brand, operating systems, and training platform. Licensed operators are independent business owners responsible for all applicable state and local contractor licensing, insurance, and compliance requirements in their market.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Apply;
