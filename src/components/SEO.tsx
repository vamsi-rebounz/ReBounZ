import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  section?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'ReBounZ | Enterprise Software Made Accessible for Small Businesses',
  description = 'ReBounZ bridges the gap between large tech companies and small enterprises. We deliver powerful, affordable software solutions including custom development, web apps, mobile apps, and technology consulting.',
  keywords = 'software development, custom software, web applications, mobile applications, technology consulting, data engineering, small business software, enterprise software, affordable software solutions, ReBounZ, SaamCars',
  image = 'https://rebounz.org/icons/logo.jpeg',
  url = 'https://rebounz.org',
  type = 'website',
  section
}) => {
  const fullTitle = section ? `${title} - ${section}` : title;
  const fullUrl = section ? `${url}#${section.toLowerCase()}` : url;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO; 