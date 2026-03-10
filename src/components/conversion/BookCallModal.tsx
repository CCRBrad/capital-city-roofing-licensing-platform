import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Calendar, Clock, Video } from 'lucide-react';

interface BookCallModalProps {
    trigger?: React.ReactNode;
    children?: React.ReactNode;
}

export const BookCallModal: React.FC<BookCallModalProps> = ({ trigger, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {trigger || children || (
                    <Button variant="default" className="bg-[hsl(38,75%,50%)] hover:bg-[hsl(45,90%,60%)] text-navy-950 font-bold">
                        Book a Call
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] border-none shadow-navy-2xl overflow-hidden p-0">
                <div className="bg-navy-900 text-white p-6 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(38,75%,50%)] rounded-bl-full opacity-10"></div>
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-black font-display tracking-wide uppercase">Schedule Your Intro Call</DialogTitle>
                        <DialogDescription className="text-white/80">
                            Speak directly with our team to explore the Capital City Roofing Licensed Operating Platform model.
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <div className="p-6 bg-white flex flex-col items-center justify-center min-h-[400px]">
                    {/* Calendar placeholder. In a real implementation, you'd embed a Calendly or Hubspot widget here */}
                    <div className="w-full max-w-md bg-muted rounded-lg border border-border p-8 text-center space-y-4">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-navy-100 text-primary rounded-full flex items-center justify-center shadow-inner">
                                <Calendar className="w-8 h-8" />
                            </div>
                        </div>

                        <h4 className="font-bold text-xl text-navy-950">Select a Date & Time</h4>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-white p-4 rounded-md border border-border flex flex-col items-center justify-center shadow-sm hover:border-primary transition-colors cursor-pointer">
                                <Clock className="w-6 h-6 text-secondary mb-2" />
                                <span className="text-sm font-bold text-navy-900">15 Min Discovery</span>
                            </div>
                            <div className="bg-white p-4 rounded-md border border-border flex flex-col items-center justify-center shadow-sm hover:border-primary transition-colors cursor-pointer">
                                <Video className="w-6 h-6 text-secondary mb-2" />
                                <span className="text-sm font-bold text-navy-900">45 Min Deep Dive</span>
                            </div>
                        </div>

                        <Button className="w-full mt-6 bg-primary hover:bg-navy-800 text-white" onClick={() => setOpen(false)}>
                            Continue to Embed Widget
                        </Button>
                        <p className="text-xs text-muted-foreground mt-4">
                            * This is a placeholder for a calendar booking widget.
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
