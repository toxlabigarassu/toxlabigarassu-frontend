import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CompanyConfig } from '../classes/company.config';
import { SeoConfig } from '../classes/seo.config';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {}

  applyHomePageSeo(): void {
    const company = CompanyConfig.data;
    const pageUrl = this.getOrigin();
    const socialImageUrl = this.toAbsoluteUrl(company.socialImageUrl, pageUrl);

    this.title.setTitle(SeoConfig.title);
    this.document.documentElement.lang = 'pt-BR';

    this.updateTag('name', 'description', SeoConfig.description);
    this.updateTag('name', 'keywords', SeoConfig.keywords.join(', '));
    this.updateTag(
      'name',
      'robots',
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    );
    this.updateTag('name', 'googlebot', 'index, follow, max-image-preview:large');
    this.updateTag('name', 'author', SeoConfig.siteName);
    this.updateTag('name', 'geo.region', 'BR-PE');
    this.updateTag('name', 'geo.placename', `${company.city}, ${company.state}`);
    this.updateTag(
      'name',
      'geo.position',
      `${company.latitude};${company.longitude}`,
    );
    this.updateTag('name', 'ICBM', `${company.latitude}, ${company.longitude}`);

    this.updateTag('property', 'og:locale', 'pt_BR');
    this.updateTag('property', 'og:type', 'website');
    this.updateTag('property', 'og:title', SeoConfig.title);
    this.updateTag('property', 'og:description', SeoConfig.description);
    this.updateTag('property', 'og:url', pageUrl);
    this.updateTag('property', 'og:site_name', SeoConfig.siteName);
    this.updateTag('property', 'og:image', socialImageUrl);

    this.updateTag('name', 'twitter:card', 'summary_large_image');
    this.updateTag('name', 'twitter:title', SeoConfig.title);
    this.updateTag('name', 'twitter:description', SeoConfig.description);
    this.updateTag('name', 'twitter:image', socialImageUrl);

    this.setCanonical(pageUrl);
    this.setJsonLd(
      'local-business-schema',
      this.buildLocalBusinessSchema(pageUrl, socialImageUrl),
    );
    this.setJsonLd('faq-schema', this.buildFaqSchema());
    this.setJsonLd('website-schema', this.buildWebsiteSchema(pageUrl));
  }

  private buildLocalBusinessSchema(pageUrl: string, socialImageUrl: string) {
    const company = CompanyConfig.data;

    return {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      '@id': `${pageUrl}#organization`,
      name: SeoConfig.siteName,
      alternateName: ['Toxlab Igarassu', 'Toxlab Toxicologico', 'Toxlab Toxicológico'],
      url: pageUrl,
      image: socialImageUrl,
      description: SeoConfig.description,
      telephone: company.phone,
      email: company.email.toLowerCase(),
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.streetAddress,
        addressLocality: company.city,
        addressRegion: company.state,
        postalCode: company.postalCode,
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: company.latitude,
        longitude: company.longitude,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '16:00',
        },
      ],
      areaServed: SeoConfig.serviceAreas.map((area) => ({
        '@type': 'City',
        name: area,
      })),
      hasMap: company.mapSearchUrl,
      sameAs: [company.instagramLink],
      knowsAbout: SeoConfig.keywords,
    };
  }

  private buildFaqSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: SeoConfig.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };
  }

  private buildWebsiteSchema(pageUrl: string) {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SeoConfig.siteName,
      url: pageUrl,
      inLanguage: 'pt-BR',
    };
  }

  private updateTag(attribute: 'name' | 'property', value: string, content: string): void {
    this.meta.updateTag({ [attribute]: value, content });
  }

  private setCanonical(url: string): void {
    let link = this.document.head.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.href = url;
  }

  private setJsonLd(id: string, payload: object): void {
    this.document.getElementById(id)?.remove();

    const script = this.document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(payload);
    this.document.head.appendChild(script);
  }

  private getOrigin(): string {
    if (!isPlatformBrowser(this.platformId)) {
      return CompanyConfig.data.websiteUrl || SeoConfig.baseUrl;
    }

    return window.location.origin;
  }

  private toAbsoluteUrl(path: string, baseUrl: string): string {
    if (/^https?:\/\//.test(path)) {
      return path;
    }

    return new URL(path, `${baseUrl}/`).toString();
  }
}
