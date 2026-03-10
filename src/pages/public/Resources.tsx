import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/SEOHead';
import { blogPosts } from '../../data/blogPosts';
import { SVGCurve } from '../../components/ui/SVGCurve';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { format } from 'date-fns';

const Resources: React.FC = () => {
    return (
        <>
            <SEOHead
                title="Resources & Insights | Capital City Roofing"
                description="Learn how to scale a roofing business, optimize operations, and leverage AI through our operator insights."
            />

            {/* Hero */}
            <section className="bg-navy-950 text-white py-24 relative text-center z-10 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary rounded-full blur-[150px] opacity-10 -z-10"></div>
                <div className="container-custom relative z-10 max-w-4xl">
                    <span className="text-[hsl(38,75%,50%)] font-bold tracking-widest uppercase text-sm mb-4 block">Platform Insights</span>
                    <h1 className="text-5xl md:text-7xl font-black font-display uppercase tracking-tight mb-6 mt-4">
                        Operator <span className="text-gradient-red">Playbook</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80">
                        Insights, strategies, and operational guides for scaling a high-margin roofing business.
                    </p>
                </div>
                <SVGCurve fill="#f3f4f6" />
            </section>

            {/* Blog Grid */}
            <section className="py-24 bg-muted border-b border-border">
                <div className="container-custom">
                    {/* Featured Post */}
                    {blogPosts.length > 0 && (
                        <div className="mb-16">
                            <Link to={`/resources/${blogPosts[0].slug}`} className="group relative block bg-white rounded-2xl overflow-hidden shadow-navy-xl border border-border flex flex-col md:flex-row hover:-translate-y-2 transition-transform">
                                <div className="md:w-1/2 aspect-video md:aspect-auto relative overflow-hidden">
                                    <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-navy-950/0 transition-colors z-10"></div>
                                    <img
                                        src={blogPosts[0].coverImage}
                                        alt={blogPosts[0].title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-6 left-6 z-20">
                                        <span className="bg-[hsl(38,75%,50%)] text-navy-950 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-glow-gold">Featured</span>
                                    </div>
                                </div>
                                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <div className="flex items-center space-x-4 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                                        <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> {format(new Date(blogPosts[0].publishedAt), 'MMM dd, yyyy')}</span>
                                        <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> {blogPosts[0].readTime}</span>
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-black font-heading text-primary mb-4 group-hover:text-secondary transition-colors">
                                        {blogPosts[0].title}
                                    </h2>
                                    <p className="text-muted-foreground text-lg mb-8 line-clamp-3">
                                        {blogPosts[0].excerpt}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex items-center space-x-3">
                                            <img src={blogPosts[0].author.avatarUrl} alt={blogPosts[0].author.name} className="w-10 h-10 rounded-full border-2 border-primary/10 object-cover" />
                                            <div>
                                                <p className="font-bold text-sm text-primary leading-tight">{blogPosts[0].author.name}</p>
                                                <p className="text-xs text-muted-foreground">{blogPosts[0].author.role}</p>
                                            </div>
                                        </div>
                                        <div className="text-secondary font-bold text-sm flex items-center group-hover:underline">
                                            Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}

                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-black font-display uppercase tracking-tight text-primary border-b border-border pb-4 inline-block px-8">Latest Articles</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.slice(1).map((post) => (
                            <Link to={`/resources/${post.slug}`} key={post.id} className="bg-white rounded-2xl shadow-navy-sm border border-border overflow-hidden card-hover group flex flex-col">
                                <div className="relative aspect-video overflow-hidden">
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{post.category}</span>
                                    </div>
                                    <img
                                        src={post.coverImage}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6 md:p-8 flex flex-col flex-1">
                                    <div className="flex items-center space-x-4 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
                                        <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {format(new Date(post.publishedAt), 'MMM dd')}</span>
                                        <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-black font-heading text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                                        <div className="flex items-center space-x-2">
                                            <img src={post.author.avatarUrl} alt={post.author.name} className="w-8 h-8 rounded-full border border-primary/10 object-cover" />
                                            <p className="font-bold text-xs text-primary">{post.author.name}</p>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-secondary group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Resources;
