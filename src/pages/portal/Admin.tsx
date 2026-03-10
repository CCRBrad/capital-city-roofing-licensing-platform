import React from 'react';
import { SEOHead } from '../../components/SEOHead';
import { Card, CardContent } from '../../components/ui/card';
import { Construction } from 'lucide-react';

const Admin: React.FC = () => {
    return (
        <>
            <SEOHead title="Platform Admin | Operator Portal" description="Platform Admin module for Capital City Roofing operators." />
            
            <div className="space-y-8 animate-fade-in">
                <div>
                    <h1 className="text-4xl font-black font-display text-primary uppercase tracking-tight mb-2">
                        Platform Admin
                    </h1>
                    <p className="text-muted-foreground">
                        Module is currently under active development.
                    </p>
                </div>

                <Card className="border-border shadow-navy-sm">
                    <CardContent className="p-16 flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
                            <Construction className="w-10 h-10 text-muted-foreground" />
                        </div>
                        <h2 className="text-2xl font-black font-heading text-navy-950 mb-4">Coming Soon</h2>
                        <p className="text-muted-foreground max-w-md mx-auto">
                            We are building out the platform admin infrastructure. It will be available in the upcoming Q4 platform release.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default Admin;
