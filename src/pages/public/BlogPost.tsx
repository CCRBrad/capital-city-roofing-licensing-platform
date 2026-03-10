import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../components/SEOHead';
import { blogPosts } from '../../data/blogPosts';
import { ArrowLeft, Clock, Calendar, Facebook, Twitter, Linkedin } from 'lucide-react';
import { format } from 'date-fns';
import { Button } from '../../components/ui/button';

export const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const post = blogPosts.find(p => p.slug === slug);

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center bg-muted">
                <h1 className="text-3xl font-black font-heading text-primary mb-4">Post Not Found</h1>
                <Button onClick={() => navigate('/resources')} variant="outline">Back to Resources</Button>
            </div>
        );
    }

    // Very basic Markdown parser for bold/headings/lists since we don't have a library
    const renderMarkdownText = (text: string) => {
        return text.split('\n').map((line, idx) => {
            if (line.startsWith('# ')) {
                return <h1 key={idx} className="text-3xl md:text-4xl font-black font-display uppercase tracking-tight text-primary mt-12 mb-6">{line.replace('# ', '')}</h1>;
            }
            if (line.startsWith('## ')) {
                return <h2 key={idx} className="text-2xl md:text-3xl font-black font-heading text-primary mt-10 mb-4">{line.replace('## ', '')}</h2>;
            }
            if (line.startsWith('* **')) {
                const strongText = line.match(/\*\*(.*?)\*\*/)?.[1];
                const resText = line.replace(`* **${strongText}**`, '').trim();
                return (
                    <li key={idx} className="mb-2 text-muted-foreground flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 mr-3 shrink-0"></div>
                        <span><strong className="text-navy-900 border-b border-secondary/30">{strongText}</strong> {resText}</span>
                    </li>
                );
            }
            if (line.trim() === '') {
                return <div key={idx} className="h-4"></div>;
            }
            return <p key={idx} className="text-lg text-muted-foreground leading-relaxed mb-6">{line}</p>;
        });
    };

    return (
        <>
            <SEOHead
                title={`${post.title} | Capital City Roofing`}
                description={post.excerpt}
            />

            <article className="bg-white pb-24">
                {/* Header Image & Meta */}
                <header className="relative w-full h-[60vh] md:h-[70vh] flex items-end">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-navy-950/40"></div>
                    </div>

                    <div className="container-custom relative z-10 w-full max-w-4xl pb-16">
                        <Link to="/resources" className="inline-flex items-center text-white/70 hover:text-white font-bold text-sm uppercase tracking-widest mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Resources
                        </Link>

                        <span className="inline-block bg-[hsl(38,75%,50%)] text-navy-950 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-glow-gold">
                            {post.category}
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-white/80 uppercase tracking-widest mt-8 border-t border-white/20 pt-6">
                            <div className="flex items-center space-x-3">
                                <img src={post.author.avatarUrl} alt={post.author.name} className="w-10 h-10 rounded-full border-2 border-white/20 object-cover" />
                                <span>{post.author.name}</span>
                            </div>
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary hidden sm:block"></span>
                            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {format(new Date(post.publishedAt), 'MMM dd, yyyy')}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary hidden sm:block"></span>
                            <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {post.readTime}</span>
                        </div>
                    </div>
                </header>

                {/* Content Body */}
                <div className="container-custom max-w-4xl mt-16 flex flex-col lg:flex-row gap-12">

                    {/* Social Share Sidebar */}
                    <div className="hidden lg:flex flex-col space-y-4 pt-12 items-center w-12 shrink-0 sticky top-32">
                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 rotate-180" style={{ writingMode: 'vertical-rl' }}>Share</div>
                        <div className="w-px h-8 bg-border mb-2"></div>
                        <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-white hover:border-secondary transition-colors"><Linkedin className="w-4 h-4" /></a>
                        <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-white hover:border-secondary transition-colors"><Twitter className="w-4 h-4" /></a>
                        <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-white hover:border-secondary transition-colors"><Facebook className="w-4 h-4" /></a>
                    </div>

                    <div className="flex-1">
                        <div className="prose prose-lg prose-navy max-w-none">
                            {renderMarkdownText(post.content)}
                        </div>

                        <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-4 py-1.5 bg-muted text-primary text-sm font-bold uppercase tracking-widest rounded-full">{tag}</span>
                            ))}
                        </div>

                        {/* In-post CTA */}
                        <div className="mt-16 bg-navy-50 rounded-2xl p-8 md:p-12 border border-primary/10 text-center relative isolate overflow-hidden shadow-inset-sm">
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary rounded-full blur-[80px] opacity-20 -z-10"></div>

                            <h3 className="text-3xl font-black font-display uppercase tracking-tight text-primary mb-4">Ready to implement this system?</h3>
                            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                                Stop struggling with margins and scale predictably. Apply for an exclusive licensed territory today.
                            </p>
                            <Link to="/apply">
                                <Button className="h-14 px-8 text-lg font-bold bg-secondary hover:bg-red-700 text-white shadow-glow-red rounded-full">
                                    Apply for a Market Audit
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};
