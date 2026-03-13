import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
    title: string;
    description: string;
    canonicalUrl?: string;
    ogImage?: string;
    schema?: Record<string, any> | Record<string, any>[];
    breadcrumbs?: Array<{ name: string; url: string }>;
    type?: 'website' | 'article';
    noIndex?: boolean;
}

const defaultOgImage = 'https://capitalcityroofing.net/og-image.webp';
const siteName = 'Capital City Roofing Licensed Operating Platform';

export const SEOHead: React.FC<SEOHeadProps> = ({
    title,
    description,
    canonicalUrl,
    ogImage = defaultOgImage,
    schema,
    breadcrumbs,
    type = 'website',
    noIndex = false,
}) => {
    const fullTitle = `${title} | ${siteName}`;
    const baseUrl = 'https://capitalcityroofing.net';
    const url = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;

    // Generate BreadcrumbList Schema if breadcrumbs are provided
    const breadcrumbSchema = breadcrumbs
        ? {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbs.map((crumb, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: crumb.name,
                item: `${baseUrl}${crumb.url}`,
            })),
        }
        : null;

    // Combine multiple schemas
    const schemasToRender = [];
    if (schema) {
        if (Array.isArray(schema)) {
            schemasToRender.push(...schema);
        } else {
            schemasToRender.push(schema);
        }
    }
    if (breadcrumbSchema) {
        schemasToRender.push(breadcrumbSchema);
    }

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {noIndex && <meta name="robots" content="noindex, nofollow" />}
            {canonicalUrl && <link rel="canonical" href={url} />}

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* JSON-LD Schema */}
            {schemasToRender.length > 0 && (
                <script type="application/ld+json">
                    {JSON.stringify(schemasToRender.length === 1 ? schemasToRender[0] : schemasToRender)}
                </script>
            )}
        </Helmet>
    );
};
