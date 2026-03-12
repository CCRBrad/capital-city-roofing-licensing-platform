import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { toast } from 'sonner';

export const LeadCaptureModal: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        // Basic exit intent detection
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasTriggered) {
                setOpen(true);
                setHasTriggered(true);
            }
        };

        // Time-based trigger (fallback if they don't trigger exit intent)
        const timer = setTimeout(() => {
            if (!hasTriggered) {
                setOpen(true);
                setHasTriggered(true);
            }
        }, 45000); // 45 seconds

        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            clearTimeout(timer);
        };
    }, [hasTriggered]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        // Simulate API call
        setTimeout(() => {
            toast.success('Check Your Inbox!', {
                description: 'The operator prospectus has been sent to ' + email,
            });
            setOpen(false);
        }, 1000);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[500px] border-none shadow-navy-2xl overflow-hidden p-0">
                <div className="bg-hero-gradient text-white p-8 relative isolate overflow-hidden">
                    {/* Decorative background element */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-[hsl(38,75%,50%)] rounded-full blur-3xl opacity-20 z-0"></div>

                    <div className="relative z-10 text-center space-y-4">
                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-secondary text-xs font-bold tracking-widest uppercase mb-2 border border-secondary/20">
                            Free Guide
                        </span>
                        <DialogTitle className="text-3xl font-black font-display tracking-tight leading-tight">
                            Get the Operator Prospectus
                        </DialogTitle>
                        <DialogDescription className="text-white/80 text-base mb-6">
                            Download our 2026 Operator Prospectus to learn about the CCR licensing model, what partners receive, and how the process works.
                        </DialogDescription>

                        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 mt-6">
                            <Input
                                type="email"
                                placeholder="Enter your best email..."
                                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 text-center focus:border-[hsl(38,75%,50%)] focus:ring-[hsl(38,75%,50%)]"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Button type="submit" className="h-12 bg-secondary hover:bg-red-700 text-white font-bold text-lg shadow-glow-red">
                                Send Me The Guide
                            </Button>
                        </form>
                        <p className="text-white/50 text-xs mt-4">
                            By submitting, you agree to receive the prospectus and occasional updates. No spam, ever. See our <a href="/privacy-policy" className="underline hover:text-white/70">Privacy Policy</a>.
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
