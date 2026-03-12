import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const formSchema = z.object({
    fullName: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
    company: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export const HeroLeadForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Lead submitted:', data);
        toast.success('Application Received!', {
            description: 'We will review your information and follow up shortly.',
        });
        reset();
        setIsSubmitting(false);
    };

    return (
        <div className="bg-navy-950 border border-white/10 p-6 md:p-8 rounded-2xl shadow-navy-2xl animate-fade-in delay-300 relative overflow-hidden">
            {/* Subtle inner top highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-bold font-heading text-white mb-2">Start Your Application</h3>
                <p className="text-white/80 text-sm">Find out if the CCR licensing model is a fit for your market. No obligation.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-white">Full Name <span className="text-secondary">*</span></Label>
                    <Input
                        id="fullName"
                        placeholder="John Doe"
                        className="bg-white/90 border-transparent focus:border-secondary focus:ring-secondary text-navy-950"
                        {...register('fullName')}
                    />
                    {errors.fullName && <p className="text-secondary text-xs font-medium">{errors.fullName.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email Address <span className="text-secondary">*</span></Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-white/90 border-transparent focus:border-secondary focus:ring-secondary text-navy-950"
                        {...register('email')}
                    />
                    {errors.email && <p className="text-secondary text-xs font-medium">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Phone Number <span className="text-secondary">*</span></Label>
                    <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="bg-white/90 border-transparent focus:border-secondary focus:ring-secondary text-navy-950"
                        {...register('phone')}
                    />
                    {errors.phone && <p className="text-secondary text-xs font-medium">{errors.phone.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="company" className="text-white">Current Roofing Company (Optional)</Label>
                    <Input
                        id="company"
                        placeholder="Company Name"
                        className="bg-white/90 border-transparent focus:border-secondary focus:ring-secondary text-navy-950"
                        {...register('company')}
                    />
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[hsl(38,75%,50%)] hover:bg-[hsl(45,90%,60%)] text-navy-950 font-bold tracking-wide mt-2 shadow-glow-gold h-12 text-lg"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Processing...
                        </>
                    ) : (
                        'Start My Application'
                    )}
                </Button>
                <p className="text-white/40 text-[10px] mt-2 text-center leading-relaxed">
                    By submitting, you agree to receive follow-up communications. See our <a href="/privacy-policy" className="underline hover:text-white/60">Privacy Policy</a>.
                </p>
            </form>
        </div>
    );
};
