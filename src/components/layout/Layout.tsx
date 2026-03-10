import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Header } from './Header';
import { Footer } from './Footer';
import { LeadCaptureModal } from '../conversion/LeadCaptureModal';
import { StickyMobileCTA } from '../conversion/StickyMobileCTA';
import { StickyDesktopCTA } from '../conversion/StickyDesktopCTA';

export const Layout: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />

            {/* Global Conversion Elements */}
            <LeadCaptureModal />
            <StickyMobileCTA />
            <StickyDesktopCTA />

            <Toaster position="top-center" richColors />
        </div>
    );
};
